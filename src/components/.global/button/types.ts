import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  size?: number
  variant?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  onClick?: () => void;
}