import { SITE } from "@/lib/site";
import { jsonLdScript } from "@/lib/seo";

const FAQS = [
  {
    q: "What is SwapaPost?",
    a: SITE.definition,
  },
  {
    q: "How does a work location swap work?",
    a: "You and a colleague in the same role work at different branches of the same company, and each of you wants to work where the other is. SwapaPost finds that colleague for you. You send a swap request, they accept, and you both take the swap to your company as a transfer request.",
  },
  {
    q: "Do we both need to work at the same company?",
    a: "Yes. SwapaPost matches colleagues in the same company and the same role who work at different branches. Same company, new city.",
  },
  {
    q: "Does SwapaPost handle the transfer for me?",
    a: "No. SwapaPost finds your swap partner and connects you once they accept your swap request. The transfer itself still goes through your company's own HR process, on both sides.",
  },
  {
    q: "Why do I need to verify my office ID?",
    a: "Office ID verification confirms your real job, company and branch, so every colleague you see can actually swap, not a fake or outdated profile.",
  },
  {
    q: "Which phones does SwapaPost work on?",
    a: "SwapaPost is coming soon to both iOS and Android.",
  },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-24 sm:px-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(FAQ_JSON_LD)} />
      {/* Spelled out as the heading itself: a lone 3-letter "FAQ" label read as
          too small, and this is the phrase people actually search for. */}
      <div className="text-center">
        <div className="mx-auto h-0.5 w-10 rounded-full bg-swap" />
        <h2 className="font-display mt-4 text-3xl font-bold text-navy sm:text-4xl">Frequently asked questions</h2>
      </div>

      <div className="mt-12 space-y-3">
        {FAQS.map((item) => (
          // Keyboard focus is drawn around the whole card: the browser's default
          // outline hugged the summary and cut through the text and icon.
          <details
            key={item.q}
            className="faq-item group rounded-2xl bg-slate-light px-6 py-5 transition-[background-color,box-shadow] duration-300 has-[summary:focus-visible]:outline-2 has-[summary:focus-visible]:outline-offset-2 has-[summary:focus-visible]:outline-swap ring-1 ring-navy/[0.06] open:bg-white open:shadow-lg open:shadow-navy/5 open:ring-navy/10"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold text-navy outline-none">
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
