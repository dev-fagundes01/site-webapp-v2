import styled from 'styled-components';
import { pxToRem } from '../../utils/pxToRem';
import type { CardProps } from './types';

export const CardContainer = styled.div<CardProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent = 'center' }) => justifyContent};
  align-items: center;
  gap: ${({ gap = '1rem' }) => gap};
  max-width: 1200px;
  margin: ${({ margin = 'auto' }) => margin};
  margin-inline: ${({ marginInline }) => marginInline};
  margin-block: ${({ marginBlock }) => marginBlock};
  padding: ${({ padding = '1rem' }) => padding};
  width: ${({ width }) => (width ? pxToRem(width) : '100%')};
  height: ${({ height }) => (height ? pxToRem(height) : 'auto')};
  border: ${({ edgeSection, border }) => (edgeSection ? border : 'none')};
  border-radius: 20px;
  background-color: ${({ backgroundColor = 'transparent' }) => backgroundColor};
`;
