import { ReactNode } from 'react';
export interface TitleProps extends React.AllHTMLAttributes<HTMLHeadElement> {
  children: ReactNode;
  size?: number;
  textAlign?: 'left' | 'center' | 'right' | 'justify' | 'initial';
  width?: number;
  marginTop?: number;
  color?: string;
  as?: keyof React.JSX.IntrinsicElements; //"h1" | "h2" | "h3";
}
