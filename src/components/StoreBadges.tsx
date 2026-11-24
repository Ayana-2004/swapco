"use client";

import { useEffect, useRef, useState } from "react";

const STORES = [
  {
    name: "App Store",
    tone: "bg-swap/85 hover:bg-swap",
    icon: "M16.365 1.43c0 1.14-.4 2.06-1.2 2.79-.96.87-2.02 1.2-3.14 1.1-.12-1.1.4-2.13 1.2-2.86.86-.79 2.2-1.31 3.14-1.03zM20.6 17.15c-.35.81-.77 1.55-1.27 2.24-.68.94-1.24 1.6-1.67 1.98-.66.62-1.37.94-2.12.96-.55.02-1.2-.16-1.96-.5-.76-.34-1.46-.5-2.1-.5-.67 0-1.39.16-2.16.5-.77.34-1.39.52-1.87.54-.72.03-1.44-.3-2.15-.98-.46-.42-1.05-1.11-1.75-2.07-.75-1.02-1.37-2.2-1.85-3.55-.52-1.45-.78-2.86-.78-4.22 0-1.56.34-2.9 1.01-4.02.53-.9 1.24-1.62 2.13-2.14.89-.52 1.85-.79 2.88-.81.58 0 1.34.18 2.29.53.94.35 1.55.53 1.81.53.2 0 .87-.21 2-.62 1.07-.38 1.98-.54 2.71-.48 2 .16 3.5 1 4.5 2.52-1.79 1.09-2.68 2.61-2.66 4.58.02 1.53.57 2.8 1.66 3.81.5.47 1.05.83 1.67 1.09-.13.4-.28.78-.44 1.15z",
  },
  {
    name: "Google Play",
    tone: "bg-white/85 hover:bg-white",
    icon: "M3.6 2.4c-.3.3-.5.7-.5 1.2v16.8c0 .5.2.9.5 1.2l.1.1L13 12 3.7 2.3l-.1.1zM16.8 15.2l-3-3 3-3 3.5 2c.6.3.6 1 0 1.3l-3.5 1.7zM4.7 21.5 13.7 12l2.3 2.3-10.3 6.4c-.3.2-.7.1-1-.2v-.03zM13.7 12 4.7 2.5c.3-.3.7-.4 1-.2l10.3 6.4-2.3 2.3z",
  },
];

// Not in the stores yet. The badges are buttons that say so when pressed:
// as plain badges testers read them as broken links (Bug_015), and an
// href="#" placeholder sent people back to the top of the page. When a
// listing goes live, replace its button with an <a> to the store.
export default function StoreBadges() {
  const [store, setStore] = useState<string | null>(null);
  const timer = useRef(0);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  function press(name: string) {
    setStore(name);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setStore(null), 4000);
  }

  return (
    <>
      <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
        {STORES.map((s) => (
          <button
            key={s.name}
            type="button"
            onClick={() => press(s.name)}
            className={`${s.tone} inline-flex items-center gap-3 rounded-full px-6 py-2.5 text-left text-navy transition-[transform,background-color] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-swap`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d={s.icon} />
            </svg>
            <span className="flex flex-col leading-tight">
              <span className="text-[11px] font-medium text-navy/70">Coming soon to</span>
              <span className="text-sm font-semibold">{s.name}</span>
            </span>
          </button>
        ))}
      </div>
      {/* Reserved height so the message appearing doesn't push the page. */}
      <p aria-live="polite" className="mt-4 min-h-12 text-sm text-white/85 sm:min-h-6">
        {store && (
          <>
            <span className="font-semibold text-swap">
              Coming soon to {store === "App Store" ? "the App Store" : store}.
            </span>{" "}
            The app isn&apos;t live yet.
          </>
        )}
      </p>
    </>
  );
}
