import { NextRequest, NextResponse } from "next/server";
import { addVisit, getVisitCount } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    await req.json().catch(() => ({}));
    const count = addVisit();
    return NextResponse.json({ ok: true, count });
  } catch {
    return NextResponse.json({ ok: false, count: null }, { status: 500 });
  }
}

export async function GET() {
  try {
    const count = getVisitCount();
    return NextResponse.json({ ok: true, count });
  } catch {
    return NextResponse.json({ ok: false, count: null }, { status: 500 });
  }
}
