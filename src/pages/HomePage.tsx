import { ChooseProgram } from "../components/sections/ChooseProgram";
import { ConsultCTA } from "../components/sections/ConsultCTA";
import { FAQ } from "../components/sections/FAQ";
import { Hero } from "../components/sections/Hero";
import { HowItWorks } from "../components/sections/HowItWorks";
import { MeetExperts } from "../components/sections/MeetExperts";
import { ProgramComparison } from "../components/sections/ProgramComparison";
import { ScienceBacked } from "../components/sections/ScienceBacked";
import { SuccessStories } from "../components/sections/SuccessStories";
import { WhyApproach } from "../components/sections/WhyApproach";

export function HomePage() {
  return (
    <>
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
    </>
  );
}
