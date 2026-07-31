import Image from "next/image";

const CHIPS = [
  { label: "Location", bg: "bg-chip-blue", ink: "text-chip-blue-ink", rotate: "-rotate-3" },
  { label: "Job", bg: "bg-violet", ink: "text-white", rotate: "rotate-2" },
  { label: "Gender", bg: "bg-chip-green", ink: "text-chip-green-ink", rotate: "-rotate-2" },
  { label: "Company", bg: "bg-chip-pink", ink: "text-chip-pink-ink", rotate: "rotate-3" },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-violet">
          Why Swapco
        </p>
        <h2 className="font-display mt-3 text-3xl font-bold text-ink sm:text-4xl">
          Built to match real swaps, not endless scrolling.
        </h2>
        <p className="mt-4 text-lg text-ink/60">
          Swapco finds the one person whose posting mirrors yours, same job,
          same company, opposite location, then gets you on a call to make
          it real.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-[#f6f5ff] p-8">
          <h3 className="font-display text-xl font-bold text-ink">
            Advanced Job Filter
          </h3>
          <p className="mt-2 text-ink/60">
            Match with people in your exact job title and company whose
            current posting is where you want to be, and whose target
            location is where you already are.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {CHIPS.map((chip) => (
              <span
                key={chip.label}
                className={`${chip.bg} ${chip.ink} ${chip.rotate} rounded-full px-4 py-2 text-sm font-semibold shadow-sm`}
              >
                {chip.label}
              </span>
            ))}
          </div>
        </div>

        <div className="panel-gradient rounded-3xl p-8 text-white">
          <h3 className="font-display text-xl font-bold">
            Voice &amp; Video First
          </h3>
          <p className="mt-2 text-white/80">
            No texts. Once you find your match, talk through the swap on a
            real-time voice or video call, so the details are confirmed
            directly, not lost in a chat thread.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 10L20 7V17L15 14"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <rect x="3" y="6" width="12" height="12" rx="2.5" stroke="white" strokeWidth="1.8" />
              </svg>
            </span>
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6.6 10.8C7.9 13.4 10.1 15.6 12.7 16.9L14.7 14.9C15 14.6 15.4 14.5 15.8 14.6C17 15 18.3 15.2 19.6 15.2C20.2 15.2 20.7 15.7 20.7 16.3V19.6C20.7 20.2 20.2 20.7 19.6 20.7C10.5 20.7 3.3 13.5 3.3 4.4C3.3 3.8 3.8 3.3 4.4 3.3H7.7C8.3 3.3 8.8 3.8 8.8 4.4C8.8 5.7 9 7 9.4 8.2C9.5 8.6 9.4 9 9.1 9.3L6.6 10.8Z"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="text-sm text-white/70">Calls only. Always.</p>
          </div>
        </div>

        <div className="flex flex-col gap-6 rounded-3xl bg-[#f6f5ff] p-8 sm:flex-row sm:items-center">
          <div className="flex-1">
            <h3 className="font-display text-xl font-bold text-ink">
              Office ID Verification
            </h3>
            <p className="mt-2 text-ink/60">
              Every profile confirms a real job and posting, so a swap
              request means the other person is actually eligible to
              transfer, not just interested.
            </p>
          </div>
          <div className="relative h-40 w-32 shrink-0 overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/screens/office-id.png"
              alt="Swapco office ID verification screen"
              fill
              sizes="128px"
              className="object-cover object-top"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 rounded-3xl bg-[#f6f5ff] p-8 sm:flex-row sm:items-center">
          <div className="flex-1">
            <h3 className="font-display text-xl font-bold text-ink">
              Mirror-Match Discovery
            </h3>
            <p className="mt-2 text-ink/60">
              Swipe through active professionals whose current posting and
              preferred location are the reverse of your own.
            </p>
          </div>
          <div className="relative h-40 w-32 shrink-0 overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/screens/discover-2.png"
              alt="Swapco discovery recommendation screen"
              fill
              sizes="128px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
