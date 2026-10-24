"use client";

import { useEffect, useState } from "react";

export default function StudioStatusPill() {
  const [isOpen, setIsOpen] = useState(true);
  const [statusText, setStatusText] = useState("Open Now · Closes 10:30 PM");

  useEffect(() => {
    const checkStatus = () => {
      // Calculate IST (Indian Standard Time) UTC+5:30
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const ist = new Date(utc + 3600000 * 5.5);
      const hours = ist.getHours();
      const minutes = ist.getMinutes();
      const totalMinutes = hours * 60 + minutes;

      // Studio is open between 7:00 AM (420 min) and 10:30 PM (1350 min)
      const studioOpen = totalMinutes >= 420 && totalMinutes <= 1350;
      setIsOpen(studioOpen);

      if (studioOpen) {
        setStatusText("Open Now · Closes 10:30 PM");
      } else {
        setStatusText("Opens 7:00 AM · Sector 16 & 5");
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/80 border border-hairline text-[11px] font-mono tracking-wider backdrop-blur-md">
      <span
        className={`w-2 h-2 rounded-full live-dot ${
          isOpen ? "bg-emerald-400 shadow-[0_0_8px_#34d399]" : "bg-amber-400"
        }`}
      />
      <span className="text-offwhite font-medium">{statusText}</span>
    </div>
  );
}
