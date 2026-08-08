import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { stackGroups } from "../data/site";
import "./styles/stack.css";

const WaveField = lazy(() => import("./three/WaveField"));

const Stack = () => {
  const root = useRef<HTMLElement>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setLive(entry.isIntersecting),
      { rootMargin: "150px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="sec stack" id="stack" ref={root}>
      <div className="stack-canvas" aria-hidden="true">
        {live && (
          <Suspense fallback={null}>
            <WaveField />
          </Suspense>
        )}
      </div>
      <div className="stack-fade" aria-hidden="true" />

      <div className="shell stack-inner">
        <div className="eyebrow">
          <b>05</b> <span>Toolkit</span>
        </div>

        <div className="stack-head-row">
          <h2 className="stack-head" data-split>
            The tools I <em className="serif">reach for.</em>
          </h2>
          <p className="stack-note rv">
            Chosen for what they solve, not what's trending. Move the pointer —
            the field responds.
          </p>
        </div>

        <div className="stack-grid">
          {stackGroups.map((g, i) => (
            <div className="stack-col rv" key={g.title} data-rv-delay={`${i * 0.06}`}>
              <h3>
                <i>{String(i + 1).padStart(2, "0")}</i>
                {g.title}
              </h3>
              <ul>
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
