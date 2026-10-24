import { NextResponse } from "next/server";
import { getBookings, updateBookingStatus, Booking } from "@/lib/bookings";

const configuredPassword = process.env.ADMIN_PASSWORD || "fdfs@admin2026";

function isAuthorized(request: Request): boolean {
  const adminKey = request.headers.get("x-admin-key");
  const authHeader = request.headers.get("authorization");
  
  if (adminKey && adminKey.trim() === configuredPassword.trim()) return true;
  if (authHeader) {
    const token = authHeader.replace(/^Bearer\s+/i, "").trim();
    if (token === configuredPassword.trim()) return true;
  }
  return false;
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { error: "Unauthorized: Valid admin environment password required" },
      { status: 401 }
    );
  }

  try {
    const bookings = getBookings();
    const newCount = bookings.filter((b) => b.status === "new").length;
    return NextResponse.json({
      success: true,
      bookings,
      newCount,
      total: bookings.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { error: "Unauthorized: Valid admin environment password required" },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json({ error: "Booking ID and status required" }, { status: 400 });
    }

    const validStatuses: Booking["status"][] = ["new", "contacted", "confirmed", "completed"];
    if (!validStatuses.includes(status)) {
      return NextResponse.json({ error: "Invalid status value" }, { status: 400 });
    }

    const updated = updateBookingStatus(id, status);
    if (!updated) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, id, status });
  } catch (error) {
    console.error("Error updating booking:", error);
    return NextResponse.json({ error: "Failed to update booking" }, { status: 500 });
  }
}
