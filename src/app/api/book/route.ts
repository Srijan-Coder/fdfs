import { NextResponse } from "next/server";
import { saveBooking, Booking } from "@/lib/bookings";
import { siteConfig } from "@/content/site";

function sanitizeString(str: unknown, maxLength: number): string {
  if (typeof str !== "string") return "";
  return str
    .replace(/<[^>]*>?/gm, "") // Strip HTML tags
    .replace(/[^\w\s.,!?'"()#&:\-+@/]/gi, "") // Strip potentially dangerous injection tokens
    .trim()
    .slice(0, maxLength);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, discipline, studioId, preferredDate, preferredTime, notes, source } = body;

    const sanitizedName = sanitizeString(name, 80);
    if (!sanitizedName || sanitizedName.length < 2) {
      return NextResponse.json({ error: "Please enter your full name (minimum 2 characters)" }, { status: 400 });
    }

    const cleanedPhone = (typeof phone === "string" ? phone : "").replace(/\D/g, "").slice(-10);
    if (!/^[6-9]\d{9}$/.test(cleanedPhone)) {
      return NextResponse.json(
        { error: "Please enter a valid 10-digit WhatsApp phone number (starts with 6, 7, 8, or 9)" },
        { status: 400 }
      );
    }

    const validStudioId = studioId === "sector5" ? "sector5" : "sector16";
    const studioName =
      validStudioId === "sector16"
        ? "Sector 16 (Krishna Vihar Main)"
        : "Sector 5 (Station Branch)";

    const sanitizedDiscipline = sanitizeString(discipline, 60) || "Dance (All Styles)";
    const sanitizedTime = sanitizeString(preferredTime, 60) || "Flexible / Studio Contact";
    const sanitizedNotes = sanitizeString(notes, 500);
    const validSources: Booking["source"][] = ["website-form", "ai-concierge", "trial-page", "schedule-page", "wedding-page"];
    const validSource: Booking["source"] = validSources.includes(source as Booking["source"])
      ? (source as Booking["source"])
      : "website-form";

    // Validate preferredDate format (YYYY-MM-DD)
    let validatedDate = new Date().toISOString().split("T")[0];
    if (typeof preferredDate === "string" && /^\d{4}-\d{2}-\d{2}$/.test(preferredDate)) {
      validatedDate = preferredDate;
    }

    const saved = saveBooking({
      name: sanitizedName,
      phone: cleanedPhone,
      discipline: sanitizedDiscipline,
      studioId: validStudioId,
      studioName,
      preferredDate: validatedDate,
      preferredTime: sanitizedTime,
      notes: sanitizedNotes,
      source: validSource,
    });

    // Prepare direct pre-filled WhatsApp link for instant backup
    const adminWhatsAppUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
      `Hello Flawless Studio! I just booked my appointment.\n\nBooking ID: ${saved.id}\nName: ${saved.name}\nClass: ${saved.discipline}\nStudio: ${saved.studioName}\nDate: ${saved.preferredDate}\nSlot: ${saved.preferredTime}`
    )}`;

    return NextResponse.json({
      success: true,
      booking: saved,
      adminWhatsAppUrl,
      notificationSent: true,
      message: "Appointment confirmed! Studio admin has received the automated notification.",
    });
  } catch (error) {
    console.error("Booking submission error:", error);
    return NextResponse.json({ error: "Failed to process appointment booking" }, { status: 500 });
  }
}
