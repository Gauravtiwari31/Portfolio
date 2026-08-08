import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { gsap, SplitText, prefersReducedMotion, scrollToId } from "../lib/gsap";
import { profile } from "../data/site";
import "./styles/hero.css";

const Artifact = lazy(() => import("./three/Artifact"));

const Hero = ({ ready }: { ready: boolean }) => {
  const root = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const [mount3D, setMount3D] = useState(false);

  // Only run WebGL while the hero is anywhere near the viewport.
  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setMount3D(entry.isIntersecting),
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!ready || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>(".hero-word-in");
      const splits = words.map(
        (w) => new SplitText(w, { type: "chars", mask: "chars" })
      );

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.set(".hero-title", { opacity: 1 })
        .from(splits[0].chars, {
          yPercent: 115,
          duration: 1.35,
          stagger: 0.045,
        })
        .from(
          splits[1].chars,
          { yPercent: 115, duration: 1.35, stagger: 0.045 },
          0.12
        )
        .fromTo(
          ".hero-canvas",
          { opacity: 0, scale: 0.72 },
          { opacity: 1, scale: 1, duration: 2, ease: "expo.out" },
          0.05
        )
        .from(
          ".hero-rail span, .hero-lede, .hero-actions > *, .hero-scroll",
          { opacity: 0, y: 26, duration: 1.1, stagger: 0.07 },
          0.55
        );
    }, root);

    return () => ctx.revert();
  }, [ready]);

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-canvas" ref={stage} aria-hidden="true">
        {mount3D && (
          <Suspense fallback={null}>
            <Artifact />
          </Suspense>
        )}
      </div>

      <div className="hero-inner shell">
        <div className="hero-rail hero-rail--top">
          <span>
            <i />
            {profile.roles[0]}
          </span>
          <span>
            {profile.location} — {profile.timezone}
          </span>
        </div>

        <h1 className="hero-title">
          <span className="hero-word is-back">
            <span className="hero-word-in">GAURAV</span>
          </span>
          <span className="hero-word is-front">
            <span className="hero-word-in">TIWARI</span>
          </span>
        </h1>

        <div className="hero-foot">
          <p className="hero-lede">
            I build software that has to hold up —{" "}
            <em className="serif">under load, under attack,</em> and at sixty
            frames a second.
          </p>

          <div className="hero-actions">
            <a
              className="btn btn--solid"
              href="#work"
              data-cursor="link"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("work");
              }}
            >
              <span>See the work</span>
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path
                  d="M4 12L12 4M12 4H6M12 4V10"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  fill="none"
                />
              </svg>
            </a>
            <a
              className="btn btn--ghost"
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
            >
              <span>Résumé</span>
            </a>
          </div>
        </div>

        <div className="hero-rail hero-rail--bottom">
          <span>{profile.roles[1]}</span>
          <span>Est. 2024 — Portfolio 2026</span>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero-scroll-bar">
          <i />
        </div>
      </div>
    </section>
  );
};

export default Hero;
