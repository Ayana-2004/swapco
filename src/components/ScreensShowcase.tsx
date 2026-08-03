import DeviceFrame from "./DeviceFrame";

const SCREENS = [
  { src: "/screens/login.png", alt: "Swapco login screen", label: "Secure login" },
  { src: "/screens/profile-info.png", alt: "Swapco profile information screen", label: "Profile setup" },
  { src: "/screens/discover-2.png", alt: "Swapco advanced job filter onboarding screen", label: "Job filters" },
  { src: "/screens/profile.png", alt: "Swapco profile screen", label: "Your profile" },
  { src: "/screens/discover-1.png", alt: "Swapco discovery screen", label: "Discover" },
];

export default function ScreensShowcase() {
  return (
    <section id="screens" className="bg-[#f6f5ff] py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-violet">
            Inside the app
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold text-ink sm:text-4xl">
            Every screen, designed around trust.
          </h2>
        </div>

        <div className="mt-14 -mx-6 flex snap-x gap-6 overflow-x-auto px-6 pb-4 sm:-mx-10 sm:px-10">
          {SCREENS.map((screen) => (
            <figure
              key={screen.src}
              className="w-[190px] shrink-0 snap-start sm:w-[220px]"
            >
              <DeviceFrame src={screen.src} alt={screen.alt} />
              <figcaption className="mt-4 text-center text-sm font-semibold text-ink/70">
                {screen.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
