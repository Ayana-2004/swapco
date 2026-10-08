// In-page scrolling for hash links and the home logo.
//
// A plain "#section" link snaps instantly, which testers saw as the screen
// jumping. Native smooth scroll is no fix either: its speed is fixed, so long
// trips (hero "Get Started" to the download card is ~4500px) take seconds and
// stutter in iOS Safari. Instead we animate scrollY ourselves over a bounded
// duration with ease-in-out, so every trip glides, short or long.

const MIN_MS = 450;
const MAX_MS = 950;

let cancelActive: (() => void) | null = null;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// `top` may be a function so the destination is re-read every frame: images
// loading above the target mid-scroll would otherwise make it land short and
// then visibly correct.
export function scrollToY(top: number | (() => number)) {
  const target = typeof top === "function" ? top : () => top;
  cancelActive?.();

  if (prefersReducedMotion()) {
    window.scrollTo({ top: target(), behavior: "instant" });
    return;
  }

  const start = window.scrollY;
  const distance = Math.abs(target() - start);
  // Grows with distance but stays within bounds, so a long trip is quick and
  // a short one isn't abrupt.
  const duration = Math.min(MAX_MS, Math.max(MIN_MS, distance / 6));
  const startTime = performance.now();
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
    const t = Math.min(1, (now - startTime) / duration);
    const y = start + (target() - start) * easeInOutCubic(t);
    window.scrollTo({ top: y, behavior: "instant" });
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
