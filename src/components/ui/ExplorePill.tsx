import type { AnchorHTMLAttributes } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: string;
  active?: boolean;
};

export function ExplorePill({ children, active = false, className = "", ...rest }: Props) {
  const base = active ? "pill-filled" : "pill-outline";
  return (
    <a className={`${base} group/pill relative overflow-hidden ${className}`.trim()} {...rest}>
      <span className="block transition-transform duration-300 ease-augen group-hover/pill:-translate-y-5">
        {children}
      </span>
      <span
        aria-hidden
        className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-augen translate-y-5 group-hover/pill:translate-y-0"
      >
        {children}
      </span>
    </a>
  );
}
