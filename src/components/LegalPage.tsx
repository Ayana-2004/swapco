import Navbar from "./Navbar";
import Footer from "./Footer";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro?: React.ReactNode;
  updated?: string;
  children: React.ReactNode;
};

export default function LegalPage({ eyebrow, title, intro, updated, children }: LegalPageProps) {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="hero-grid border-b border-navy/10 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-6 sm:px-10">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-navy">
              <span className="h-0.5 w-6 rounded-full bg-swap" />
              {eyebrow}
            </p>
            <h1 className="font-display mt-4 text-4xl font-bold text-navy sm:text-5xl">{title}</h1>
            {intro && <p className="mt-5 text-lg leading-relaxed text-navy/70">{intro}</p>}
            {updated && <p className="mt-6 text-sm text-navy/55">Last updated: {updated}</p>}
          </div>
        </section>
        <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-navy/10 py-8 first:pt-0 last:border-0">
      <h2 className="font-display text-xl font-bold text-navy">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-navy/75 [&_a]:font-semibold [&_a]:text-navy [&_a]:underline [&_a]:decoration-swap [&_a]:underline-offset-4 [&_li]:pl-1 [&_strong]:text-navy [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}
