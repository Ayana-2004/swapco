const STEPS = [
  {
    n: "01",
    title: "Sign up & verify",
    body: "Create your account with email or phone, then confirm it with a one-time OTP.",
  },
  {
    n: "02",
    title: "Build your profile",
    body: "Add your current posting, company, job title and the location you'd rather be working in.",
  },
  {
    n: "03",
    title: "Verify your office ID",
    body: "Confirm your real job and posting, so your swap request carries real weight.",
  },
  {
    n: "04",
    title: "Find your match & call",
    body: "Filter by location, job title and company to find your mirror-match, then confirm the swap on a voice or video call.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="navy-grid py-24 text-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="max-w-2xl">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-swap">
            <span className="h-0.5 w-6 rounded-full bg-swap" />
            How it works
          </p>
          <h2 className="font-display mt-4 text-3xl font-bold sm:text-4xl">
            From sign up to your first swap call, in four steps.
          </h2>
        </div>

        <div className="relative mt-14">
          <span className="absolute left-0 right-0 top-6 hidden h-px bg-linear-to-r from-swap/60 via-swap/30 to-transparent lg:block" />
          <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li key={step.n} className="relative">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-swap font-display text-sm font-bold text-navy ring-8 ring-navy">
                {step.n}
              </span>
              <h3 className="font-display mt-6 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{step.body}</p>
            </li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
