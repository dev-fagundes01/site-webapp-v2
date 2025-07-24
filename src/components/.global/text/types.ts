import { ReactNode } from "react";

export interface TextProps {
  children: ReactNode;
  width?: number;
  color?: string;
  size?: number;
  weight?: number;
  lineHeight?: number;
  marginLeft?: number;
}
