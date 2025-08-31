export interface FooterProps {
  links: { label: string; to: string }[];
  links2?: { label: string; to: string }[];
  links3?: { label: string; to: string }[];
  socialLinks?: { icon: string; to: string }[];
  copyright: string;  
}