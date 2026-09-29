import { achievements, hackathons, openSource } from "../data/site";
import "./styles/record.css";

const n = (i: number) => String(i).padStart(2, "0");

const prCount = (status: "merged" | "review") =>
  openSource
    .filter((c) => c.status === status)
    .reduce((sum, c) => sum + c.prs.length, 0);

const Record = () => {
  return (
    <section className="sec sec--paper record" id="record">
      <div className="shell">
        <div className="eyebrow">
          <b>05</b> <span>On the record</span>
        </div>

        <h2 className="record-head" data-split>
          Merged, ranked, <em className="hl">on the record.</em>
        </h2>

        <div className="record-grid">
          <div className="record-tile record-oss rv">
            <div className="record-tile-head">
              <h3>Open source</h3>
              <span>
                {prCount("merged")} merged · {prCount("review")} in review
              </span>
            </div>

            <ul className="oss-list">
              {openSource.map((c) => (
                <li key={c.repo}>
                  <div className="oss-top">
                    <a
                      className="oss-repo"
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                    >
                      {c.repo}
                    </a>
                    {c.note && <span className="oss-note">{c.note}</span>}
                    <span className={`oss-status is-${c.status}`}>
                      {c.status === "merged" ? "Merged" : "In review"}
                    </span>
                  </div>
                  <p>{c.summary}</p>
                  <div className="oss-prs">
                    {c.prs.map((pr) => (
                      <a
                        key={pr}
                        href={`${c.href}/pull/${pr}`}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="link"
                      >
                        #{pr}
                      </a>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="record-tile record-hack rv" data-rv-delay="0.08">
            <div className="record-tile-head">
              <h3>Hackathons &amp; competitions</h3>
              <span>{hackathons.length} events</span>
            </div>

            <ol className="hack-list">
              {hackathons.map((h, i) => (
                <li key={h.event}>
                  <i>{n(i + 1)}</i>
                  <div>
                    <strong>{h.event}</strong>
                    <span>{h.result}</span>
                    <em>{h.role}</em>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {achievements.map((a, i) => {
            const body = (
              <>
                <span className="ach-title">
                  {a.title}
                  {a.href && <i aria-hidden="true">↗</i>}
                </span>
                <b className="ach-v">{a.value}</b>
                <p>{a.body}</p>
              </>
            );
            const delay = `${0.06 * i}`;
            return a.href ? (
              <a
                key={a.title}
                className="record-tile ach rv"
                data-rv-delay={delay}
                href={a.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
              >
                {body}
              </a>
            ) : (
              <div key={a.title} className="record-tile ach rv" data-rv-delay={delay}>
                {body}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Record;
