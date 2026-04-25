"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { createNoise3D } from "simplex-noise";

type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth = 3,
  backgroundFill = "transparent",
  blur = 0,
  speed = "fast",
  waveOpacity = 1,
  corner = "top-left",
  waves = 1,
  radiusStart,
  radiusGap,
  amplitude = 10,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  corner?: Corner;
  waves?: number;
  radiusStart?: number;
  radiusGap?: number;
  amplitude?: number;
  [key: string]: any;
}) => {
  const noiseRef = React.useRef(createNoise3D());
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const wrapRef = React.useRef<HTMLDivElement>(null);
  const [isSafari, setIsSafari] = React.useState(false);

  const colorsKey = React.useMemo(() => (colors ?? ["#0a84ff"]).join("|"), [colors]);
  const stableColors = React.useMemo(() => colors ?? ["#0a84ff"], [colorsKey]);

  React.useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let nt = 0;
    let animationId = 0;
    let width = 0;
    let height = 0;
    let destroyed = false;

    const getSpeed = () => {
      switch (speed) {
        case "slow":
          return 0.001;
        case "fast":
          return 0.002;
        default:
          return 0.001;
      }
    };

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      if (!rect.width || !rect.height) return false;

      width = rect.width;
      height = rect.height;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.filter = `blur(${blur}px)`;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      return true;
    };

    const getCenter = () => {
      switch (corner) {
        case "top-left":
          return { cx: 0, cy: 0, start: 0, end: Math.PI / 2 };
        case "top-right":
          return { cx: width, cy: 0, start: Math.PI / 2, end: Math.PI };
        case "bottom-left":
          return { cx: 0, cy: height, start: -Math.PI / 2, end: 0 };
        case "bottom-right":
          return { cx: width, cy: height, start: Math.PI, end: (3 * Math.PI) / 2 };
        default:
          return { cx: 0, cy: 0, start: 0, end: Math.PI / 2 };
      }
    };

    const drawQuarterWave = (index: number) => {
      const { cx, cy, start, end } = getCenter();
      const size = Math.max(width, height);

      const baseRadius = radiusStart ?? size * 0.78;
      const gap = radiusGap ?? Math.max(18, size * 0.06);
      const radius = baseRadius + index * gap;
      const steps = 120;

      ctx.beginPath();
      ctx.lineWidth = waveWidth;
      ctx.strokeStyle = stableColors[index % stableColors.length];
      ctx.globalAlpha = waveOpacity;

      for (let step = 0; step <= steps; step++) {
        const t = step / steps;
        const angle = start + (end - start) * t;

        const wobble =
          noiseRef.current(
            Math.cos(angle) * 1.2,
            Math.sin(angle) * 1.2 + index * 0.25,
            nt
          ) * amplitude;

        const r = radius + wobble;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;

        if (step === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.stroke();
      ctx.closePath();
    };

    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    const render = () => {
      if (destroyed) return;
      if (!width || !height) return;

      ctx.clearRect(0, 0, width, height);

      if (backgroundFill !== "transparent") {
        ctx.globalAlpha = 1;
        ctx.fillStyle = backgroundFill;
        ctx.fillRect(0, 0, width, height);
      }

      for (let i = 0; i < waves; i++) {
        drawQuarterWave(i);
      }

      if (!prefersReducedMotion) {
        nt += getSpeed();
        animationId = requestAnimationFrame(render);
      }
    };

    const boot = () => {
      if (destroyed) return;

      if (!resize()) {
        animationId = requestAnimationFrame(boot);
        return;
      }

      cancelAnimationFrame(animationId);
      render();
    };

    boot();

    const resizeObserver = new ResizeObserver(() => {
      if (resize()) {
        cancelAnimationFrame(animationId);
        render();
      }
    });

    resizeObserver.observe(wrap);
    window.addEventListener("resize", boot);

    return () => {
      destroyed = true;
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", boot);
    };
  }, [
    amplitude,
    backgroundFill,
    blur,
    corner,
    radiusGap,
    radiusStart,
    speed,
    waveOpacity,
    waveWidth,
    waves,
    colorsKey,
    stableColors,
  ]);

  return (
    <div
      ref={wrapRef}
      className={cn("relative overflow-hidden", containerClassName)}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 h-full w-full pointer-events-none"
        style={isSafari ? { filter: `blur(${blur}px)` } : undefined}
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};