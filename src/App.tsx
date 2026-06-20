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
