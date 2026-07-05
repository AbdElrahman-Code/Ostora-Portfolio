import Section from "./Section";
import { LayoutDashboard, Globe2, Store, Bot } from "lucide-react";

const services = [
  {
    icon: Globe2,
    title: "Business & Marketing Websites",
    body: "Fast, responsive websites built with Next.js or WordPress — for businesses that need a credible, professional digital presence.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboards & Internal Tools",
    body: "Data-dense dashboards with charts, tables, and role-based views for SaaS products and internal operations.",
  },
  {
    icon: Store,
    title: "Bilingual / Localized Sites",
    body: "Arabic/English websites with genuine RTL support — not a translated afterthought, but a mirrored, native experience.",
  },
  {
    icon: Bot,
    title: "AI-Integrated Features",
    body: "Adding practical AI capability — chat interfaces, content generation, intelligent automation — into new or existing web products.",
  },
];

export default function Services() {
  return (
    <Section
      id="services"
      index="05"
      label="Services"
      title="What I can build for you."
      description="If your project fits one of these, we're already speaking the same language."
    >
      <div className="grid sm:grid-cols-2 gap-5">
        {services.map((s) => (
          <div key={s.title} className="card-border p-6 flex gap-4">
            <div className="h-11 w-11 shrink-0 rounded-xl bg-signal-cyan/10 grid place-items-center text-signal-cyan">
              <s.icon size={20} />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
