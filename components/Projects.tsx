"use client";

import { useState } from "react";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "@/data/projects";

export default function Projects() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const active = projects.find((p) => p.slug === openSlug) ?? null;

  return (
    <Section
      id="projects"
      index="02"
      label="Selected Work"
      title="Five projects, five different problems."
      description="From bilingual e-commerce to hospital landing pages and SaaS dashboards — click any project for the full case study: the problem, my exact contribution, and the outcome."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} onOpen={setOpenSlug} />
        ))}
      </div>
      <ProjectModal project={active} onClose={() => setOpenSlug(null)} />
    </Section>
  );
}
