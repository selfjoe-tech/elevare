import Link from "next/link";
import clsx from "clsx";

type Variant = "primary" | "contact" | "ghost";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  withArrow,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
}) {
  const base =
    "font-ui inline-flex h-11 items-center justify-center gap-2 rounded-2xl px-5 text-sm font-semibold transition " +
    "active:translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]/40";

  const styles: Record<Variant, string> = {
    primary:
      "bg-gold text-paper hover:bg-gold-2 shadow-sm shadow-black/30 ring-1 ring-white/10",
    contact:
      "bg-paper text-gold hover:bg-paper/90 shadow-sm shadow-black/30 ring-1 ring-white/10",
    ghost:
      "bg-white/0 text-paper ring-1 ring-white/15 hover:bg-white/5 hover:ring-white/25",
  };

  return (
    <Link href={href} className={clsx(base, styles[variant], className)}>
      <span>{children}</span>
      {withArrow ? (
        <span className="text-current/80 transition group-hover:translate-x-0.5">→</span>
      ) : null}
    </Link>
  );
}
