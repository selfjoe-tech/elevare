"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="rounded-3xl border border-slate-200 bg-white p-7"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="text-sm font-semibold text-slate-900">Send an enquiry</div>
      <div className="mt-1 text-sm text-slate-600">
        This is UI-only for now. We’ll wire it to email/API later.
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="font-semibold text-slate-700">Full name</span>
          <input className="h-11 rounded-2xl border border-slate-200 px-4 outline-none focus:ring-2 focus:ring-blue-200" />
        </label>

        <label className="grid gap-2 text-sm">
          <span className="font-semibold text-slate-700">Email</span>
          <input type="email" className="h-11 rounded-2xl border border-slate-200 px-4 outline-none focus:ring-2 focus:ring-blue-200" />
        </label>

        <label className="grid gap-2 text-sm sm:col-span-2">
          <span className="font-semibold text-slate-700">Service</span>
          <select className="h-11 rounded-2xl border border-slate-200 px-4 outline-none focus:ring-2 focus:ring-blue-200">
            <option>Private Equity</option>
            <option>Wealth Management</option>
            <option>Funding Facilitation</option>
            <option>General</option>
          </select>
        </label>

        <label className="grid gap-2 text-sm sm:col-span-2">
          <span className="font-semibold text-slate-700">Message</span>
          <textarea rows={5} className="rounded-2xl border border-slate-200 p-4 outline-none focus:ring-2 focus:ring-blue-200" />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex h-11 items-center justify-center rounded-2xl bg-blue-700 px-5 text-sm font-semibold text-white transition hover:bg-blue-800 active:translate-y-[1px]"
      >
        Send
      </button>

      {sent ? (
        <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
          Sent (UI). Next step: connect to an API route or email service.
        </div>
      ) : null}
    </form>
  );
}
