"use client";

import type { MouseEvent, ReactNode } from "react";
import Link from "next/link";
import { scrollToY } from "@/lib/scroll";

type HomeLinkProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

// A Link to "/" is a no-op when already on the home page, so the logo felt
// dead there. On "/" we glide back to the top and drop any #section hash.
export default function HomeLink({ children, className, onClick }: HomeLinkProps) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.();
    if (window.location.pathname !== "/") return;
    e.preventDefault();
    window.history.replaceState(null, "", "/");
    scrollToY(0);
  }

  return (
    <Link href="/" aria-label="SwapaPost home" onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
