import { outcomePillars } from "../../lib/content";
import { IconBox } from "../ui/Icon";
import { RevealItem } from "../ui/Reveal";
import { SectionCTA } from "../ui/SectionCTA";
import { SectionShell } from "../ui/SectionShell";

export function SuccessStories() {
  return (
    <SectionShell
      id="success-stories"
      className="section-py bg-bg-alt"
      dataNavTheme="light"
      eyebrow="Outcomes"
      title="Results that matter"
      lead="We track progress across weight, cycles, energy, and long-term habits, not just a number on the scale."
    >
      <div className="card-grid">
        {outcomePillars.map((o) => (
          <RevealItem key={o.category}>
            <article className="content-card">
              <IconBox name={o.icon} className="mb-4" />
              <span className="meta-label">{o.category}</span>
              <h3 className="heading-md mt-2">{o.title}</h3>
              <p className="body-sm mt-2">{o.text}</p>
            </article>
          </RevealItem>
        ))}
      </div>
      <SectionCTA />
    </SectionShell>
  );
}
