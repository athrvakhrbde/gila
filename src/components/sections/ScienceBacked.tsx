import { sciencePoints } from "../../lib/content";
import { IconBox } from "../ui/Icon";
import { RevealItem } from "../ui/Reveal";
import { SectionCTA } from "../ui/SectionCTA";
import { SectionShell } from "../ui/SectionShell";

const badges = ["Clinical protocols", "Doctor oversight", "Personalised plans", "Long-term focus"];

export function ScienceBacked() {
  return (
    <SectionShell
      id="science"
      className="section-dark border-t border-border-onDark"
      dataNavTheme="dark"
      dark
      eyebrow="Evidence"
      title="Science-backed care"
      lead="Protocols grounded in clinical practice, adapted to your body and your life."
    >
      <div className="science-badges">
        {badges.map((b) => (
          <span key={b} className="programme-badge programme-badge-on-dark">
            {b}
          </span>
        ))}
      </div>

      <div className="card-grid">
        {sciencePoints.map((p) => (
          <RevealItem key={p.title}>
            <article className="content-card content-card-dark">
              <IconBox name={p.icon} dark className="mb-4" />
              <h3 className="heading-md text-fg-onDark">{p.title}</h3>
              <p className="body-sm mt-2 text-fg-onDark-muted">{p.text}</p>
            </article>
          </RevealItem>
        ))}
      </div>

      <SectionCTA dark />
    </SectionShell>
  );
}
