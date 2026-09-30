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
    <section id="screens" className="bg-slate-light py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="max-w-2xl">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-navy">
            <span className="h-0.5 w-6 rounded-full bg-swap" />
            Inside the app
          </p>
          <h2 className="font-display mt-4 text-3xl font-bold text-navy sm:text-4xl">
            Every screen, designed around trust.
          </h2>
        </div>

        <div className="-mx-6 mt-14 flex snap-x gap-8 overflow-x-auto px-6 pb-4 sm:-mx-10 sm:px-10">
          {SCREENS.map((screen, i) => (
            <figure key={screen.src} className="w-[200px] shrink-0 snap-start sm:w-[230px]">
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
      </div>
    </section>
  );
}
