import Image from "next/image";

const FAIRCODE_URL = "https://www.faircodetech.com";

export default function FaircodeInitiative() {
  return (
    <section className="bg-fc-ink px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-5xl text-center">
        <p className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-fc-green">
          A Faircode Initiative
        </p>
        <div className="fc-current-bg mx-auto mt-4 h-[3px] w-14 rounded-full" />

        <h2 className="font-geist mt-6 text-2xl font-bold leading-tight text-white sm:text-3xl">
          Serious software, that feels light.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/65">
          SwapaPost is built and maintained by Faircode, the studio behind
          enterprise software for growing teams. Same discipline, clarity,
          trust, and craft, aimed at a different problem: getting people
          to the city they actually want to work in.
        </p>

        <a
          href={FAIRCODE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex items-center rounded-full bg-white/5 px-6 py-3 ring-1 ring-white/15 transition-colors hover:bg-white/10"
          aria-label="Visit Faircode at faircodetech.com"
        >
          <Image src="/Faircode.webp" alt="Faircode" width={843} height={215} className="h-6 w-auto" />
        </a>
      </div>
    </section>
  );
}
