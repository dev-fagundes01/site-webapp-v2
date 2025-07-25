export interface FooterProps {
  links: { label: string; to: string }[];
  socialLinks?: { icon: string; to: string }[];
  copyright?: string;
}