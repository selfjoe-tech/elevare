import { cn } from "@/lib/cn";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <div className="text-xs uppercase tracking-[0.32em] text-gold/80">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-3 text-3xl leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
      <div className="mt-6 h-px w-24 bg-gold/40" />
    </div>
  );
}
