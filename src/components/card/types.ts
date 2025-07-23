import React from 'react';

export interface CardProps {
  imageSrc?: string;
  title: string;
  titleAs?: keyof React.JSX.IntrinsicElements;
  titleSize?: number;
  subtitle?: string;
  description?: string;
  descriptionSize?: number;
  descriptionColor?: string;
  descriptionWeight?: number;
  onClick?: () => void;
}
