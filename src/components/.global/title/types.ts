import { ReactNode } from "react";
export interface TitleProps extends React.AllHTMLAttributes<HTMLHeadElement> {
  children: ReactNode;
  size?: number;
  color?: string;
  as?: "h1" | "h2" | "h3";
}