import DeviceFrame from "./DeviceFrame";

export default function Hero() {
  return (
    <section id="top" className="hero-grid relative overflow-hidden pb-24 pt-16 sm:pt-24">
      {/* Two offset rings echo the logo's navy and cyan loops. */}
      <div className="pointer-events-none absolute -right-40 top-10 hidden h-[560px] w-[560px] rounded-full border-[40px] border-swap/10 lg:block" />
      <div className="pointer-events-none absolute -right-4 top-64 hidden h-[420px] w-[420px] rounded-full border-[34px] border-navy/[0.05] lg:block" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 sm:px-10 lg:grid-cols-2">
        <div className="max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy ring-1 ring-navy/10">
            <span className="h-2 w-2 rounded-full bg-swap" />
            Now in early access
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.08] text-navy sm:text-5xl lg:text-[3.5rem]">
            Your location,
            <br />
            <span className="relative inline-block">
              your choice.
              <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-swap/70" />
            </span>
          </h1>

          <p className="mt-7 text-lg leading-relaxed text-navy/70">
            Find someone in your exact role whose posting is the mirror of
            yours, then confirm the swap over a real voice or video call. No
            texts.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#download"
              className="inline-flex items-center gap-3 rounded-full bg-swap px-7 py-4 text-base font-semibold text-navy shadow-lg shadow-swap/25 transition-transform hover:-translate-y-0.5"
            >
              Get Started
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
            <a
              href="#how-it-works"
              className="text-base font-semibold text-navy underline decoration-swap decoration-2 underline-offset-[6px] hover:decoration-navy"
            >
              See how it works
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-2">
              {["AL", "RK", "SM", "AJ"].map((i, n) => (
                <span
                  key={i}
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-[11px] font-bold ring-2 ring-white ${
                    n % 2 ? "bg-swap text-navy" : "bg-navy text-white"
                  }`}
                >
                  {i}
                </span>
              ))}
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xs font-bold text-navy ring-2 ring-navy/10">
                100+
              </span>
            </div>
            <p className="text-sm text-navy/65">Verified professionals swapping their way back home</p>
          </div>
        </div>

        <div className="relative mx-auto flex h-[540px] w-full max-w-md items-center justify-center lg:h-[640px]">
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-swap/15 blur-3xl" />

          <div className="absolute left-0 top-12 w-[44%] -rotate-6">
            <DeviceFrame src="/screens/recommendations.jpg" alt="SwapaPost recommendations feed" />
          </div>
          <div className="absolute right-0 top-20 w-[44%] rotate-6">
            <DeviceFrame src="/screens/profile-verified.jpg" alt="SwapaPost profile with verified office ID" />
          </div>
          <div className="relative z-10 w-[56%]">
            <DeviceFrame src="/screens/get-started.jpg" alt="SwapaPost get started screen" priority />
          </div>
        </div>
      </div>
    </section>
  );
}
