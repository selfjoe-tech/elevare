"use client";

import * as React from "react";

type AsTag = keyof JSX.IntrinsicElements;

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

type LightSweepTextProps<T extends AsTag = "p"> = {
  as?: T;
  children: React.ReactNode;

  /** Wrapper classes (spacing, typography, etc.) */
  className?: string;

  /** Base layer (dim text) */
  baseClassName?: string;

  /** Final layer (revealed text) */
  finalClassName?: string;

  /** Sweep color */
  highlightColor?: string;

  /** Animation timing */
  durationMs?: number;
  delayMs?: number;

  /** Trigger behavior */
  once?: boolean;
  threshold?: number;

  /** Turn off the “fill-in” reveal and keep only the shining sweep */
  revealFill?: boolean;
};

export function LightSweepText<T extends AsTag = "p">({
  as,
  children,
  className,
  baseClassName = "text-[#0b1020]/70",
  finalClassName = "text-[#0b1020]",
  highlightColor = "#3b82f6",
  durationMs = 1300,
  delayMs = 0,
  once = true,
  threshold = 0.35,
  revealFill = true,
}: LightSweepTextProps<T>) {
  const Tag = (as ?? "p") as AsTag;
  const ref = React.useRef<HTMLElement | null>(null);
  const [play, setPlay] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduced) {
      setPlay(true);
      return;
    }

    if (play && once) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setPlay(true);
        if (once) io.disconnect();
      },
      { threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once, play, threshold]);

  return (
    <Tag
      ref={(node) => {
        ref.current = node as unknown as HTMLElement;
      }}
      className={cx("relative", className)}
      style={
        {
          ["--lst-shine" as any]: highlightColor,
          ["--lst-duration" as any]: `${durationMs}ms`,
          ["--lst-delay" as any]: `${delayMs}ms`,
        } as React.CSSProperties
      }
      data-play={play ? "true" : "false"}
    >
      {/* Base text (always visible) */}
      <span className={cx("block", baseClassName)}>{children}</span>

      {/* Final revealed text (fills in behind the sweep) */}
      {revealFill && (
        <span
          aria-hidden
          className={cx(
            "pointer-events-none absolute inset-0 block",
            finalClassName,
            "lst-reveal"
          )}
        >
          {children}
        </span>
      )}

      {/* Shiny sweep highlight */}
      <span
        aria-hidden
        className={cx(
          "pointer-events-none absolute inset-0 block",
          "text-transparent [background-clip:text] [-webkit-background-clip:text]",
          "lst-shine"
        )}
      >
        {children}
      </span>

      <style jsx>{`
        /* Start states */
        [data-play="false"] .lst-reveal {
          clip-path: inset(0 100% 0 0);
        }
        [data-play="false"] .lst-shine {
          opacity: 0;
          background-position: 160% 0%;
        }

        /* Play */
        [data-play="true"] .lst-reveal {
          animation: lstReveal var(--lst-duration) ease forwards;
          animation-delay: var(--lst-delay);
        }

        [data-play="true"] .lst-shine {
          opacity: 1;
          background-image: linear-gradient(
            110deg,
            transparent 0%,
            transparent 42%,
            var(--lst-shine) 50%,
            transparent 58%,
            transparent 100%
          );
          background-size: 260% 100%;
          animation: lstShine var(--lst-duration) ease forwards;
          animation-delay: var(--lst-delay);
          /* Optional glow, subtle */
          filter: drop-shadow(0 0 10px color-mix(in srgb, var(--lst-shine) 45%, transparent));
        }

        @keyframes lstReveal {
          from {
            clip-path: inset(0 100% 0 0);
          }
          to {
            clip-path: inset(0 0% 0 0);
          }
        }

        @keyframes lstShine {
          0% {
            opacity: 0;
            background-position: 160% 0%;
          }
          12% {
            opacity: 1;
          }
          85% {
            opacity: 1;
            background-position: -160% 0%;
          }
          100% {
            opacity: 0;
            background-position: -160% 0%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .lst-reveal {
            animation: none !important;
            clip-path: none !important;
          }
          .lst-shine {
            animation: none !important;
            opacity: 0 !important;
          }
        }
      `}</style>
    </Tag>
  );
}
