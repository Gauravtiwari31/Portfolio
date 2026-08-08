import { useLayoutEffect, useRef } from "react";
import { gsap, isTouch, prefersReducedMotion } from "../lib/gsap";
import { projects } from "../data/site";
import "./styles/work.css";

const Work = () => {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const listeners: Array<() => void> = [];

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".work-card");

      // Cards stack via position:sticky — this just recedes the one below
      // as the next slides over it.
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!next) return;
        gsap.to(card, {
          scale: 0.93,
          yPercent: -3,
          filter: "brightness(0.55)",
          ease: "none",
          scrollTrigger: {
            trigger: next,
            start: "top bottom",
            end: "top top",
            scrub: 0.4,
          },
        });
      });

      // Slow parallax drift on each screenshot inside its frame.
      gsap.utils.toArray<HTMLElement>(".work-shot img").forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: "none",
            scrollTrigger: {
              trigger: img.closest(".work-card"),
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      // Pointer tilt on the screenshots.
      if (isTouch()) return;
      gsap.utils.toArray<HTMLElement>(".work-shot").forEach((shot) => {
        // Perspective has to live on the transformed element itself here —
        // a CSS `perspective` on .work-shot would only affect its children.
        gsap.set(shot, { transformPerspective: 850 });

        const rx = gsap.quickTo(shot, "rotationX", {
          duration: 0.7,
          ease: "power3",
        });
        const ry = gsap.quickTo(shot, "rotationY", {
          duration: 0.7,
          ease: "power3",
        });

        const move = (e: PointerEvent) => {
          const r = shot.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          rx(-py * 11);
          ry(px * 13);
        };
        const reset = () => {
          rx(0);
          ry(0);
        };

        shot.addEventListener("pointermove", move);
        shot.addEventListener("pointerleave", reset);
        // gsap.context reverts tweens but not DOM listeners — clean up here.
        listeners.push(() => {
          shot.removeEventListener("pointermove", move);
          shot.removeEventListener("pointerleave", reset);
        });
      });
    }, root);

    return () => {
      listeners.forEach((off) => off());
      ctx.revert();
    };
  }, []);

  return (
    <section className="sec work" id="work" ref={root}>
      <div className="shell">
        <div className="eyebrow">
          <b>04</b> <span>Selected work</span>
        </div>
        <div className="work-head-row">
          <h2 className="work-head" data-split>
            Things I've
            <br />
            <em className="serif">actually shipped.</em>
          </h2>
          <span className="work-count rv">
            {String(projects.length).padStart(2, "0")} projects
          </span>
        </div>
      </div>

      <div className="work-stack shell">
        {projects.map((p, i) => (
          <article
            className="work-card"
            key={p.id}
            style={{ "--i": i } as React.CSSProperties}
          >
            <div className="work-card-in">
              <div className="work-side">
                <div className="work-side-top">
                  <span className="work-id">{p.id}</span>
                  <span className="work-year">{p.year}</span>
                </div>

                <h3 className="work-title">{p.title}</h3>
                <span className="work-cat">{p.category}</span>
                <p className="work-summary">{p.summary}</p>

                <div className="work-tags">
                  {p.stack.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>

                <a
                  className="work-link"
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="link"
                >
                  <span>View repository</span>
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path
                      d="M4 12L12 4M12 4H6M12 4V10"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      fill="none"
                    />
                  </svg>
                </a>
              </div>

              <a
                className="work-shot"
                href={p.link}
                target="_blank"
                rel="noreferrer"
                data-cursor="view"
                data-label="Open"
                aria-label={`Open ${p.title} on GitHub`}
              >
                <img src={p.image} alt={`${p.title} interface`} loading="lazy" />
                <span className="work-shot-frame" aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Work;
