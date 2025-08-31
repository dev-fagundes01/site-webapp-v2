import styled from 'styled-components';
import { pxToRem } from '../../../utils/pxToRem';
import { TitleProps } from './types';

export const TitleContainer = styled.h1<TitleProps>`
  color: ${({ color = '#003986' }) => color};
  font-weight: 600;
  font-size: ${({ size = 32 }) => `${pxToRem(size)}`};
  text-align: ${({ textAlign = 'initial' }) => textAlign};
  width: ${({ width }) => (width ? `${pxToRem(width)}` : '100%')};
  margin: auto;
  margin-top: ${({ marginTop = 0 }) => `${pxToRem(marginTop)}`};
  margin-bottom: ${({ marginBottom = 16 }) => `${pxToRem(marginBottom)}`};
`;
