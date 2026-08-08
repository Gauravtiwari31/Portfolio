import { useLayoutEffect, useRef } from "react";
import { gsap, isTouch, prefersReducedMotion } from "../lib/gsap";
import { profile } from "../data/site";
import "./styles/contact.css";

const Contact = () => {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion() || isTouch()) return;

    const listeners: Array<() => void> = [];

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((el) => {
        const x = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3" });
        const y = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3" });

        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          x((e.clientX - (r.left + r.width / 2)) * 0.28);
          y((e.clientY - (r.top + r.height / 2)) * 0.45);
        };
        const reset = () => {
          x(0);
          y(0);
        };

        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", reset);
        listeners.push(() => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", reset);
        });
      });
    }, root);

    return () => {
      listeners.forEach((off) => off());
      ctx.revert();
    };
  }, []);

  return (
    <section className="sec contact" id="contact" ref={root}>
      <div className="contact-glow" aria-hidden="true" />

      <div className="shell">
        <div className="eyebrow">
          <b>06</b> <span>Contact</span>
        </div>

        <h2 className="contact-head" data-split>
          Got something
          <br />
          worth <em className="serif">building?</em>
        </h2>

        <a
          className="contact-mail"
          href={`mailto:${profile.email}`}
          data-magnetic
          data-cursor="link"
        >
          <span className="contact-mail-in">{profile.email}</span>
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path
              d="M4 12L12 4M12 4H6M12 4V10"
              stroke="currentColor"
              strokeWidth="1.2"
              fill="none"
            />
          </svg>
        </a>

        <div className="contact-grid">
          <div className="contact-col rv">
            <h4>Direct</h4>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              {profile.phone}
            </a>
            <span>{profile.location}</span>
            <span>{profile.timezone}</span>
          </div>

          <div className="contact-col rv" data-rv-delay="0.06">
            <h4>Elsewhere</h4>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub <i>↗</i>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <i>↗</i>
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer">
              Résumé <i>↗</i>
            </a>
          </div>

          <div className="contact-col rv" data-rv-delay="0.12">
            <h4>Availability</h4>
            <span className="contact-avail">
              <i />
              Open to full-time roles
            </span>
            <span>From mid-2026</span>
            <span>Remote or relocating</span>
          </div>
        </div>
      </div>

      <footer className="foot">
        <div className="shell foot-in">
          <span>© 2026 Gaurav Tiwari</span>
          <span className="foot-mid">
            Designed &amp; built from scratch — React, Three.js, GSAP
          </span>
          <button
            className="foot-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            data-cursor="link"
          >
            Back to top <i>↑</i>
          </button>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
