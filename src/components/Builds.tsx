import { builds, projects, smallBuilds, type Link } from "../data/site";
import "./styles/builds.css";

const n = (i: number) => String(i).padStart(2, "0");

const Links = ({ links }: { links: Link[] }) => (
  <span className="build-links">
    {links.map((l) => (
      <a
        key={l.href}
        href={l.href}
        target="_blank"
        rel="noreferrer"
        data-cursor="link"
      >
        {l.label} <i>↗</i>
      </a>
    ))}
  </span>
);

// Numbering carries on from the featured cards above.
const first = projects.length + 1;

const Builds = () => {
  return (
    <div className="builds shell">
      <div className="builds-head">
        <h3 className="builds-title rv">
          More <em className="hl">builds.</em>
        </h3>
        <span className="builds-count rv">
          {n(builds.length + smallBuilds.length)} projects
        </span>
      </div>

      <div className="builds-grid">
        {builds.map((b, i) => (
          <article
            className="build rv"
            key={b.title}
            data-rv-delay={`${(i % 2) * 0.06}`}
          >
            <div className="build-top">
              <span className="build-n">{n(first + i)}</span>
              <span className="build-context">{b.context}</span>
            </div>
            <h4 className="build-title">{b.title}</h4>
            <span className="build-kind">{b.kind}</span>
            <p className="build-summary">{b.summary}</p>
            <div className="build-foot">
              <div className="build-tags">
                {b.stack.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
              <Links links={b.links} />
            </div>
          </article>
        ))}
      </div>

      <ul className="builds-small">
        {smallBuilds.map((b, i) => (
          <li className="rv" key={b.title}>
            <span className="build-n">{n(first + builds.length + i)}</span>
            <span className="builds-small-title">{b.title}</span>
            <span className="builds-small-summary">{b.summary}</span>
            <Links links={b.links} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Builds;
