import { Link, Navigate, useParams } from "react-router-dom";
import { faqCategories, processSteps, programmePages, type ProgrammeSlug } from "../lib/content";
import { consultHref, CTA_LABEL } from "../lib/constants";
import { Button } from "../components/ui/Button";
import { FeatureList } from "../components/ui/FeatureList";
import { IconBox } from "../components/ui/Icon";
import { Reveal, RevealItem } from "../components/ui/Reveal";
import { SectionShell } from "../components/ui/SectionShell";
import { ConsultCTA } from "../components/sections/ConsultCTA";
import { ProgrammeFAQ } from "../components/sections/ProgrammeFAQ";

function ProgrammeHero({ page }: { page: (typeof programmePages)[ProgrammeSlug] }) {
  const href = consultHref();

  return (
    <header className="programme-hero" data-nav-theme="light">
      <div className={`programme-hero-media ${page.slug === "pcos" ? "programme-hero-media--pcos" : ""}`}>
        <img src={page.image} alt="" loading="eager" decoding="async" />
      </div>
      <div className="container-site programme-hero-content">
        <Reveal>
          <Link to="/#programs" className="programme-back-link">
            ← All programmes
          </Link>
          <h1 className="programme-hero-title">{page.title}</h1>
          <p className="programme-hero-tagline">{page.tagline}</p>
          <div className="programme-hero-actions">
            <Button href={href} animated={false}>
              {CTA_LABEL}
            </Button>
          </div>
        </Reveal>
      </div>
    </header>
  );
}

export function ProgrammePage() {
  const { slug } = useParams<{ slug: string }>();
  const page = slug && slug in programmePages ? programmePages[slug as ProgrammeSlug] : null;

  if (!page) {
    return <Navigate to="/" replace />;
  }

  const faqs = faqCategories.find((c) => c.id === page.faqId)?.items ?? [];

  return (
    <>
      <ProgrammeHero page={page} />

      <SectionShell
        className="section-py bg-bg"
        dataNavTheme="light"
        eyebrow="Overview"
        title={`About ${page.title}`}
      >
        <p className="body-lg max-w-2xl text-fg-muted">{page.overview}</p>
      </SectionShell>

      <SectionShell
        className="section-py bg-bg-alt"
        dataNavTheme="light"
        eyebrow="Fit"
        title="Who it's for"
      >
        <FeatureList items={page.whoItsFor} />
      </SectionShell>

      <SectionShell
        className="section-py bg-bg"
        dataNavTheme="light"
        eyebrow="Care"
        title="What's included"
        lead="Everything in your programme, led by a gila doctor."
      >
        <div className="card-grid card-grid-2">
          {page.includes.map((item) => (
            <RevealItem key={item.title}>
              <article className="content-card">
                <IconBox name={item.icon} className="mb-4" />
                <h3 className="heading-md">{item.title}</h3>
                <p className="body-sm mt-2">{item.text}</p>
              </article>
            </RevealItem>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="how-it-works"
        className="section-dark border-t border-border-onDark"
        dataNavTheme="dark"
        dark
        eyebrow="Process"
        title="How it works"
        lead="The same four-step path every gila member follows."
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
      </SectionShell>

      <ProgrammeFAQ title={page.title} items={faqs} />

      <ConsultCTA />
    </>
  );
}
