import styled from 'styled-components';
import { pxToRem } from '../../../utils/pxToRem';
import { TitleProps } from './types';

export const TitleContainer = styled.h1<TitleProps>`
  color: #003986;
  font-weight: 600;
  font-size: ${({ size = 32 }) => `${pxToRem(size)}`};
  width: ${({ width }) => (width ? `${pxToRem(width)}` : '100%')};
  margin: auto;
  margin-top: ${({ marginTop = 0 }) => `${pxToRem(marginTop)}`};
  margin-bottom: 1rem;
`;
