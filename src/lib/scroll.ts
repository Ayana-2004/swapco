// In-page scrolling for hash links and the home logo (Bug_025, reopened four
// times). What testers rejected, and why:
// - Snapping to the section: the screen jumps.
// - Native smooth scroll: the browser picks the speed, ~330px per frame on
//   the 4500px hero-to-download trip, which still reads as a jump.
// - Fading out and back in at the destination: reads as a glitch.
// - A JS scroll with ease-in-out cubic under 1s: its peak speed is 3x the
//   average, and it froze whenever a lazy image decoded mid-trip.
//
// So: a JS scroll whose duration grows with distance (up to 1.4s), with sine
// easing (peak only ~1.6x average speed), and HashLinkScroller loads and
// decodes every image ahead of time so nothing stalls on the way.

const MIN_MS = 450;
const MAX_MS = 1400;

let cancelActive: (() => void) | null = null;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function easeInOutSine(t: number) {
  return -(Math.cos(Math.PI * t) - 1) / 2;
}

// `top` may be a function so the destination is re-read every frame: if
// anything above the target changes height mid-scroll, it still lands exactly
// instead of stopping short and correcting.
export function scrollToY(top: number | (() => number)) {
  const target = typeof top === "function" ? top : () => top;
  cancelActive?.();

  if (prefersReducedMotion()) {
    window.scrollTo({ top: target(), behavior: "instant" });
    return;
  }

  const start = window.scrollY;
  const distance = Math.abs(target() - start);
  if (distance < 1) return;
  const duration = Math.min(MAX_MS, Math.max(MIN_MS, 250 + distance / 4));
  let startTime = 0;
  let frame = 0;

  // Any user scroll input wins over the animation instead of fighting it.
  const stop = () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("wheel", stop);
    window.removeEventListener("touchstart", stop);
    window.removeEventListener("keydown", stop);
    cancelActive = null;
  };
  window.addEventListener("wheel", stop, { passive: true });
  window.addEventListener("touchstart", stop, { passive: true });
  window.addEventListener("keydown", stop);
  cancelActive = stop;

  const step = (now: number) => {
    // Time from the first frame, not the click, so a slow first frame
    // doesn't make the scroll start with a leap.
    if (!startTime) startTime = now;
    const t = Math.min(1, (now - startTime) / duration);
    // "instant": the html element has scroll-behavior: smooth, which would
    // otherwise turn each per-frame step into its own competing animation.
    window.scrollTo({ top: start + (target() - start) * easeInOutSine(t), behavior: "instant" });
    if (t < 1) frame = requestAnimationFrame(step);
    else stop();
  };
  frame = requestAnimationFrame(step);
}

export function scrollToElement(el: Element) {
  scrollToY(() => {
    const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    return Math.min(max, Math.max(0, el.getBoundingClientRect().top + window.scrollY - margin));
  });
}
