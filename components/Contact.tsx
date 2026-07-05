"use client";

import { useState } from "react";
import Section from "./Section";
import { Mail, Linkedin, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setErrorMsg(json.error ?? "Something went wrong.");
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <Section
      id="contact"
      index="07"
      label="Contact"
      title="Have a project in mind? Let's talk."
      description="Tell me a little about what you're building. I read every message myself."
    >
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
        <div className="space-y-5">
          <a
            href="mailto:abdelrahman1703485@miuegypt.edu.eg"
            className="card-border p-5 flex items-center gap-4 hover:border-signal-cyan/50 transition-colors"
          >
            <div className="h-11 w-11 rounded-xl bg-signal-indigo/10 grid place-items-center text-signal-indigo shrink-0">
              <Mail size={18} />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted">Email</p>
              <p className="text-sm font-medium truncate">
                abdelrahman1703485@miuegypt.edu.eg
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/abdelrahman-yousry-230768312/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-border p-5 flex items-center gap-4 hover:border-signal-cyan/50 transition-colors"
          >
            <div className="h-11 w-11 rounded-xl bg-signal-cyan/10 grid place-items-center text-signal-cyan shrink-0">
              <Linkedin size={18} />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted">LinkedIn</p>
              <p className="text-sm font-medium truncate">
                /in/abdelrahman-yousry-230768312
              </p>
            </div>
          </a>
        </div>

        <form onSubmit={onSubmit} className="card-border p-6 sm:p-8 space-y-5">
          {/* honeypot — hidden from real users */}
          <input
            type="text"
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs text-muted block mb-2">Name</label>
              <input
                required
                name="name"
                className="w-full bg-transparent border-token border rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-signal-cyan/60"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="text-xs text-muted block mb-2">Email</label>
              <input
                required
                type="email"
                name="email"
                className="w-full bg-transparent border-token border rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-signal-cyan/60"
                placeholder="jane@company.com"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-muted block mb-2">Budget (optional)</label>
            <select
              name="budget"
              className="w-full bg-transparent border-token border rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-signal-cyan/60"
              defaultValue=""
            >
              <option value="" className="bg-elevated">Prefer not to say</option>
              <option value="< $1,000" className="bg-elevated">Under $1,000</option>
              <option value="$1,000 - $5,000" className="bg-elevated">$1,000 – $5,000</option>
              <option value="$5,000 - $15,000" className="bg-elevated">$5,000 – $15,000</option>
              <option value="$15,000+" className="bg-elevated">$15,000+</option>
            </select>
          </div>

          <div>
            <label className="text-xs text-muted block mb-2">Project details</label>
            <textarea
              required
              name="message"
              rows={4}
              className="w-full bg-transparent border-token border rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-signal-cyan/60 resize-none"
              placeholder="What are you building, and what does success look like?"
            />
          </div>

          <button type="submit" disabled={status === "loading"} className="btn-primary w-full sm:w-auto">
            {status === "loading" && <Loader2 size={16} className="animate-spin" />}
            {status !== "loading" && "Send message"}
          </button>

          {status === "success" && (
            <p className="flex items-center gap-2 text-sm text-signal-cyan">
              <CheckCircle2 size={16} /> Message received — I'll reply by email soon.
            </p>
          )}
          {status === "error" && (
            <p className="flex items-center gap-2 text-sm text-red-400">
              <AlertCircle size={16} /> {errorMsg}
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
