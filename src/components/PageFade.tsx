"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function PageFade({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) {
      setReady(true);
      return;
    }

    setReady(false);
    const t = window.setTimeout(() => setReady(true), 10);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return (
    <div className={ready ? "opacity-100" : "opacity-0"} style={{ transition: "opacity 240ms ease-out" }}>
      {children}
    </div>
  );
}
