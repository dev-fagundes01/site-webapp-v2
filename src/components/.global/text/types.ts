import type { ReactNode } from 'react';

export interface TextProps
  extends React.AllHTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  width?: number;
  color?: string;
  size?: number;
  weight?: number;
  lineHeight?: number;
  margin?: number;
  marginBlock?: number;
  marginInline?: number;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
}
