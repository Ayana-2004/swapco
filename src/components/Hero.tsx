import Navbar from "./Navbar";
import DeviceFrame from "./DeviceFrame";

export default function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden pb-24 pt-32 sm:pt-40">
      <Navbar />

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 sm:px-10 lg:grid-cols-2">
        <div className="max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 ring-1 ring-white/20">
            Now in early access
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
            &ldquo;Your Location, Your Choice.&rdquo;
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-white/80">
            Find someone in your exact role whose posting is the mirror of
            yours, then confirm the swap over a real voice or video call. No
            texts.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#download"
              className="inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-base font-semibold text-white shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5"
            >
              Get Started
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-ink">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
            <a
              href="#features"
              className="text-base font-semibold text-white/85 underline decoration-white/40 underline-offset-4 hover:text-white"
            >
              See how it works
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {["#F2C078", "#7A5CF0", "#E85C5C", "#2F6FE4"].map((c, i) => (
                <span
                  key={i}
                  className="h-10 w-10 rounded-full ring-2 ring-white/90"
                  style={{ background: c }}
                />
              ))}
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xs font-bold text-ink ring-2 ring-white/90">
                100+
              </span>
            </div>
            <p className="text-sm text-white/75">
              Verified professionals swapping their way back home
            </p>
          </div>
        </div>

        <div className="relative mx-auto flex h-[520px] w-full max-w-md items-center justify-center lg:h-[620px]">
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute left-0 top-10 w-[46%] -rotate-6 opacity-90">
            <DeviceFrame src="/screens/onboarding-swap.png" alt="Swapco job swap onboarding screen" />
          </div>
          <div className="absolute right-0 top-16 w-[46%] rotate-6 opacity-90">
            <DeviceFrame src="/screens/discover-1.png" alt="Swapco discovery feed screen" />
          </div>
          <div className="relative z-10 w-[58%]">
            <DeviceFrame src="/screens/hero-onboarding.png" alt="Swapco onboarding welcome screen" priority />
          </div>
        </div>
      </div>
    </section>
  );
}
