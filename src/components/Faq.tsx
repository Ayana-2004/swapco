const FAQS = [
  {
    q: "What does \"swap your job\" actually mean?",
    a: "Swapco matches two people who hold the same job title at the same company, but are posted where the other one wants to be. Find your mirror-match, agree on the swap, then each of you takes it to your employer as a mutual transfer request.",
  },
  {
    q: "Does Swapco handle the actual transfer for me?",
    a: "No. Swapco finds your match and lets you confirm the details on a call. The formal transfer request still goes through your company's own HR process, on both sides.",
  },
  {
    q: "Why do I need to verify my office ID?",
    a: "Office ID verification confirms your real job and posting, so every match you see is from someone who's actually eligible to swap, not a fake or outdated profile.",
  },
  {
    q: "Can I message someone before calling?",
    a: "No. Swapco is call-first by design. Once you match, you talk through the swap over real-time voice or video, not endless back-and-forth texting.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-24 sm:px-10">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-violet">
          FAQ
        </p>
        <h2 className="font-display mt-3 text-3xl font-bold text-ink sm:text-4xl">
          Questions, answered.
        </h2>
      </div>

      <div className="mt-12 divide-y divide-ink/10 rounded-3xl bg-[#f6f5ff] px-8">
        {FAQS.map((item) => (
          <details key={item.q} className="group py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold text-ink">
              {item.q}
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-violet transition-transform group-open:rotate-45">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </span>
            </summary>
            <p className="mt-3 text-ink/60">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
