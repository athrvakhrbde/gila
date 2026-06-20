import {
  BOOKING_URL,
  CONTACT_EMAIL,
  CTA_LABEL,
  CTA_LABEL_SECONDARY,
  consultHref,
  hasConsultLink,
} from "../../lib/constants";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function ConsultCTA() {
  const href = consultHref();
  const expertHref = hasConsultLink
    ? href
    : CONTACT_EMAIL
      ? `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Talk to a gila expert")}`
      : "#consult";

  return (
    <section id="consult" className="bg-accent section-py text-fg" data-nav-theme="light">
      <div className="container-site section-shell">
        <Reveal className="section-shell-header">
          <p className="section-eyebrow">Get started</p>
          <h2 className="section-title">Ready to transform your health?</h2>
          <p className="section-desc">
            Book your consultation today. A gila doctor will help you choose Weight Loss or PCOS
            Reversal, and answer every question before you commit.
          </p>
        </Reveal>

        <Reveal className="section-shell-body">
          <div className="btn-row">
            {hasConsultLink ? (
              <>
                <Button
                  href={href}
                  variant="secondary"
                  className="border-fg bg-transparent text-fg hover:bg-fg/5"
                  animated={false}
                >
                  {BOOKING_URL ? CTA_LABEL : `Email ${CONTACT_EMAIL}`}
                </Button>
                <Button href={expertHref} variant="ghost" className="text-fg" animated={false}>
                  {CTA_LABEL_SECONDARY}
                </Button>
              </>
            ) : (
              <p className="body-sm max-w-md text-fg-muted">
                Online booking isn&apos;t connected yet. Check back soon.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
