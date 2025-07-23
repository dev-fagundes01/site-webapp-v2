import React from 'react';

export interface CardProps {
  width?: number;
  imageSrc?: string;
  title: string;
  titleAs?: keyof React.JSX.IntrinsicElements;
  titleSize?: number;
  marginTop?: number;  
  subtitle?: string;
  description?: string;
  descriptionLineHeight?: number;
  descriptionSize?: number;
  descriptionColor?: string;
  descriptionWeight?: number;
  list?: string[];
  listSize?: number;
  listColor?: string;
  listWeight?: number;
  onClick?: () => void;
}
