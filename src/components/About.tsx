import { stats } from "../data/site";
import "./styles/about.css";

const About = () => {
  return (
    <section className="sec sec--paper about" id="about">
      <div className="shell">
        <div className="eyebrow">
          <b>01</b> <span>Index — About</span>
        </div>

        <h2 className="about-statement" data-split>
          Electronics by degree,
          <br />
          backend by choice — I build
          <br />
          systems that <em className="hl">have to be right.</em>
        </h2>

        <div className="about-grid">
          <div className="about-copy">
            <p className="rv">
              I'm a third-year Electronics Engineering student at <b>RGIPT</b>{" "}
              with an online Computer Science minor from <b>IIT Mandi</b>. The
              software side took over early: I build and deploy services in
              Python (FastAPI) and TypeScript (Node.js, Next.js) on PostgreSQL
              and MongoDB.
            </p>
            <p className="rv" data-rv-delay="0.08">
              What I optimise for is correctness — a fare ledger that rejects
              every UPDATE and DELETE, compliance checks that fail closed,
              payment webhooks that can't charge twice, and tests written to
              break things before users can.
            </p>
            <p className="rv" data-rv-delay="0.16">
              I've led four hackathon teams, including a rank of{" "}
              <b>334 among 27,000+ teams</b> at the Amazon ML Challenge 2026.
              I also co-head the IEEE Student Branch at RGIPT and contribute to
              open source, with work merged in tldr-pages and caspian-sdk and
              fixes in review at TypeORM and Meshery.
            </p>
          </div>

          <div className="about-side">
            <ul className="about-stats">
              {stats.map((s, i) => (
                <li key={s.label} className="rv" data-rv-delay={`${i * 0.07}`}>
                  <span className="about-stat-v">{s.value}</span>
                  <span className="about-stat-l">{s.label}</span>
                </li>
              ))}
            </ul>

            <div className="about-now rv" data-rv-delay="0.3">
              <span className="about-now-tag">
                <i />
                Currently
              </span>
              <p>
                Third year at RGIPT, with fixes in review at TypeORM and
                Meshery — and open to backend and full-stack SDE internships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
