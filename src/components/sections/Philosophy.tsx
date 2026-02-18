import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { BadgeCheck, Scale, Landmark, Sparkles } from "lucide-react";

type PhilosophyCard = {
  kicker: string;
  title: string;
  href?: string;
  image: string; // path from /public
};

const PHILOSOPHY_CARDS: PhilosophyCard[] = [
  {
    kicker: "PERSPECTIVE",
    title: "Rigorous due diligence",
    image: "/stock/bus-20.jpg",
  },
  {
    kicker: "RESEARCH REPORT",
    title: "Governance-first decision trails",
    image: "/stock/bus-21.jpg",
  },
  {
    kicker: "RESEARCH REPORT",
    title: "Responsible investment practice",
    image: "/stock/bus-23.jpg",
  },
  {
    kicker: "RESEARCH REPORT",
    title: "Hands-on value creation",
    image: "/stock/bus-27.jpg",
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function PhilosophyTile({ card }: { card: PhilosophyCard }) {
  const Inner = (
    <div
      className={cn(
        "group relative isolate overflow-hidden ",
        "border border-white/10 bg-white/[0.03]",
        "shadow-[0_22px_70px_rgba(0,0,0,0.55)]",
        "transition-transform duration-300 hover:-translate-y-1",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        // THIS is the key: card owns its height, so nothing collapses
        "h-[320px] sm:h-[360px] lg:h-[320px]"
      )}
    >
      {/* background image */}
      <div
        className={cn(
          "absolute inset-0 bg-cover bg-center",
          "transition-transform duration-700 ease-out",
          // drastic zoom
          "group-hover:scale-[1.65]",
          "motion-reduce:transition-none motion-reduce:transform-none"
        )}
        style={{ backgroundImage: `url(${card.image})` }}
      />

      {/* contrast overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/70" />

      {/* hover blur layer (blurs whatever is behind it) */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-black/0 backdrop-blur-0",
          "transition-[backdrop-filter,background-color] duration-300",
          "group-hover:bg-black/10 group-hover:backdrop-blur-2xl",
          "motion-reduce:transition-none"
        )}
      />

      {/* content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-7">
        <div className="text-2xl font-semibold leading-snug text-white">
          {card.title}
        </div>

        <div>
          

          
        </div>
      </div>
    </div>
  );

  // only wrap in Link if href exists
  return card.href ? (
    <Link href={card.href} className="block">
      {Inner}
    </Link>
  ) : (
    Inner
  );
}

export function InvestmentPhilosophySection() {
  return (
    <section className="relative overflow-hidden bg-black py-20">
      {/* subtle blue glow */}
      <div className="pointer-events-none absolute inset-0 opacity-80 [background:radial-gradient(900px_circle_at_20%_20%,rgba(59,130,246,0.22),transparent_60%),radial-gradient(800px_circle_at_85%_30%,rgba(113,255,248,0.12),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_35%,rgba(255,255,255,0.02))]" />

      <Container className="relative">
        <Reveal>
          <div className="max-w-3xl">
            <div className="h-[3px] w-10 rounded-full bg-[#3b82f6]" />

            <h2 className="font-bold mt-4 text-5xl leading-tight text-white sm:text-5xl">
                Investment Philosophy
            </h2>

            <h2 className="mt-4 text-xl leading-tight text-white sm:text-xl">
              Disciplined allocation,{" "}
              <span className="italic text-white/90">strong governance</span>, and hands-on engagement.
            </h2>

            

            {/* optional chips, kept minimal */}
            
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PHILOSOPHY_CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 70} from="right">
              <PhilosophyTile card={card} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
