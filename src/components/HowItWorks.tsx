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
    <section id="how-it-works" className="bg-[#0f0d19] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-periwinkle">
            How it works
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">
            From sign up to your first swap call, in four steps.
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.n} className="bg-[#0f0d19] p-8">
              <span className="font-display text-sm font-bold text-violet-soft">
                {step.n}
              </span>
              <h3 className="font-display mt-4 text-lg font-bold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
