const FAQS = [
  {
    q: "What does \"swap your job\" actually mean?",
    a: "SwapaPost matches two people who hold the same job title at the same company, but are posted where the other one wants to be. Find your mirror-match, agree on the swap, then each of you takes it to your employer as a mutual transfer request.",
  },
  {
    q: "Does SwapaPost handle the actual transfer for me?",
    a: "No. SwapaPost finds your match and connects you once they accept your swap request. The formal transfer request still goes through your company's own HR process, on both sides.",
  },
  {
    q: "Why do I need to verify my office ID?",
    a: "Office ID verification confirms your real job and posting, so every match you see is from someone who's actually eligible to swap, not a fake or outdated profile.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-24 sm:px-10">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-navy">FAQ</p>
        <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-swap" />
        <h2 className="font-display mt-4 text-3xl font-bold text-navy sm:text-4xl">Questions, answered.</h2>
      </div>

      <div className="mt-12 space-y-3">
        {FAQS.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl bg-slate-light px-6 py-5 ring-1 ring-navy/[0.06] open:bg-white open:shadow-lg open:shadow-navy/5 open:ring-navy/10"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold text-navy">
              {item.q}
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-white transition-transform group-open:rotate-45 group-open:bg-swap group-open:text-navy">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </span>
            </summary>
            <p className="mt-3 text-navy/65">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
