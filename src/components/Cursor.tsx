import { useEffect, useRef } from "react";
import { gsap, isTouch } from "../lib/gsap";
import "./styles/cursor.css";

/**
 * Two-part cursor: a hard dot that tracks 1:1 and a difference-blended ring
 * that lags behind. Elements opt into states with data-cursor:
 *   data-cursor="link"  -> ring swells
 *   data-cursor="view"  -> ring swells and shows a label
 *   data-cursor="hide"  -> both parts collapse
 */
const Cursor = () => {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isTouch()) return;

    const ringEl = ring.current!;
    const dotEl = dot.current!;

    const rx = gsap.quickTo(ringEl, "x", { duration: 0.5, ease: "power3" });
    const ry = gsap.quickTo(ringEl, "y", { duration: 0.5, ease: "power3" });
    const dx = gsap.quickTo(dotEl, "x", { duration: 0.1, ease: "power3" });
    const dy = gsap.quickTo(dotEl, "y", { duration: 0.1, ease: "power3" });

    let visible = false;
    const onMove = (e: PointerEvent) => {
      if (!visible) {
        visible = true;
        gsap.to([ringEl, dotEl], { opacity: 1, duration: 0.3 });
      }
      rx(e.clientX);
      ry(e.clientY);
      dx(e.clientX);
      dy(e.clientY);
    };

    const onOver = (e: PointerEvent) => {
      const target = (e.target as HTMLElement)?.closest?.(
        "[data-cursor]"
      ) as HTMLElement | null;

      const mode = target?.dataset.cursor;
      ringEl.dataset.mode = mode ?? "";
      if (label.current) label.current.textContent = target?.dataset.label ?? "";
    };

    const onLeave = () => {
      visible = false;
      gsap.to([ringEl, dotEl], { opacity: 0, duration: 0.3 });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <>
      <div className="cur-ring" ref={ring} aria-hidden="true">
        <span className="cur-label" ref={label} />
      </div>
      <div className="cur-dot" ref={dot} aria-hidden="true" />
    </>
  );
};

export default Cursor;
