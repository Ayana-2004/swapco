// In-page scrolling for hash links and the home logo.
//
// A plain "#section" link snaps instantly, which testers saw as the screen
// jumping. A JavaScript-driven animation (setting scrollY every frame) was no
// better: it runs on the main thread, so each time the browser paused to paint
// a new section or decode an image the scroll froze for 50-120ms, which
// testers saw as a glitch. The browser's own smooth scroll runs on the
// compositor thread and keeps moving through that work, so we use it.

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToY(top: number) {
  window.scrollTo({ top, behavior: prefersReducedMotion() ? "instant" : "smooth" });
}

export function scrollToElement(el: Element) {
  const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  scrollToY(Math.min(max, Math.max(0, el.getBoundingClientRect().top + window.scrollY - margin)));
}
