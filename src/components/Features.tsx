import Image from "next/image";
import { CheckIcon, SwapIcon } from "./Icons";

const CHIPS = [
  { label: "Location", tone: "bg-navy text-white" },
  { label: "Job title", tone: "bg-swap text-navy" },
  { label: "Company", tone: "bg-white text-navy ring-1 ring-navy/15" },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <div className="max-w-2xl">
        <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-navy">
          <span className="h-0.5 w-6 rounded-full bg-swap" />
          Why SwapaPost
        </p>
        <h2 className="font-display mt-4 text-3xl font-bold text-navy sm:text-4xl">
          Built to match real swaps, not endless scrolling.
        </h2>
        <p className="mt-4 text-lg text-navy/65">
          SwapaPost finds the one person whose posting mirrors yours, same
          job, same company, opposite location, then lets you send a swap
          request to make it real.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl bg-slate-light p-8 ring-1 ring-navy/[0.06] md:col-span-3">
          <h3 className="font-display text-xl font-bold text-navy">Advanced Job Filter</h3>
          <p className="mt-2 max-w-lg text-navy/65">
            Match with people in your exact job title and company whose
            current posting is where you want to be, and whose target
            location is where you already are.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {CHIPS.map((chip) => (
              <span key={chip.label} className={`${chip.tone} rounded-full px-4 py-2 text-sm font-semibold`}>
                {chip.label}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-slate-light p-8 ring-1 ring-navy/[0.06]">
          <div className="flex items-start gap-5">
            <div className="flex-1">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-swap text-navy">
                <CheckIcon className="h-5 w-5" />
              </span>
              <h3 className="font-display mt-6 text-xl font-bold text-navy">Office ID Verification</h3>
            </div>
            <div className="relative h-32 w-[58px] shrink-0 overflow-hidden rounded-xl shadow-lg ring-2 ring-navy">
              <Image
                src="/screens/office-id-scan.jpg"
                alt="SwapaPost office ID scan screen"
                fill
                sizes="58px"
                className="object-cover object-top"
              />
            </div>
          </div>
          <p className="mt-2 text-navy/65">
            Every profile confirms a real job and posting, so a swap request
            means the other person is actually eligible to transfer.
          </p>
        </div>

        <div className="rounded-3xl bg-slate-light p-8 ring-1 ring-navy/[0.06] md:col-span-2">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
            <div className="flex-1">
              <h3 className="font-display text-xl font-bold text-navy">Mirror-Match Discovery</h3>
              <p className="mt-2 text-navy/65">
                See active professionals whose current posting and preferred
                location are the exact reverse of your own.
              </p>
            </div>
            <div className="flex flex-1 items-center gap-3 rounded-2xl bg-white p-5 ring-1 ring-navy/10">
              <div className="flex-1 text-center">
                <p className="text-xs text-navy/55">You</p>
                <p className="mt-1 text-sm font-bold text-navy">Malappuram</p>
                <p className="text-xs text-navy/55">wants Bangalore</p>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-swap">
                <SwapIcon className="h-5 w-5" />
              </span>
              <div className="flex-1 text-center">
                <p className="text-xs text-navy/55">Your match</p>
                <p className="mt-1 text-sm font-bold text-navy">Bangalore</p>
                <p className="text-xs text-navy/55">wants Malappuram</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
