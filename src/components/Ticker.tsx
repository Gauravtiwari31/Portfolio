import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../lib/gsap";
import { tickerWords } from "../data/site";
import "./styles/ticker.css";

const Ticker = () => {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tween = gsap.to(".ticker-track", {
        xPercent: -50,
        duration: 26,
        ease: "none",
        repeat: -1,
      });

      // scrolling down runs the strip left, scrolling up flips it
      const st = ScrollTrigger.create({
        trigger: root.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const dir = self.direction;
          gsap.to(tween, {
            timeScale: dir === 1 ? 1 : -1,
            duration: 0.4,
            overwrite: true,
          });
        },
      });

      return () => {
        tween.kill();
        st.kill();
      };
    }, root);

    return () => ctx.revert();
  }, []);

  const row = (
    <div className="ticker-row">
      {tickerWords.map((w) => (
        <span key={w}>
          {w}
          <i>✳</i>
        </span>
      ))}
    </div>
  );

  return (
    <div className="ticker" ref={root} aria-hidden="true">
      <div className="ticker-track">
        {row}
        {row}
      </div>
    </div>
  );
};

export default Ticker;
