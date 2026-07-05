import Section from "./Section";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      index="06"
      label="Client Feedback"
      title="Testimonials — coming as projects close out."
      description="I'd rather leave this section honest than fill it with placeholder quotes. Client references are available on request."
    >
      <div className="card-border p-10 text-center max-w-2xl mx-auto">
        <Quote className="mx-auto mb-4 text-signal-cyan/60" size={28} />
        <p className="text-muted text-sm leading-relaxed">
          This space is reserved for real testimonials from clients — updated
          as new projects wrap up. In the meantime, feel free to reach out for
          direct references from past work.
        </p>
      </div>
    </Section>
  );
}
