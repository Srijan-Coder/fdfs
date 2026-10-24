"use client";

import { useState, useEffect, useRef } from "react";
import { Booking } from "@/lib/bookings";
import { siteConfig } from "@/content/site";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [authToken, setAuthToken] = useState<string>("");

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [newCount, setNewCount] = useState(0);
  const [filter, setFilter] = useState<"all" | "new" | "contacted" | "confirmed">("all");
  const [isLoading, setIsLoading] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [lastCheckTime, setLastCheckTime] = useState<string>("");
  const prevCountRef = useRef<number>(0);

  // Check saved session on mount
  useEffect(() => {
    const savedToken = sessionStorage.getItem("fdfs_admin_token");
    if (savedToken) {
      setAuthToken(savedToken);
      verifyExistingSession(savedToken);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const verifyExistingSession = async (token: string) => {
    try {
      const res = await fetch("/api/admin/bookings", {
        headers: { "x-admin-key": token },
      });
      if (res.ok) {
        const data = await res.json();
        setIsAuthenticated(true);
        setBookings(data.bookings || []);
        setNewCount(data.newCount || 0);
        setLastCheckTime(new Date().toLocaleTimeString());
        prevCountRef.current = data.bookings?.length || 0;
      } else {
        sessionStorage.removeItem("fdfs_admin_token");
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordInput.trim()) {
      setAuthError("Please enter your admin password.");
      return;
    }

    setIsVerifying(true);
    setAuthError("");

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: passwordInput.trim() }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        sessionStorage.setItem("fdfs_admin_token", data.token);
        setAuthToken(data.token);
        setIsAuthenticated(true);
        setPasswordInput("");
        fetchBookings(data.token);
      } else {
        setAuthError(data.error || "Incorrect password. Access denied.");
      }
    } catch {
      setAuthError("Verification failed. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("fdfs_admin_token");
    setAuthToken("");
    setIsAuthenticated(false);
    setBookings([]);
  };

  // Audio tone generator using Web Audio API for zero-dependency notification chime
  const playChime = () => {
    if (!soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5

      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.45);
    } catch (err) {
      console.warn("Audio chime prevented:", err);
    }
  };

  const fetchBookings = async (token = authToken) => {
    if (!token) return;
    try {
      const res = await fetch("/api/admin/bookings", {
        headers: { "x-admin-key": token },
      });
      if (res.status === 401) {
        handleLogout();
        return;
      }
      const data = await res.json();
      if (data.success) {
        setBookings(data.bookings);
        setNewCount(data.newCount);
        setLastCheckTime(new Date().toLocaleTimeString());

        // Detect new booking addition
        if (prevCountRef.current > 0 && data.bookings.length > prevCountRef.current) {
          playChime();
          if (Notification.permission === "granted") {
            const latest = data.bookings[0];
            new Notification("New FDFS Studio Appointment!", {
              body: `${latest.name} booked ${latest.discipline} at ${latest.studioName}`,
              icon: "/favicon.ico",
            });
          }
        }
        prevCountRef.current = data.bookings.length;
      }
    } catch (err) {
      console.error("Error polling bookings:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isAuthenticated || !authToken) return;
    const interval = setInterval(() => fetchBookings(authToken), 8000); // Poll every 8s
    return () => clearInterval(interval);
  }, [isAuthenticated, authToken, soundEnabled]);

  const requestNotificationPermission = async () => {
    if ("Notification" in window) {
      const perm = await Notification.requestPermission();
      setNotificationsEnabled(perm === "granted");
    }
  };

  const updateStatus = async (id: string, status: Booking["status"]) => {
    if (!authToken) return;
    try {
      const res = await fetch("/api/admin/bookings", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": authToken,
        },
        body: JSON.stringify({ id, status }),
      });
      if (res.ok) {
        setBookings((prev) =>
          prev.map((b) => (b.id === id ? { ...b, status } : b))
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filtered = bookings.filter((b) => {
    if (filter === "all") return true;
    return b.status === filter;
  });

  // Loading state while checking session
  if (isAuthenticated === null) {
    return (
      <main className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-offwhite font-mono text-xs">
        <span className="w-2 h-2 rounded-full bg-accent animate-ping mr-3" />
        INITIALIZING SECURE TERMINAL...
      </main>
    );
  }

  // Password Lock Screen
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md p-8 sm:p-10 rounded-2xl border border-hairline bg-surface shadow-2xl relative overflow-hidden">
          {/* Subtle top neon accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

          <div className="text-center mb-8">
            <span className="text-[10px] font-mono uppercase tracking-widest text-accent block mb-2">
              /RESTRICTED STUDIO ACCESS
            </span>
            <h1 className="text-3xl font-display font-black tracking-tight text-offwhite mb-2">
              Studio Operations Terminal.
            </h1>
            <p className="text-xs text-muted leading-relaxed">
              Enter authorized administrator password to view live leads, phone numbers, and notification feed.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label
                htmlFor="admin-password-input"
                className="block text-xs font-mono uppercase tracking-widest text-muted mb-2"
              >
                Passkey Password *
              </label>
              <div className="relative">
                <input
                  id="admin-password-input"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter studio passkey..."
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  autoFocus
                  required
                  className="w-full px-4 py-3.5 pr-12 rounded-xl bg-[#141416] border border-hairline text-offwhite text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted hover:text-offwhite text-xs font-mono px-1 py-0.5 cursor-pointer"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>
              </div>
            </div>

            {authError && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono flex items-center gap-2">
                <span>✕</span>
                <span>{authError}</span>
              </div>
            )}

            <button
              id="admin-unlock-btn"
              type="submit"
              disabled={isVerifying}
              className="w-full py-3.5 rounded-full bg-accent text-[#0A0A0A] font-display font-bold text-xs uppercase tracking-wider hover:bg-offwhite transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-lg hover:shadow-accent/25 flex items-center justify-center gap-2"
            >
              <span>{isVerifying ? "Verifying..." : "Unlock Studio Dashboard →"}</span>
            </button>

            <div className="text-center pt-2">
              <span className="text-[10px] font-mono text-muted/60">
                Authorized studio administration only · Configured via environment passkey
              </span>
            </div>
          </form>
        </div>
      </main>
    );
  }

  // Authenticated Admin Dashboard
  return (
    <main className="pt-24 min-h-screen bg-[#0A0A0A]">
      {/* Header */}
      <section className="py-12 px-6 md:px-12 hairline-b">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-accent block">
                /Studio Operations Live
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-[10px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Live Automated Dispatch Active
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-offwhite">
              Appointments &amp; Leads Center.
            </h1>
            <p className="text-xs font-mono text-muted mt-1">
              Last synced: {lastCheckTime || "Connecting..."} · Auto-refreshing every 8 seconds
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`px-4 py-2 rounded-full text-xs font-mono border transition-colors cursor-pointer ${
                soundEnabled
                  ? "bg-accent/20 border-accent text-accent"
                  : "bg-surface border-hairline text-muted"
              }`}
            >
              Sound Alert: {soundEnabled ? "🔔 ON" : "🔕 OFF"}
            </button>

            <button
              onClick={requestNotificationPermission}
              className="px-4 py-2 rounded-full text-xs font-mono bg-surface border border-hairline text-offwhite hover:border-accent transition-colors cursor-pointer"
            >
              Desktop Push: {notificationsEnabled ? "✓ Active" : "Enable Push"}
            </button>

            <button
              onClick={() => fetchBookings(authToken)}
              className="px-4 py-2 rounded-full text-xs font-mono bg-surface border border-hairline text-offwhite hover:border-accent transition-colors cursor-pointer"
            >
              Refresh ↻
            </button>

            <button
              id="admin-logout-btn"
              onClick={handleLogout}
              className="px-4 py-2 rounded-full text-xs font-mono bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>Lock Terminal</span>
              <span>🔒</span>
            </button>
          </div>
        </div>
      </section>

      {/* Metrics Row */}
      <section className="py-8 px-6 md:px-12 hairline-b bg-surface/30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 rounded-2xl bg-surface border border-hairline">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted block mb-2">
              Total Bookings
            </span>
            <p className="text-3xl font-display font-black text-offwhite">
              {bookings.length}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-accent/40 relative overflow-hidden">
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-accent animate-ping" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-accent block mb-2">
              Needs Response
            </span>
            <p className="text-3xl font-display font-black text-accent">
              {newCount}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-hairline">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted block mb-2">
              Contacted
            </span>
            <p className="text-3xl font-display font-black text-offwhite">
              {bookings.filter((b) => b.status === "contacted").length}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-hairline">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted block mb-2">
              Confirmed Spots
            </span>
            <p className="text-3xl font-display font-black text-green-400">
              {bookings.filter((b) => b.status === "confirmed").length}
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 px-6 md:px-12 hairline-b">
        <div className="flex items-center gap-2">
          {(["all", "new", "contacted", "confirmed"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                filter === tab
                  ? "bg-accent text-[#0A0A0A] font-bold"
                  : "bg-surface text-muted border border-hairline hover:text-offwhite"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Bookings Feed */}
      <section className="py-8 px-6 md:px-12 min-h-[500px]">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted font-mono text-xs">
            No bookings under &quot;{filter}&quot; filter.
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map((booking) => {
              const waText = encodeURIComponent(
                `Hi ${booking.name}! Flawless Dance & Fitness Studio here regarding your ${booking.discipline} trial pass reservation (ID: ${booking.id}). We are excited to see you at our ${booking.studioName} campus!`
              );
              const waUrl = `https://wa.me/91${booking.phone}?text=${waText}`;

              return (
                <div
                  key={booking.id}
                  className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6 ${
                    booking.status === "new"
                      ? "bg-surface border-accent/60 shadow-lg shadow-accent/5"
                      : "bg-surface/50 border-hairline"
                  }`}
                >
                  {/* Left: Lead Details */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-accent">
                        {booking.id}
                      </span>
                      <span
                        className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded-full ${
                          booking.status === "new"
                            ? "bg-accent text-[#0A0A0A] font-bold"
                            : booking.status === "contacted"
                            ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                            : "bg-green-500/20 text-green-300 border border-green-500/30"
                        }`}
                      >
                        {booking.status}
                      </span>
                      <span className="text-[10px] font-mono text-muted">
                        via {booking.source} · {new Date(booking.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    <h2 className="text-2xl font-display font-bold text-offwhite">
                      {booking.name}
                    </h2>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted">
                      <span>📞 WhatsApp:</span>
                      <a
                        href={`tel:+91${booking.phone}`}
                        className="text-accent underline font-bold"
                      >
                        +91 {booking.phone}
                      </a>
                    </div>

                    {booking.notes && (
                      <p className="text-xs text-muted/90 bg-[#161618] p-3 rounded-lg border border-hairline mt-2 max-w-xl">
                        💬 &ldquo;{booking.notes}&rdquo;
                      </p>
                    )}
                  </div>

                  {/* Middle: Class & Slot */}
                  <div className="lg:w-1/3 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted block">
                      Class &amp; Location
                    </span>
                    <h3 className="text-lg font-display font-bold text-offwhite">
                      {booking.discipline}
                    </h3>
                    <p className="text-xs text-muted">
                      {booking.studioName}
                    </p>
                    <p className="text-xs font-mono text-offwhite/90">
                      📅 {booking.preferredDate} · ⏰ {booking.preferredTime}
                    </p>
                  </div>

                  {/* Right: Actions */}
                  <div className="flex flex-wrap items-center gap-2.5 lg:justify-end">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-full bg-emerald-500 text-[#0A0A0A] font-mono font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-colors flex items-center gap-1.5 shadow-md"
                    >
                      <span>REPLY WHATSAPP</span>
                      <span>💬</span>
                    </a>

                    {booking.status !== "contacted" && (
                      <button
                        onClick={() => updateStatus(booking.id, "contacted")}
                        className="px-4 py-2.5 rounded-full bg-surface border border-hairline hover:border-offwhite text-offwhite text-xs font-mono transition-colors cursor-pointer"
                      >
                        Mark Contacted
                      </button>
                    )}

                    {booking.status !== "confirmed" && (
                      <button
                        onClick={() => updateStatus(booking.id, "confirmed")}
                        className="px-4 py-2.5 rounded-full bg-surface border border-hairline hover:border-accent text-accent text-xs font-mono transition-colors cursor-pointer"
                      >
                        Confirm Spot
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
