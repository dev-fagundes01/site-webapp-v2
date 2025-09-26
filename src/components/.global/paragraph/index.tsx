import React from 'react';
import type { ParagraphProps } from './types';
import { StyledParagraph } from './paragraph.styles';

const Paragraph: React.FC<ParagraphProps> = ({ children, ...props }) => {
  return <StyledParagraph {...props}>{children}</StyledParagraph>;
};

export default Paragraph;
