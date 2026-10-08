"use client";

import { useEffect } from "react";
import { scrollToElement } from "@/lib/scroll";

// Routes every same-page hash link ("#download", "/#faq") through
// scrollToElement so every trip glides instead of snapping. Listens in the capture phase so it runs before next/link, which
// then sees defaultPrevented and leaves the click alone.
export default function HashLinkScroller() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.("a[href]");
      if (!(link instanceof HTMLAnchorElement) || link.target === "_blank") return;

      const url = new URL(link.href);
      if (!url.hash || url.origin !== location.origin || url.pathname !== location.pathname) return;

      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;

      e.preventDefault();
      history.pushState(null, "", url.hash);
      scrollToElement(target);
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
