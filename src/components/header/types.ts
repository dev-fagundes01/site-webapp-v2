export interface HeaderLink {
  onClick: () => void;
  label: string;
  ariaLabel?: string;
}

export interface HeaderProps {
  links: HeaderLink[][];
}