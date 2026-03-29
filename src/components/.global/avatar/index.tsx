import React from 'react';
import { AvatarContainer } from './avatar.styles';
import type { AvatarProps } from './types';

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size,
  borderColor,
  borderWidth,
}) => {
  return (
    <AvatarContainer
      src={src}
      alt={alt}
      size={size}
      borderColor={borderColor}
      borderWidth={borderWidth}
    />
  );
};

export default Avatar;
