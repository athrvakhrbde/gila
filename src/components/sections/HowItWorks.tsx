import { processSteps } from "../../lib/content";
import { IconBox } from "../ui/Icon";
import { RevealItem } from "../ui/Reveal";
import { SectionCTA } from "../ui/SectionCTA";
import { SectionShell } from "../ui/SectionShell";

export function HowItWorks() {
  return (
    <SectionShell
      id="how-it-works"
      className="section-dark border-t border-border-onDark"
      dataNavTheme="dark"
      dark
      eyebrow="Process"
      title="How it works"
      lead="Four steps from first call to lasting results."
    >
      <div className="card-grid">
        {processSteps.map((step) => (
          <RevealItem key={step.num}>
            <article className="content-card content-card-dark">
              <div className="flex items-center gap-3">
                <IconBox name={step.icon} dark />
                <span className="meta-label">{step.num}</span>
              </div>
              <h3 className="heading-md mt-4 text-fg-onDark">{step.title}</h3>
              <p className="body-sm mt-2 text-fg-onDark-muted">{step.text}</p>
            </article>
          </RevealItem>
        ))}
      </div>
      <SectionCTA dark />
    </SectionShell>
  );
}
