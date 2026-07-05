import Section from "./Section";
import { Code2, Layers, Sparkles, Wrench } from "lucide-react";

const pillars = [
  {
    icon: Layers,
    title: "Full-stack fluency",
    body: "Comfortable across the stack — React and Next.js on the frontend, Node.js APIs and SQL/SQLite on the backend, deployed and monitored end to end.",
  },
  {
    icon: Wrench,
    title: "WordPress, done properly",
    body: "Years of hands-on experience with enterprise and business WordPress sites — from clinic landing pages to national government infrastructure.",
  },
  {
    icon: Sparkles,
    title: "Applied AI, not hype",
    body: "Actively building AI-integrated features into web products — practical automation and intelligence layered on top of solid engineering, not buzzwords.",
  },
  {
    icon: Code2,
    title: "Engineering discipline",
    body: "Component architecture, clean state management, and code that the next developer — or future me — can actually read and extend.",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      index="01"
      label="About"
      title="Building software that survives contact with real users."
      description="I'm a full stack developer based in Egypt, working with international clients on production web applications — and I'm deliberately building toward AI-native product engineering as the next layer of that skill set."
    >
      <div className="grid sm:grid-cols-2 gap-5">
        {pillars.map((p) => (
          <div key={p.title} className="card-border p-6">
            <div className="h-10 w-10 rounded-xl bg-signal-indigo/10 grid place-items-center mb-4 text-signal-indigo">
              <p.icon size={18} />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{p.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
