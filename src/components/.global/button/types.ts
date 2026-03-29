import type { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  size?: number;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  disabled?: boolean;
  onClick?: () => void;
}
