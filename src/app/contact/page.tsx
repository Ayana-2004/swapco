import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with the SwapaPost team for support, privacy requests or general questions.",
  path: "/contact",
});

const CHANNELS = [
  {
    title: "Support",
    body: "Help with your account, verification, matches or swap requests.",
    email: SITE.supportEmail,
  },
  {
    title: "Privacy & data requests",
    body: "Access, correct or delete your data, or reach our Grievance Officer.",
    email: SITE.privacyEmail,
  },
];

export default function ContactPage() {
  return (
    <LegalPage
      eyebrow="Contact"
      title="Get in touch"
      intro="Questions, feedback or trouble with the app? Email the right team below and we'll get back to you."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {CHANNELS.map((c) => (
          <div key={c.title} className="flex flex-col rounded-3xl bg-slate-light p-8 ring-1 ring-navy/[0.06]">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-swap text-navy">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
                <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
            </span>
            <h2 className="font-display mt-6 text-xl font-bold text-navy">{c.title}</h2>
            <p className="mt-2 flex-1 text-navy/65">{c.body}</p>
            <a
              href={`mailto:${c.email}`}
              className="mt-6 inline-flex w-fit items-center rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              {c.email}
            </a>
          </div>
        ))}
      </div>

      <div className="navy-grid mt-6 rounded-3xl p-8 text-white">
        <h2 className="font-display text-xl font-bold">Company</h2>
        <p className="mt-2 text-white/75">
          {SITE.legalEntity}
          <br />
          {SITE.address}
        </p>
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
          <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="text-swap hover:text-white">
            {SITE.phone}
          </a>
          <a href={SITE.website} className="text-swap hover:text-white">
            faircodetech.com
          </a>
        </div>
      </div>

      <p className="mt-10 text-navy/65">
        Looking for quick answers? See the <Link href="/#faq" className="font-semibold text-navy underline decoration-swap underline-offset-4">FAQ</Link>,
        our <Link href="/privacy" className="font-semibold text-navy underline decoration-swap underline-offset-4">Privacy Policy</Link> and{" "}
        <Link href="/terms" className="font-semibold text-navy underline decoration-swap underline-offset-4">Terms of Service</Link>.
      </p>
    </LegalPage>
  );
}
