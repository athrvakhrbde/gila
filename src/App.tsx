import { useEffect } from "react";
import { Navbar, Footer } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { ChooseProgram } from "./components/sections/ChooseProgram";
import { WhyApproach } from "./components/sections/WhyApproach";
import { HowItWorks } from "./components/sections/HowItWorks";
import { SuccessStories } from "./components/sections/SuccessStories";
import { MeetExperts } from "./components/sections/MeetExperts";
import { ProgramComparison } from "./components/sections/ProgramComparison";
import { ScienceBacked } from "./components/sections/ScienceBacked";
import { FAQ } from "./components/sections/FAQ";
import { ConsultCTA } from "./components/sections/ConsultCTA";

function App() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const hash = window.location.hash;
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    if (id) {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView();
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-bg text-fg">
      <Navbar />
      <main>
        <Hero />
        <ChooseProgram />
        <WhyApproach />
        <HowItWorks />
        <SuccessStories />
        <MeetExperts />
        <ProgramComparison />
        <ScienceBacked />
        <FAQ />
        <ConsultCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
