import { consultHref, CTA_LABEL, hasConsultLink } from "../../lib/constants";
import { ArrowLink } from "./ArrowLink";
import { Button } from "./Button";

type Props = {
  dark?: boolean;
  label?: string;
};

export function SectionCTA({ dark = false, label = CTA_LABEL }: Props) {
  const href = consultHref();

  if (hasConsultLink) {
    return (
      <div className="section-cta">
        <ArrowLink href={href} light={dark} className="cta-link">
          {label}
        </ArrowLink>
      </div>
    );
  }

  return (
    <div className="section-cta">
      <Button href="#consult" variant="secondary" animated={false}>
        How to book
      </Button>
    </div>
  );
}
