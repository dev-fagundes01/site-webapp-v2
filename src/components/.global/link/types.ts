export interface LinkProps {
  children: React.ReactNode;
  onClick?: () => void;
  to?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  role?: string;
  tabIndex?: number;
  img?: boolean;
  size?: number;
  paddingY?: number; 
  paddingX?: number;
  width?: number;
  height?: number;
}
