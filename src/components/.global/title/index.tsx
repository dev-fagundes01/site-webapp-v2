import React from 'react';
import { TitleContainer } from './title.styles';
import { TitleProps } from './types';

const Title: React.FC<TitleProps> = ({
  children,
  size = 32,
  width,
  color,
  as = 'h1',
  marginTop,
}) => {
  return (
    <TitleContainer as={as} size={size} color={color} marginTop={marginTop} width={width}>
      {children}
    </TitleContainer>
  );
};

export default Title;
