import Section from "./Section";

const timeline = [
  {
    period: "2023 — Present",
    title: "Freelance Full Stack Developer",
    body: "Delivering React/Next.js applications and WordPress builds for clients across e-commerce, industrial equipment, and healthcare — including ongoing maintenance work for Egypt's Telecommunications Regulatory Authority and Saudi German Hospital's clinic landing pages.",
  },
  {
    period: "2023",
    title: "Frontend Engineering — Product Builds",
    body: "Built a SaaS-style analytics dashboard and a bilingual e-commerce showcase from scratch, focused on component architecture, responsive design, and clean data presentation.",
  },
  {
    period: "Ongoing",
    title: "Applied AI Track",
    body: "Deepening skills in integrating AI/LLM capabilities into real web products — moving from 'developer who uses AI tools' to 'developer who ships AI-powered features'.",
  },
];

export default function Experience() {
  return (
    <Section
      id="experience"
      index="04"
      label="Experience"
      title="How the work has progressed."
      description="A straightforward timeline of what I've been building and learning."
    >
      <div className="relative pl-8 sm:pl-10">
        <div
          className="absolute left-[7px] sm:left-[9px] top-1 bottom-1 w-px"
          style={{ backgroundColor: "var(--border)" }}
        />
        <div className="space-y-10">
          {timeline.map((t) => (
            <div key={t.title} className="relative">
              <div className="absolute -left-8 sm:-left-10 top-1.5 h-3.5 w-3.5 rounded-full bg-signal-indigo shadow-glow" />
              <span className="font-mono text-xs text-signal-cyan">{t.period}</span>
              <h3 className="font-display text-lg font-semibold mt-1 mb-2">{t.title}</h3>
              <p className="text-muted text-sm leading-relaxed max-w-2xl">{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
