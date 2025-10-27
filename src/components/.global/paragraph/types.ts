import type { ReactNode } from 'react';

export interface ParagraphProps
  extends React.AllHTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  size?: number;
  color?: string;
  weight?: number;
  lineHeight?: number;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
}
