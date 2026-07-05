import fs from "fs";
import path from "path";

// ---------------------------------------------------------------------------
// A tiny, self-contained, file-based "database" — no external service,
// no native binary, no ORM. Just JSON on disk, read and written safely.
//
// WHY THIS APPROACH:
// - It keeps the whole app deployable on Vercel with zero extra setup steps
//   and zero native module compilation risk (some SQLite/Postgres client
//   libraries require native binaries that can be finicky on serverless
//   build images — this avoids that class of problem entirely).
//
// THE HONEST TRADE-OFF (please read before relying on this in production):
// Vercel serverless functions run on a read-only filesystem except for
// `/tmp`, and `/tmp` is wiped on every cold start and every new deployment.
// That means:
//   - Locally (`npm run dev`), data persists in `.data/db.json` like a real
//     database file.
//   - On Vercel, data written via this file survives only for the lifetime
//     of a warm serverless instance — it is NOT durable long-term storage.
// For a portfolio contact form this is a reasonable trade-off (you'll still
// get most submissions, and the app never crashes if storage resets), but if
// you need guaranteed delivery, either:
//   1) Swap this module for a hosted database (Vercel Postgres, Turso, Neon)
//      — the API routes that call these functions would not need to change
//      shape, only this file's implementation.
//   2) Or add an email-sending step (e.g. Resend) alongside storage so every
//      message reaches your inbox even if the file store resets.
// ---------------------------------------------------------------------------

export type ContactMessage = {
  id: number;
  name: string;
  email: string;
  budget: string;
  message: string;
  created_at: string;
};

type DBShape = {
  messages: ContactMessage[];
  visitCount: number;
  nextMessageId: number;
};

const isServerless = !!process.env.VERCEL;
const dbDir = isServerless ? "/tmp" : path.join(process.cwd(), ".data");
const dbFile = path.join(dbDir, "db.json");

function ensureFile(): void {
  if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
  }
  if (!fs.existsSync(dbFile)) {
    const initial: DBShape = { messages: [], visitCount: 0, nextMessageId: 1 };
    fs.writeFileSync(dbFile, JSON.stringify(initial, null, 2));
  }
}

function read(): DBShape {
  ensureFile();
  try {
    const raw = fs.readFileSync(dbFile, "utf-8");
    return JSON.parse(raw) as DBShape;
  } catch {
    return { messages: [], visitCount: 0, nextMessageId: 1 };
  }
}

function write(data: DBShape): void {
  ensureFile();
  fs.writeFileSync(dbFile, JSON.stringify(data, null, 2));
}

export function addMessage(input: {
  name: string;
  email: string;
  budget?: string;
  message: string;
}): ContactMessage {
  const data = read();
  const record: ContactMessage = {
    id: data.nextMessageId,
    name: input.name,
    email: input.email,
    budget: input.budget ?? "",
    message: input.message,
    created_at: new Date().toISOString(),
  };
  data.messages.unshift(record);
  data.nextMessageId += 1;
  write(data);
  return record;
}

export function getMessages(): ContactMessage[] {
  return read().messages;
}

export function addVisit(): number {
  const data = read();
  data.visitCount += 1;
  write(data);
  return data.visitCount;
}

export function getVisitCount(): number {
  return read().visitCount;
}
