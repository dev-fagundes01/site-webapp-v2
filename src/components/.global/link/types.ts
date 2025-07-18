export interface LinkProps {
  children: React.ReactNode;
  onClick?: () => void;
  to?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  role?: string;
  tabIndex?: number;
}
