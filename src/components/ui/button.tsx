import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "gold" | "contact" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold tracking-wide font-sans transition " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink " +
  "disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  gold:
    "bg-gold text-white hover:bg-gold/90 active:bg-gold/85 shadow-[0_0_0_1px_rgba(0,0,0,0.25)]",
  contact:
    "bg-white text-gold hover:bg-white/90 active:bg-white/85 shadow-[0_0_0_1px_rgba(200,162,74,0.25)]",
  ghost:
    "bg-transparent text-white border border-white/15 hover:border-gold/35 hover:text-white",
};

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const { className, variant = "gold", ...rest } = props;
  return <button className={cn(base, variants[variant], className)} {...rest} />;
}

export function ButtonLink(props: { href: string; children: React.ReactNode; className?: string; variant?: Variant }) {
  const { href, children, className, variant = "gold" } = props;
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
