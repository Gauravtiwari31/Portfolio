import { useLayoutEffect, useState } from "react";
import { ScrollTrigger } from "./lib/gsap";
import { initReveals, refreshOnFonts } from "./lib/reveal";

import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Timeline from "./components/Timeline";
import Work from "./components/Work";
import Stack from "./components/Stack";
import Contact from "./components/Contact";

const App = () => {
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const cleanupReveals = initReveals();
    refreshOnFonts();
    ScrollTrigger.refresh();
    return cleanupReveals;
  }, []);

  const handleReady = () => {
    setReady(true);
    document.body.classList.add("is-ready");
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
  };

  return (
    <>
      <Preloader onDone={handleReady} />
      <Cursor />
      <div className="grain" aria-hidden="true" />
      <Nav ready={ready} />

      <main>
        <Hero ready={ready} />
        <Ticker />
        <About />
        <Capabilities />
        <Timeline />
        <Work />
        <Stack />
        <Contact />
      </main>
    </>
  );
};

export default App;
