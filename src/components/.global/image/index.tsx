import React from 'react';
import { ImageContainer } from './image.styles';
import { ImageProps } from './types';

const Image: React.FC<ImageProps> = ({ src, alt, role }) => {
  return (
    <ImageContainer src={src} alt={alt} role={role} />
  );
};

export default Image;