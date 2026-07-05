import Section from "./Section";

const groups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux / Zustand"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "SQLite / SQL", "Authentication", "Zod validation"],
  },
  {
    title: "CMS & Platforms",
    items: ["WordPress", "Elementor", "Custom Theming", "Plugin Configuration"],
  },
  {
    title: "AI & Tooling",
    items: ["LLM API Integration", "Prompt Engineering", "Vercel", "Git / GitHub", "CI/CD basics"],
  },
];

export default function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      label="Capabilities"
      title="The stack I actually ship with."
      description="Tools I use in production, grouped by where they sit in the stack — not a wall of logos."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {groups.map((g) => (
          <div key={g.title} className="card-border p-6">
            <h3 className="font-mono text-xs tracking-widest uppercase text-signal-indigo mb-4">
              {g.title}
            </h3>
            <ul className="space-y-2.5">
              {g.items.map((item) => (
                <li key={item} className="text-sm text-muted flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-signal-cyan shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
