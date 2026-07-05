import { NextRequest, NextResponse } from "next/server";
import { getMessages } from "@/lib/db";

export async function GET(req: NextRequest) {
  const key = req.headers.get("x-admin-key");
  const expected = process.env.ADMIN_KEY;

  if (!expected) {
    return NextResponse.json(
      { ok: false, error: "ADMIN_KEY is not configured on the server." },
      { status: 500 }
    );
  }

  if (key !== expected) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const messages = getMessages();
  return NextResponse.json({ ok: true, messages });
}
