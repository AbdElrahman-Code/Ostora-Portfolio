"use client";

import { useState } from "react";
import { Lock, Loader2 } from "lucide-react";

type Message = {
  id: number;
  name: string;
  email: string;
  budget: string;
  message: string;
  created_at: string;
};

export default function AdminPage() {
  const [key, setKey] = useState("");
  const [messages, setMessages] = useState<Message[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function load(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/messages", {
        headers: { "x-admin-key": key },
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setError(json.error ?? "Unauthorized");
        setMessages(null);
      } else {
        setMessages(json.messages);
      }
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen px-6 py-16 max-w-3xl mx-auto">
      <h1 className="font-display text-2xl font-semibold mb-2 flex items-center gap-2">
        <Lock size={20} className="text-signal-cyan" /> Admin — Contact Messages
      </h1>
      <p className="text-muted text-sm mb-8">
        Read-only view of messages submitted through the contact form, stored
        in this project's own SQLite database. Set the{" "}
        <code className="font-mono text-signal-cyan">ADMIN_KEY</code>{" "}
        environment variable to enable access.
      </p>

      <form onSubmit={load} className="flex gap-3 mb-10">
        <input
          type="password"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Admin key"
          className="flex-1 bg-transparent border-token border rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-signal-cyan/60"
        />
        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? <Loader2 size={16} className="animate-spin" /> : "Unlock"}
        </button>
      </form>

      {error && <p className="text-red-400 text-sm mb-6">{error}</p>}

      {messages && (
        <div className="space-y-4">
          {messages.length === 0 && (
            <p className="text-muted text-sm">No messages yet.</p>
          )}
          {messages.map((m) => (
            <div key={m.id} className="card-border p-5">
              <div className="flex justify-between items-baseline mb-2">
                <p className="font-medium">{m.name}</p>
                <span className="font-mono text-[11px] text-muted">{m.created_at}</span>
              </div>
              <p className="text-xs text-muted mb-3">
                {m.email} {m.budget && `· ${m.budget}`}
              </p>
              <p className="text-sm text-muted leading-relaxed whitespace-pre-wrap">
                {m.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
