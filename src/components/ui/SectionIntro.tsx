import { ReactNode } from "react";
import { Reveal, RevealStagger } from "./Reveal";

interface SectionIntroProps {
  eyebrow: string;
  title: string;
  lead?: ReactNode;
  dark?: boolean;
  className?: string;
  leadClassName?: string;
  children?: ReactNode;
}

export function SectionIntro({
  eyebrow,
  title,
  lead,
  dark = false,
  className = "",
  leadClassName = "",
  children,
}: SectionIntroProps) {
  const hasBody = Boolean(lead || children);

  return (
    <>
      <Reveal className={`col-label ${className}`}>
        <h2 className="section-head">
          <span className={dark ? "section-head-muted-on-dark" : "section-head-muted"}>
            {eyebrow}
          </span>
          <span className={dark ? "section-head-title-on-dark" : "section-head-title"}>
            {title}
          </span>
        </h2>
      </Reveal>
      {hasBody && (
        <Reveal className={`col-content gap-8 ${leadClassName}`}>
          {lead && (
            <p className={dark ? "section-lead-on-dark" : "section-lead"}>{lead}</p>
          )}
          {children && <div className="section-actions">{children}</div>}
        </Reveal>
      )}
    </>
  );
}

interface SectionContentProps {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}

export function SectionContent({ children, className = "", wide = false }: SectionContentProps) {
  return (
    <Reveal className={`${wide ? "col-content-wide" : "col-content"} ${className}`}>
      {children}
    </Reveal>
  );
}

export function SectionList({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <RevealStagger className={`col-content section-stack ${className}`}>{children}</RevealStagger>
  );
}
