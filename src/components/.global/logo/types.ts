export interface LogoProps {
  src: string;
  alt: string;
  role: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}
