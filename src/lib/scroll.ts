// In-page scrolling for hash links and the home logo.
//
// Short trips (under half a screen) use the browser's own smooth scroll (it
// runs on the compositor thread, so it doesn't stall while the page paints).
//
// Longer trips can't scroll smoothly at all: the hero "Get Started" is ~4500px
// from the download card, and covering that in about a second peaks at
// ~300px per frame, which reads as the page jumping however it's animated
// (Bug_025, reopened three times). Instead the content fades out, the page
// moves while it's invisible, and it fades back in at the destination. The
// sticky navbar stays put, so it reads as one intentional transition.

// Even a one-screen trip peaks above 100px per frame with native smooth
// scroll, which testers still saw as a jump.
const SMOOTH_MAX_VIEWPORTS = 0.5;
const FADE_OUT_MS = 140;
const FADE_IN_MS = 260;

let fading = false;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToY(top: number) {
  if (prefersReducedMotion()) {
    window.scrollTo({ top, behavior: "instant" });
    return;
  }

  if (Math.abs(top - window.scrollY) <= window.innerHeight * SMOOTH_MAX_VIEWPORTS) {
    window.scrollTo({ top, behavior: "smooth" });
    return;
  }

  // A second click mid-fade would start a competing transition.
  if (fading) return;
  fading = true;

  // Everything below the sticky header.
  const content = [...document.querySelectorAll<HTMLElement>("body > div > main, body > div > footer")];
  if (content.length === 0) {
    window.scrollTo({ top, behavior: "instant" });
    fading = false;
    return;
  }

  const fadeOut = content.map((el) =>
    el.animate([{ opacity: 1 }, { opacity: 0 }], { duration: FADE_OUT_MS, easing: "ease-in", fill: "forwards" }),
  );
  fadeOut[0].onfinish = () => {
    window.scrollTo({ top, behavior: "instant" });
    // Start the fade-in on the next frame so the page has painted at its new
    // position first: otherwise the old position can flash for one frame.
    requestAnimationFrame(() => {
      fadeOut.forEach((a) => a.cancel());
      content.forEach((el) =>
        el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: FADE_IN_MS, easing: "ease-out" }),
      );
      fading = false;
    });
  };
}

export function scrollToElement(el: Element) {
  const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  scrollToY(Math.min(max, Math.max(0, el.getBoundingClientRect().top + window.scrollY - margin)));
}
