import type { SVGProps } from "react";

import type { IconName } from "../../lib/icons";

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

function stroke(props: SVGProps<SVGSVGElement>) {
  return {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}

const paths: Record<IconName, JSX.Element> = {
  "weight-loss": (
    <>
      <path d="M4 18v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
      <path d="M12 6v4" />
      <path d="M9 8h6" />
      <path d="M7 14l3 3 7-7" />
    </>
  ),
  pcos: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2.5 2.5" />
      <path d="M8 4.5 6 2" />
      <path d="M16 4.5 18 2" />
    </>
  ),
  stethoscope: (
    <>
      <path d="M6 4v6a6 6 0 0 0 12 0V4" />
      <path d="M9 4h6" />
      <circle cx="18" cy="14" r="2" />
      <path d="M18 16v2a3 3 0 0 1-3 3h-1" />
    </>
  ),
  nutrition: (
    <>
      <path d="M12 21c4-4 6-7.5 6-11a6 6 0 0 0-12 0c0 3.5 2 7 6 11Z" />
      <path d="M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </>
  ),
  coaching: (
    <>
      <path d="M21 11.5a8.5 8.5 0 0 1-9.8 8.3 8.5 8.5 0 0 1-4.2-1.1L3 21l1.3-3.9A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="M8 11h.01" />
      <path d="M12 11h.01" />
      <path d="M16 11h.01" />
    </>
  ),
  support: (
    <>
      <path d="M12 18v3" />
      <path d="M8 21h8" />
      <path d="M5 10a7 7 0 0 1 14 0v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-5Z" />
    </>
  ),
  tracking: (
    <>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M8 15l3-3 3 2 4-5" />
    </>
  ),
  habits: (
    <>
      <path d="M17 1l4 4-4 4" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <path d="M7 23l-4-4 4-4" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </>
  ),
  clipboard: (
    <>
      <rect x="6" y="4" width="12" height="16" rx="2" />
      <path d="M9 4h6v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V4Z" />
      <path d="M9 12h6" />
      <path d="M9 16h4" />
    </>
  ),
  consultation: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M8 10h8" />
      <path d="M8 14h5" />
    </>
  ),
  plan: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="M9 13h6" />
      <path d="M9 17h4" />
    </>
  ),
  results: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 14l4-4 3 3 5-6" />
    </>
  ),
  check: (
    <path d="M5 12.5 9.5 17 19 7" strokeWidth={2} />
  ),
  cycles: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4" />
      <path d="M8 3v4" />
      <path d="M3 11h18" />
      <circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none" />
    </>
  ),
  energy: (
    <>
      <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z" />
    </>
  ),
  evidence: (
    <>
      <path d="M12 3 2 8l10 5 10-5-10-5Z" />
      <path d="M2 12l10 5 10-5" />
      <path d="M2 17l10 5 10-5" />
    </>
  ),
  personalised: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c1.5-4 6-6 8-6s6.5 2 8 6" />
    </>
  ),
  sustainability: (
    <>
      <path d="M12 21c-4-3.5-7-7-7-11a7 7 0 0 1 14 0c0 4-3 7.5-7 11Z" />
      <path d="M12 7v7" />
      <path d="M9 11h6" />
    </>
  ),
};

export function Icon({ name, size = 24, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      {...stroke({})}
    >
      {paths[name]}
    </svg>
  );
}

export function IconBox({
  name,
  dark = false,
  className = "",
}: {
  name: IconName;
  dark?: boolean;
  className?: string;
}) {
  return (
    <span className={`icon-box ${dark ? "icon-box-dark" : ""} ${className}`.trim()}>
      <Icon name={name} size={22} />
    </span>
  );
}
