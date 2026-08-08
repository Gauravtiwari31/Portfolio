import { stats } from "../data/site";
import "./styles/about.css";

const About = () => {
  return (
    <section className="sec sec--bone about" id="about">
      <div className="shell">
        <div className="eyebrow">
          <b>01</b> <span>Index — About</span>
        </div>

        <h2 className="about-statement" data-split>
          Two degrees, three disciplines,
          <br />
          one obsession — making complex
          <br />
          systems <em className="serif">actually behave.</em>
        </h2>

        <div className="about-grid">
          <div className="about-copy">
            <p className="rv">
              I'm an Electronics undergraduate at <b>RGIPT</b> carrying a
              Computer Science minor at <b>IIT Mandi</b> at the same time —
              two institutions, one timetable. The software half took over
              early: algorithms, systems design, and the unglamorous work of
              making things fast and safe.
            </p>
            <p className="rv" data-rv-delay="0.08">
              Since then I've shipped AI-assisted healthcare platforms, a
              layered network-security framework, and gameplay systems written
              to a frame budget. Different domains, same instinct — find where
              the system strains, then engineer the strain out of it.
            </p>
            <p className="rv" data-rv-delay="0.16">
              Off the keyboard I co-head the IEEE Student Branch, where I plan
              technical workshops and drag other people into the same rabbit
              holes.
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
                Finishing the CS minor at IIT Mandi while building
                production systems — and open to full-time engineering roles
                from mid-2026.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
