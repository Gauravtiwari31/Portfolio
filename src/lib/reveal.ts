import { gsap, ScrollTrigger, SplitText, prefersReducedMotion } from "./gsap";

/**
 * Scroll-triggered reveals shared by every section.
 *
 * Two hooks:
 *   [data-split]  — headline: split to lines, masked, staggered up
 *   .rv           — anything else: fade + rise, honouring data-rv-delay
 *
 * Everything starts at opacity 0 in CSS so the first paint never flashes
 * un-animated content.
 */
export function initReveals(scope: HTMLElement | Document = document) {
  if (prefersReducedMotion()) {
    const targets =
      scope === document
        ? document.querySelectorAll(".rv, [data-split]")
        : (scope as HTMLElement).querySelectorAll(".rv, [data-split]");
    gsap.set(targets, { opacity: 1, clearProps: "transform" });
    return () => {};
  }

  const ctx = gsap.context(() => {
    // --- headlines -------------------------------------------------------
    gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
      gsap.set(el, { opacity: 1 });

      // autoSplit re-splits on resize / late font loads; returning the tween
      // from onSplit lets GSAP tear it down and rebuild it cleanly.
      SplitText.create(el, {
        type: "lines",
        mask: "lines",
        linesClass: "split-line",
        autoSplit: true,
        onSplit: (self) =>
          gsap.from(self.lines, {
            yPercent: 118,
            rotate: 2,
            duration: 1.15,
            ease: "expo.out",
            stagger: 0.085,
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          }),
      });
    });

    // --- everything else -------------------------------------------------
    gsap.utils.toArray<HTMLElement>(".rv").forEach((el) => {
      const delay = parseFloat(el.dataset.rvDelay ?? "0");
      gsap.fromTo(
        el,
        { opacity: 0, y: 34 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            once: true,
          },
        }
      );
    });
  }, scope as Element);

  return () => ctx.revert();
}

/** Re-measure once webfonts land so split lines sit where they should. */
export function refreshOnFonts() {
  if (!("fonts" in document)) return;
  document.fonts.ready.then(() => ScrollTrigger.refresh());
}
