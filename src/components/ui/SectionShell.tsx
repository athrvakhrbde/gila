import { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionShellProps {
  id?: string;
  className?: string;
  dataNavTheme?: "light" | "dark";
  dark?: boolean;
  eyebrow: string;
  title: string;
  lead?: ReactNode;
  children: ReactNode;
}

export function SectionShell({
  id,
  className = "",
  dataNavTheme,
  dark = false,
  eyebrow,
  title,
  lead,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className={className} data-nav-theme={dataNavTheme}>
      <div className="container-site section-shell">
        <Reveal className="section-shell-header">
          <p className={dark ? "section-eyebrow-on-dark" : "section-eyebrow"}>{eyebrow}</p>
          <h2 className={dark ? "section-title-on-dark" : "section-title"}>{title}</h2>
          {lead && (
            <p className={dark ? "section-desc-on-dark" : "section-desc"}>{lead}</p>
          )}
        </Reveal>
        <div className="section-shell-body">{children}</div>
      </div>
    </section>
  );
}
