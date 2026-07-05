import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { addMessage } from "@/lib/db";

const contactSchema = z.object({
  name: z.string().min(2, "Name is too short").max(120),
  email: z.string().email("Enter a valid email"),
  budget: z.string().max(60).optional(),
  message: z.string().min(10, "Tell me a bit more about the project").max(4000),
  // honeypot field — real users never fill this in
  company_website: z.string().max(0).optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" },
        { status: 400 }
      );
    }

    const { name, email, budget, message } = parsed.data;
    const record = addMessage({ name, email, budget, message });

    return NextResponse.json({ ok: true, id: record.id });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
