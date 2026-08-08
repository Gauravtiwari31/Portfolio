import { useEffect, useState } from "react";
import { gsap, scrollToId } from "../lib/gsap";
import { profile } from "../data/site";
import "./styles/nav.css";

const LINKS = [
  { id: "about", n: "01", label: "About" },
  { id: "capabilities", n: "02", label: "Capabilities" },
  { id: "path", n: "03", label: "Path" },
  { id: "work", n: "04", label: "Work" },
  { id: "contact", n: "05", label: "Contact" },
];

const Nav = ({ ready }: { ready: boolean }) => {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const [clock, setClock] = useState("");

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const tick = () =>
      setClock(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!ready) return;
    gsap.to(".nav", { opacity: 1, y: 0, duration: 1, ease: "expo.out", delay: 0.35 });
  }, [ready]);

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <header className={`nav ${stuck ? "is-stuck" : ""}`}>
        <a
          className="nav-mark"
          href="#top"
          data-cursor="link"
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          aria-label="Back to top"
        >
          <span>GT</span>
        </a>

        <nav className="nav-links" aria-label="Sections">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => go(e, l.id)}
              data-cursor="link"
            >
              <i>{l.n}</i>
              <span className="nav-swap">
                <span>{l.label}</span>
                <span>{l.label}</span>
              </span>
            </a>
          ))}
        </nav>

        <div className="nav-side">
          <span className="nav-status">
            <i className="nav-pulse" />
            Open to roles
          </span>
          <span className="nav-clock">{clock} IST</span>
        </div>

        <button
          className={`nav-burger ${open ? "is-open" : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </header>

      <div className={`nav-sheet ${open ? "is-open" : ""}`}>
        <nav>
          {LINKS.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => go(e, l.id)}
              style={{ transitionDelay: `${open ? 0.08 + i * 0.05 : 0}s` }}
            >
              <i>{l.n}</i>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-sheet-foot">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <div>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
