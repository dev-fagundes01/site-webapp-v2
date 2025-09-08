import styled from 'styled-components';
import { pxToRem } from '../../../utils/pxToRem';
import type { ParagraphProps } from './types';

export const StyledParagraph = styled.p<ParagraphProps>`
  font-size: ${({ size = 16 }) => pxToRem(size)};
  color: ${({ color = '#323232' }) => color};
  font-weight: ${({ weight = 400 }) => weight};
  line-height: ${({ lineHeight = 1.5 }) => lineHeight};
  margin: ${({ margin = '0 0 1rem 0' }) => margin};
  text-align: ${({ align = 'left' }) => align};
`;
