import styled from 'styled-components';
import { pxToRem } from '../../../utils/pxToRem';
import type { ImageProps } from './types';

export const ImageContainer = styled.img<ImageProps>`
  object-fit: contain;
  width: ${({ width }) => (width ? pxToRem(width) : '100%')};
  height: ${({ height }) => (height ? pxToRem(height) : 'auto')};
`;
