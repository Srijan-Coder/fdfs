import fs from "fs";
import path from "path";

export interface Booking {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  discipline: string;
  studioId: "sector16" | "sector5";
  studioName: string;
  preferredDate?: string;
  preferredTime?: string;
  notes?: string;
  status: "new" | "contacted" | "confirmed" | "completed";
  source: "website-form" | "ai-concierge" | "trial-page" | "schedule-page" | "wedding-page";
}

const DATA_DIR = path.join(process.cwd(), "data");
const BOOKINGS_FILE = path.join(DATA_DIR, "bookings.json");

function ensureDataFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(BOOKINGS_FILE)) {
    // Seed with a few initial verified bookings
    const initialBookings: Booking[] = [
      {
        id: "FDFS-TR-8041",
        createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
        name: "Neha Sharma",
        phone: "9820123456",
        discipline: "Zumba & Fitness",
        studioId: "sector16",
        studioName: "Sector 16 (Krishna Vihar Main)",
        preferredDate: new Date(Date.now() + 86400000).toISOString().split("T")[0],
        preferredTime: "07:00 AM - 08:00 AM",
        notes: "Looking to lose weight, morning batch only",
        status: "confirmed",
        source: "trial-page",
      },
      {
        id: "FDFS-TR-8042",
        createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
        name: "Rohan & Sneha",
        phone: "9819876543",
        discipline: "Wedding Choreography",
        studioId: "sector16",
        studioName: "Sector 16 (Krishna Vihar Main)",
        preferredDate: new Date(Date.now() + 86400000 * 3).toISOString().split("T")[0],
        preferredTime: "Evening",
        notes: "Wedding in December, need couple dance choreography for sangeet",
        status: "new",
        source: "wedding-page",
      },
      {
        id: "FDFS-TR-8043",
        createdAt: new Date(Date.now() - 3600000).toISOString(),
        name: "Tanvi Kulkarni",
        phone: "9833445566",
        discipline: "Hip Hop & Urban Dance",
        studioId: "sector5",
        studioName: "Sector 5 (Station Branch)",
        preferredDate: new Date(Date.now() + 86400000 * 2).toISOString().split("T")[0],
        preferredTime: "06:15 PM - 07:15 PM",
        notes: "Beginner level, evening batch",
        status: "new",
        source: "website-form",
      },
    ];
    fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(initialBookings, null, 2), "utf8");
  }
}

export function getBookings(): Booking[] {
  ensureDataFile();
  try {
    const raw = fs.readFileSync(BOOKINGS_FILE, "utf8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading bookings file:", err);
    return [];
  }
}

export function saveBooking(bookingData: Omit<Booking, "id" | "createdAt" | "status">): Booking {
  ensureDataFile();
  const bookings = getBookings();
  
  // Generate human-friendly reference ID (e.g., FDFS-TR-9214)
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const newBooking: Booking = {
    ...bookingData,
    id: `FDFS-TR-${randomSuffix}`,
    createdAt: new Date().toISOString(),
    status: "new",
  };

  bookings.unshift(newBooking);
  fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2), "utf8");

  // Log automated notification event
  try {
    const notifLogFile = path.join(DATA_DIR, "notifications.log");
    const logEntry = `[${newBooking.createdAt}] NEW_BOOKING: ${newBooking.id} | ${newBooking.name} (${newBooking.phone}) | ${newBooking.discipline} @ ${newBooking.studioName} | Status: DISPATCHED\n`;
    fs.appendFileSync(notifLogFile, logEntry, "utf8");
  } catch (logErr) {
    console.error("Error logging notification:", logErr);
  }

  return newBooking;
}

export function updateBookingStatus(id: string, status: Booking["status"]): boolean {
  ensureDataFile();
  const bookings = getBookings();
  const index = bookings.findIndex((b) => b.id === id);
  if (index === -1) return false;

  bookings[index].status = status;
  fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2), "utf8");
  return true;
}
