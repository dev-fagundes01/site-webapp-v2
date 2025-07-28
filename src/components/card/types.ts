import React from 'react';

export interface CardProps {
  padding?: string;
  imageSrc?: string;
  title?: string;
  titleAs?: keyof React.JSX.IntrinsicElements;
  titleSize?: number;
  titleWidth?: number;  
  marginTop?: number;  
  subtitle?: string;
  description?: string;
  descriptionLineHeight?: number;
  descriptionSize?: number;
  descriptionColor?: string;
  descriptionWeight?: number;
  descriptionWidth?: number;
  list?: string[];
  listSize?: number;
  listColor?: string;
  listWeight?: number;
  buttonText?: string;
  buttonVariant?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
}
