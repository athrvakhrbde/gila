import { programs } from "../../lib/content";
import { Button } from "../ui/Button";
import { FeatureList } from "../ui/FeatureList";
import { IconBox } from "../ui/Icon";
import { RevealItem } from "../ui/Reveal";
import { SectionCTA } from "../ui/SectionCTA";
import { SectionShell } from "../ui/SectionShell";

function ProgramCard({
  id,
  icon,
  title,
  description,
  benefits,
  exploreHref,
}: (typeof programs)[keyof typeof programs]) {
  return (
    <article id={id} className="program-card">
      <IconBox name={icon} className="mb-5" />
      <h3 className="program-card-title">{title}</h3>
      <p className="program-card-desc">{description}</p>
      <FeatureList items={benefits} />
      <Button href={exploreHref} variant="secondary" animated={false} className="mt-6">
        Explore programme
      </Button>
    </article>
  );
}

export function ChooseProgram() {
  const cards = [programs.weightLoss, programs.pcos];

  return (
    <SectionShell
      id="programs"
      className="section-py bg-bg-alt"
      dataNavTheme="light"
      eyebrow="Programmes"
      title="Choose your programme"
      lead="Two flagship paths. One clinical standard."
    >
      <div className="card-grid card-grid-2">
        {cards.map((p) => (
          <RevealItem key={p.id}>
            <ProgramCard {...p} />
          </RevealItem>
        ))}
      </div>
      <SectionCTA />
    </SectionShell>
  );
}
