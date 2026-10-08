import DeviceFrame from "./DeviceFrame";

const SCREENS = [
  { src: "/screens/sign-up.jpg", alt: "SwapaPost sign up screen", label: "Sign up" },
  { src: "/screens/otp.jpg", alt: "SwapaPost OTP verification screen", label: "OTP verification" },
  { src: "/screens/office-id-scan.jpg", alt: "SwapaPost office ID scan screen", label: "Scan office ID" },
  { src: "/screens/profile-verified.jpg", alt: "SwapaPost verified profile screen", label: "Verified profile" },
  { src: "/screens/filter.jpg", alt: "SwapaPost recommendation filter screen", label: "Filter matches" },
  { src: "/screens/filtered.jpg", alt: "SwapaPost filtered recommendations screen", label: "Recommendations" },
  { src: "/screens/notifications-received.jpg", alt: "SwapaPost received swap requests screen", label: "Swap requests" },
  { src: "/screens/notifications-sent.jpg", alt: "SwapaPost accepted swap request screen", label: "Accepted swap" },
];

export default function ScreensShowcase() {
  return (
    <section id="screens" className="bg-slate-light pb-12 pt-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="max-w-2xl">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-navy">
            <span className="h-0.5 w-6 rounded-full bg-swap" />
            Inside the app
          </p>
          <h2 className="font-display mt-4 text-3xl font-bold text-navy sm:text-4xl">
            Every screen designed around trust
          </h2>
        </div>
      </div>

      {/* Below lg: a swipe strip that runs to the screen edges, so phones exit
          at the viewport (a scroll cue) instead of being sliced at the content
          column. Inline padding lines the first phone up with the heading;
          scroll-padding makes snap respect it; the vertical padding leaves room
          for the frame shadows that overflow-x would otherwise cut off.
          From lg: a 4x2 grid, so every screen is whole and mouse users never
          need to scroll sideways. */}
      <div className="mt-8 flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-16 pt-6 scroll-px-6 sm:px-[max(2.5rem,calc((100%-72rem)/2+2.5rem))] sm:scroll-px-[max(2.5rem,calc((100%-72rem)/2+2.5rem))] lg:mx-auto lg:grid lg:max-w-6xl lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12 lg:overflow-visible lg:px-10">
        {SCREENS.map((screen, i) => (
          <figure key={screen.src} className="w-[200px] shrink-0 snap-start sm:w-[230px] lg:w-auto">
            <DeviceFrame src={screen.src} alt={screen.alt} />
            <figcaption className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-navy">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-navy text-[11px] text-white">
                {i + 1}
              </span>
              {screen.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
