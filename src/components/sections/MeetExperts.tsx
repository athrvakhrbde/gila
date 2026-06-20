import { careTeam } from "../../lib/content";
import { IconBox } from "../ui/Icon";
import { RevealItem } from "../ui/Reveal";
import { SectionCTA } from "../ui/SectionCTA";
import { SectionShell } from "../ui/SectionShell";

export function MeetExperts() {
  return (
    <SectionShell
      id="experts"
      className="section-py bg-bg"
      dataNavTheme="light"
      eyebrow="Team"
      title="Meet our experts"
      lead="A multidisciplinary care team of doctors, nutritionists, and coaches working together."
    >
      <div className="card-grid">
        {careTeam.map((member) => (
          <RevealItem key={member.title}>
            <article className="content-card">
              <IconBox name={member.icon} className="mb-4" />
              <p className="meta-label">{member.role}</p>
              <h3 className="expert-name">{member.title}</h3>
              <dl className="expert-meta">
                <div>
                  <dt>Qualification</dt>
                  <dd>{member.qualification}</dd>
                </div>
                <div>
                  <dt>Focus</dt>
                  <dd>{member.experience}</dd>
                </div>
                <div>
                  <dt>Speciality</dt>
                  <dd>{member.specialty}</dd>
                </div>
              </dl>
            </article>
          </RevealItem>
        ))}
      </div>
      <SectionCTA />
    </SectionShell>
  );
}
