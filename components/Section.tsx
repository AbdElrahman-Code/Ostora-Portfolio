import { ReactNode } from "react";
import clsx from "clsx";

export default function Section({
  id,
  index,
  label,
  title,
  description,
  children,
  className,
}: {
  id: string;
  index: string; // e.g. "02"
  label: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={clsx("scroll-mt-24 py-20 sm:py-28", className)}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-baseline gap-3 mb-4">
          <span className="font-mono text-xs text-muted">{index}</span>
          <span className="section-label">{label}</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
          {title}
        </h2>
        {description && (
          <p className="text-muted max-w-2xl text-[15px] leading-relaxed mb-12">
            {description}
          </p>
        )}
        {!description && <div className="mb-12" />}
        {children}
      </div>
    </section>
  );
}
