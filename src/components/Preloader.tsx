import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap";
import "./styles/preloader.css";

const WORDS = ["SYSTEMS", "INTERFACES", "PLAY"];

const Preloader = ({ onDone }: { onDone: () => void }) => {
  const root = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  // Read through a ref so a new onDone identity from the parent's re-render
  // can't tear down and replay the intro.
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useLayoutEffect(() => {
    const finish = () => {
      if (done.current) return;
      done.current = true;
      onDoneRef.current();
    };

    if (prefersReducedMotion()) {
      gsap.set(root.current, { display: "none" });
      finish();
      return;
    }

    // Dead-man's switch. GSAP runs on rAF, which browsers pause in background
    // tabs — without this a page opened in a background tab would sit behind a
    // frozen overlay with scrolling locked.
    const bail = window.setTimeout(() => {
      if (done.current) return;
      gsap.set(root.current, { display: "none" });
      finish();
    }, 9000);

    const ctx = gsap.context(() => {
      const progress = { v: 0 };

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from(".pre-brand > *", {
        yPercent: 110,
        duration: 0.9,
        stagger: 0.08,
        ease: "expo.out",
      })
        .from(
          ".pre-word",
          { yPercent: 110, opacity: 0, duration: 0.7, stagger: 0.12 },
          0.15
        )
        .to(
          progress,
          {
            v: 100,
            duration: 2.4,
            ease: "power1.inOut",
            onUpdate: () => {
              const v = Math.round(progress.v);
              if (count.current) {
                count.current.textContent = String(v).padStart(3, "0");
              }
            },
          },
          0
        )
        .to(".pre-rule-fill", { scaleX: 1, duration: 2.4, ease: "power1.inOut" }, 0)
        // ---- exit ----
        .to(".pre-inner", {
          opacity: 0,
          y: -24,
          duration: 0.5,
          ease: "power2.in",
        })
        .add(finish, "-=0.05")
        .to(
          ".pre-col",
          {
            scaleY: 0,
            duration: 1.05,
            ease: "expo.inOut",
            stagger: { each: 0.07, from: "start" },
          },
          "-=0.1"
        )
        .set(root.current, { display: "none" });
    }, root);

    return () => {
      window.clearTimeout(bail);
      ctx.revert();
    };
  }, []);

  return (
    <div className="pre" ref={root}>
      <div className="pre-cols" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <div className="pre-col" key={i} />
        ))}
      </div>

      <div className="pre-inner">
        <div className="pre-top">
          <div className="pre-brand">
            <span className="mask">
              <span>GAURAV TIWARI</span>
            </span>
            <span className="mask">
              <span className="pre-brand-sub">PORTFOLIO — EDITION 2026</span>
            </span>
          </div>
          <span className="pre-brand-sub">LOADING</span>
        </div>

        <div className="pre-mid">
          <div className="pre-words">
            {WORDS.map((w, i) => (
              <span className="pre-word" key={w}>
                {w}
                {i < WORDS.length - 1 && <i className="pre-dot">/</i>}
              </span>
            ))}
          </div>
          <div className="pre-count">
            <span ref={count}>000</span>
            <i>%</i>
          </div>
        </div>

        <div className="pre-rule">
          <div className="pre-rule-fill" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
