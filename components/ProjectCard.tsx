"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  onOpen,
  index,
}: {
  project: Project;
  onOpen: (slug: string) => void;
  index: number;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      onClick={() => onOpen(project.slug)}
      className="group card-border text-left p-6 flex flex-col h-full hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-6">
        <span className="font-mono text-[11px] text-muted">
          {project.year} · {project.category}
        </span>
        {project.featured && (
          <span className="font-mono text-[10px] text-signal-cyan border border-signal-cyan/30 rounded-full px-2 py-0.5">
            featured
          </span>
        )}
      </div>

      <h3 className="font-display text-xl font-semibold mb-2 leading-snug">
        {project.title}
      </h3>
      <p className="text-muted text-sm leading-relaxed mb-6">{project.tagline}</p>

      <div className="mt-auto flex flex-wrap gap-2 mb-5">
        {project.stack.slice(0, 3).map((s) => (
          <span
            key={s}
            className="text-[11px] font-mono px-2 py-1 rounded-md bg-elevated-2 text-muted"
          >
            {s}
          </span>
        ))}
      </div>

      <span className="inline-flex items-center gap-1.5 text-sm text-signal-cyan font-medium">
        View case study
        <ArrowUpRight
          size={14}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </motion.button>
  );
}
