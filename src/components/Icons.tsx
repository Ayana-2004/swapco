export function SwapIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M7 4 3 8l4 4M3 8h14M17 20l4-4-4-4M21 16H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M6.6 10.8c1.3 2.6 3.5 4.8 6.1 6.1l2-2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1.1.5 1.1 1.1v3.3c0 .6-.5 1.1-1.1 1.1C10.5 20.7 3.3 13.5 3.3 4.4c0-.6.5-1.1 1.1-1.1h3.3c.6 0 1.1.5 1.1 1.1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.5 1.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function VideoIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M15 10l5-3v10l-5-3" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <rect x="3" y="6" width="12" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M5 12.5 10 17l9-10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
