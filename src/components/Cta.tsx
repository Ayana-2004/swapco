import DeviceFrame from "./DeviceFrame";

export default function Cta() {
  return (
    <section id="download" className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10">
      <div className="navy-grid relative overflow-hidden rounded-[2.5rem] px-8 pt-16 sm:px-16 lg:py-16">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border-[28px] border-swap/15" />
        <div className="relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Swap your post.
              <br />
              <span className="text-swap">Not your standards.</span>
            </h2>
            <p className="mt-4 max-w-md text-white/70">
              Join the early access list and be first to find your swap
              partner when SwapaPost launches.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-full bg-swap px-6 py-3.5 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.365 1.43c0 1.14-.4 2.06-1.2 2.79-.96.87-2.02 1.2-3.14 1.1-.12-1.1.4-2.13 1.2-2.86.86-.79 2.2-1.31 3.14-1.03zM20.6 17.15c-.35.81-.77 1.55-1.27 2.24-.68.94-1.24 1.6-1.67 1.98-.66.62-1.37.94-2.12.96-.55.02-1.2-.16-1.96-.5-.76-.34-1.46-.5-2.1-.5-.67 0-1.39.16-2.16.5-.77.34-1.39.52-1.87.54-.72.03-1.44-.3-2.15-.98-.46-.42-1.05-1.11-1.75-2.07-.75-1.02-1.37-2.2-1.85-3.55-.52-1.45-.78-2.86-.78-4.22 0-1.56.34-2.9 1.01-4.02.53-.9 1.24-1.62 2.13-2.14.89-.52 1.85-.79 2.88-.81.58 0 1.34.18 2.29.53.94.35 1.55.53 1.81.53.2 0 .87-.21 2-.62 1.07-.38 1.98-.54 2.71-.48 2 .16 3.5 1 4.5 2.52-1.79 1.09-2.68 2.61-2.66 4.58.02 1.53.57 2.8 1.66 3.81.5.47 1.05.83 1.67 1.09-.13.4-.28.78-.44 1.15z" />
                </svg>
                App Store
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.6 2.4c-.3.3-.5.7-.5 1.2v16.8c0 .5.2.9.5 1.2l.1.1L13 12 3.7 2.3l-.1.1zM16.8 15.2l-3-3 3-3 3.5 2c.6.3.6 1 0 1.3l-3.5 1.7zM4.7 21.5 13.7 12l2.3 2.3-10.3 6.4c-.3.2-.7.1-1-.2v-.03zM13.7 12 4.7 2.5c.3-.3.7-.4 1-.2l10.3 6.4-2.3 2.3z" />
                </svg>
                Google Play
              </a>
            </div>

            <p className="mt-6 text-xs text-white/55">Coming soon to iOS and Android.</p>
          </div>

          <div className="relative mx-auto w-[62%] max-w-[240px] translate-y-6 justify-self-center lg:translate-y-0 lg:justify-self-end">
            <DeviceFrame src="/screens/splash.jpg" alt="SwapaPost app splash screen" className="!border-white/90" />
          </div>
        </div>
      </div>
    </section>
  );
}
