import styled from 'styled-components';
import { CardProps } from './types';

export const CardContainer = styled.div<CardProps>`
  display: flex;
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ padding }) => padding || '1rem'};
`;
