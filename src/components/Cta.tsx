import DeviceFrame from "./DeviceFrame";
import HomeLink from "./HomeLink";
import StoreBadges from "./StoreBadges";

export default function Cta() {
  return (
    <section id="download" className="mx-auto w-full max-w-7xl px-6 pb-24 sm:px-10">
      <div className="navy-grid relative overflow-hidden rounded-[2.5rem] px-8 pb-12 pt-16 sm:px-16 lg:py-16">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border-[28px] border-swap/15" />
        <div className="relative grid items-center gap-12 lg:grid-cols-2">
          {/* Centred on phones and tablets, where the phone below is centred
              too; left-aligned beside the phone on desktop (Bug_031). */}
          <div className="text-center lg:text-left">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Swap your post
              <br />
              <span className="text-swap">Not your standards</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/70 lg:mx-0">
              Join the early access list and be first to find your swap
              partner when SwapaPost launches.
            </p>

            <StoreBadges />
          </div>

          {/* Whole phone on every screen: it used to bleed off the card bottom on
              mobile, which testers read as a broken image. The splash is just
              the SwapaPost logo, so it links home like every other logo. */}
          <HomeLink className="relative mx-auto block w-[62%] max-w-[240px] justify-self-center transition-transform hover:-translate-y-1 lg:justify-self-end">
            <DeviceFrame src="/screens/splash.jpg" alt="SwapaPost app splash screen" className="!border-white/90" />
          </HomeLink>
        </div>
      </div>
    </section>
  );
}
