import { useState } from "react";
import { capabilities } from "../data/site";
import "./styles/capabilities.css";

const Capabilities = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="sec cap" id="capabilities">
      <div className="shell">
        <div className="eyebrow">
          <b>02</b> <span>What I build</span>
        </div>

        <h2 className="cap-head" data-split>
          Three stacks, <em className="serif">one engineer.</em>
        </h2>

        <div className="cap-list">
          {capabilities.map((c, i) => {
            const isOpen = open === i;
            return (
              <div
                key={c.index}
                className={`cap-row ${isOpen ? "is-open" : ""}`}
              >
                <button
                  className="cap-bar"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  data-cursor="link"
                >
                  <span className="cap-n">{c.index}</span>
                  <span className="cap-title">{c.title}</span>
                  <span className="cap-lede">{c.lede}</span>
                  <span className="cap-plus" aria-hidden="true">
                    <i />
                    <i />
                  </span>
                </button>

                <div className="cap-drawer">
                  <div className="cap-drawer-in">
                    <p>{c.body}</p>
                    <div className="cap-tags">
                      {c.tags.map((t) => (
                        <span className="chip" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
