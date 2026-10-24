import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const configuredPassword = process.env.ADMIN_PASSWORD || "fdfs@admin2026";

    const body = await request.json();
    const { password } = body;

    if (!password || typeof password !== "string") {
      return NextResponse.json({ error: "Password is required" }, { status: 400 });
    }

    if (password.trim() === configuredPassword.trim()) {
      return NextResponse.json({
        success: true,
        message: "Authenticated successfully",
        token: configuredPassword.trim(),
      });
    }

    return NextResponse.json(
      { error: "Incorrect password. Access denied." },
      { status: 401 }
    );
  } catch (error) {
    console.error("Auth verification error:", error);
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 });
  }
}
