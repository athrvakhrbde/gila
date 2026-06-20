import type { AnchorHTMLAttributes } from "react";

function ArrowIcon() {
  return (
    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.18252 2.51959L4.71493 1.05199L5.19807 0.568848L7.30658 2.67736L7.54815 2.91893L7.30658 3.1605L5.19807 5.26902L4.71493 4.78588L6.29795 3.20285H0.972656V2.51959H6.18252Z"
        fill="currentColor"
      />
    </svg>
  );
}

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: string;
  light?: boolean;
};

export function ArrowLink({ children, className = "", light = false, ...rest }: Props) {
  return (
    <a
      className={`arrow-link ${light ? "arrow-link-light" : ""} ${className}`.trim()}
      {...rest}
    >
      <span className="arrow-circle group/arrow">
        <span className="block transition-transform duration-300 ease-augen group-hover/arrow:translate-x-[25px]">
          <ArrowIcon />
        </span>
        <span className="absolute block transition-transform duration-300 ease-augen group-hover/arrow:translate-x-0 -translate-x-[25px]">
          <ArrowIcon />
        </span>
      </span>
      <span>{children}</span>
    </a>
  );
}
