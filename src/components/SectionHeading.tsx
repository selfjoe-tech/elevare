import React from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const a = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-3 ${a}`}>
      {eyebrow ? (
        <div className="inline-flex w-fit rounded-full bg-blue-700/10 px-3 py-1 text-xs font-semibold tracking-wide text-blue-800">
          {eyebrow}
        </div>
      ) : null}

      <div className={`relative ${align === "center" ? "mx-auto" : ""}`}>
        <h2 className="text-balance text-2xl font-semibold text-slate-900 sm:text-3xl">{title}</h2>
        <div
          aria-hidden
          className={[
            "mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-500",
            align === "center" ? "mx-auto" : "",
          ].join(" ")}
        />
      </div>

      {subtitle ? <p className="max-w-3xl text-pretty text-slate-600">{subtitle}</p> : null}
    </div>
  );
}
