"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Project } from "@/data/projects";
import { useEffect } from "react";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-0 sm:p-6"
        >
          <motion.div
            onClick={onClose}
            className="absolute inset-0"
            style={{ backgroundColor: "color-mix(in srgb, var(--bg) 75%, transparent)" }}
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="relative w-full sm:max-w-3xl max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl border-token border bg-elevated p-7 sm:p-10"
          >
            <button
              onClick={onClose}
              aria-label="Close case study"
              className="absolute top-5 right-5 h-9 w-9 grid place-items-center rounded-full border-token border hover:text-signal-cyan hover:border-signal-cyan/60 transition-colors"
            >
              <X size={16} />
            </button>

            <span className="font-mono text-[11px] text-muted">
              {project.year} · {project.category}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold mt-2 mb-4 pr-10">
              {project.title}
            </h3>
            <p className="text-muted leading-relaxed mb-8">{project.pitch}</p>

            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="section-label mb-3">Business Problem</h4>
                <p className="text-sm text-muted leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <h4 className="section-label mb-3">My Responsibilities</h4>
                <ul className="space-y-2">
                  {project.role.map((r) => (
                    <li key={r} className="text-sm text-muted flex gap-2">
                      <CheckCircle2 size={15} className="text-signal-cyan mt-0.5 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="section-label mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-elevated-2 text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="section-label mb-3">Features</h4>
                <ul className="space-y-1.5">
                  {project.features.map((f) => (
                    <li key={f} className="text-sm text-muted">
                      · {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="section-label mb-3">Design Approach</h4>
                <ul className="space-y-1.5">
                  {project.design.map((d) => (
                    <li key={d} className="text-sm text-muted">
                      · {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="section-label mb-3">Challenges</h4>
                <ul className="space-y-1.5">
                  {project.challenges.map((c) => (
                    <li key={c} className="text-sm text-muted">
                      · {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="section-label mb-3">Results</h4>
                <ul className="space-y-1.5">
                  {project.results.map((r) => (
                    <li key={r} className="text-sm text-muted">
                      · {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card-border p-5 mb-8" style={{ backgroundColor: "var(--bg-elevated-2)" }}>
              <h4 className="section-label mb-3">Client Selling Points</h4>
              <ul className="space-y-1.5">
                {project.selling.map((s) => (
                  <li key={s} className="text-sm text-muted">
                    · {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  {l.label} <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
