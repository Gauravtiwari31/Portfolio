import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../lib/gsap";
import { timeline } from "../data/site";
import "./styles/timeline.css";

const Timeline = () => {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".path-progress",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".path-list",
            start: "top 72%",
            end: "bottom 78%",
            scrub: 0.6,
          },
        }
      );

      gsap.utils.toArray<HTMLElement>(".path-item").forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 72%",
          toggleClass: { targets: item, className: "is-live" },
          once: true,
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="sec path" id="path" ref={root}>
      <div className="shell">
        <div className="eyebrow">
          <b>03</b> <span>Trajectory</span>
        </div>

        <div className="path-grid">
          <aside className="path-aside">
            <h2 className="path-head" data-split>
              The path
              <br />
              <em className="serif">so far.</em>
            </h2>
            <p className="path-note rv">
              Two campuses, two industries, and a habit of taking on the
              version of the problem that hasn't been solved yet.
            </p>
          </aside>

          <ol className="path-list">
            <div className="path-rail" aria-hidden="true">
              <span className="path-progress" />
            </div>

            {timeline.map((t) => (
              <li className="path-item" key={t.role}>
                <span className="path-dot" aria-hidden="true" />
                <div className="path-top">
                  <span className="path-when">{t.when}</span>
                  <span className="path-kind">{t.kind}</span>
                </div>
                <h3 className="path-role">{t.role}</h3>
                <span className="path-org">{t.org}</span>
                <p className="path-body">{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
