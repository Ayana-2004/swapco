import Image from "next/image";
import Logo from "./Logo";

const FAIRCODE_URL = "https://www.faircodetech.com";

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 sm:flex-row sm:px-10">
        <Logo variant="stacked" />
        <p className="text-sm text-navy/55">&copy; {new Date().getFullYear()} SwapaPost. All rights reserved.</p>
        <div className="flex gap-6 text-sm font-medium text-navy/65">
          <a href="#" className="hover:text-navy">Privacy</a>
          <a href="#" className="hover:text-navy">Terms</a>
          <a href="#" className="hover:text-navy">Contact</a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl items-center justify-center border-t border-navy/10 px-6 pt-6 sm:px-10">
        <a
          href={FAIRCODE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-sm text-navy/55 transition-colors hover:text-navy"
          aria-label="Visit Faircode at faircodetech.com"
        >
          <span>A product of</span>
          <span className="inline-flex items-center rounded-full bg-fc-ink px-4 py-2">
            <Image src="/Faircode.webp" alt="Faircode" width={843} height={215} className="h-4 w-auto" />
          </span>
        </a>
      </div>
    </footer>
  );
}
