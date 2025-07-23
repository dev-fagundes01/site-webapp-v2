import React from 'react';
import { TitleContainer } from './title.styles';
import { TitleProps } from './types';

const Title: React.FC<TitleProps> = ({
  children,
  size = 32,
  color,
  as = 'h1',
}) => {
  return (
    <TitleContainer as={as} size={size} color={color}>
      {children}
    </TitleContainer>
  );
};

export default Title;
