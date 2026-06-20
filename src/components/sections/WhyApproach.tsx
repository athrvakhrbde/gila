import { approachPillars } from "../../lib/content";
import { IconBox } from "../ui/Icon";
import { RevealItem } from "../ui/Reveal";
import { SectionCTA } from "../ui/SectionCTA";
import { SectionShell } from "../ui/SectionShell";

export function WhyApproach() {
  return (
    <SectionShell
      id="why-approach"
      className="section-py bg-bg"
      dataNavTheme="light"
      eyebrow="Why gila"
      title="Why our approach works"
      lead="Medical credibility meets everyday support, not another generic diet."
    >
      <div className="card-grid">
        {approachPillars.map((p) => (
          <RevealItem key={p.title}>
            <article className="content-card">
              <IconBox name={p.icon} className="mb-4" />
              <h3 className="heading-md">{p.title}</h3>
              <p className="body-sm mt-2">{p.text}</p>
            </article>
          </RevealItem>
        ))}
      </div>
      <SectionCTA />
    </SectionShell>
  );
}
