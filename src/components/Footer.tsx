import Image from "next/image";
import Link from "next/link";
import HomeLink from "./HomeLink";
import Logo from "./Logo";

const FAIRCODE_URL = "https://www.faircodetech.com";

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 sm:flex-row sm:px-10">
        <HomeLink>
          <Logo variant="stacked" />
        </HomeLink>
        <p className="text-sm text-navy/55">&copy; {new Date().getFullYear()} SwapaPost. All rights reserved.</p>
        <div className="flex gap-6 text-sm font-medium text-navy/65">
          <Link href="/privacy" className="hover:text-navy">Privacy</Link>
          <Link href="/terms" className="hover:text-navy">Terms</Link>
          <Link href="/contact" className="hover:text-navy">Contact</Link>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl items-center justify-center border-t border-navy/10 px-6 pt-6 sm:px-10">
        {/* Only the Faircode badge is the link; "A product of" is plain text. */}
        <p className="flex items-center gap-3 text-sm text-navy/55">
          <span>A product of</span>
          <a
            href={FAIRCODE_URL}
            className="inline-flex items-center rounded-full bg-fc-ink px-4 py-2 transition-opacity hover:opacity-85"
            aria-label="Visit Faircode at faircodetech.com"
          >
            <Image src="/Faircode.webp" alt="Faircode" width={843} height={215} className="h-4 w-auto" />
          </a>
        </p>
      </div>
    </footer>
  );
}
