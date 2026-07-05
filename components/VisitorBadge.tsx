"use client";

import { useEffect, useState } from "react";
import { Activity } from "lucide-react";

export default function VisitorBadge() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visits")
      .then((r) => r.json())
      .then((d) => setCount(d.count ?? null))
      .catch(() => {});
  }, []);

  if (count === null) return null;

  return (
    <div className="inline-flex items-center gap-2 font-mono text-[11px] text-muted">
      <Activity size={12} className="text-signal-cyan" />
      {count.toLocaleString()} page views recorded in this portfolio's own SQLite database
    </div>
  );
}
