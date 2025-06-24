export interface HeaderLink {
  label: string;
  onClick: () => void;
  ariaLabel?: string;
}

export interface HeaderProps {
  links: HeaderLink[];
}
