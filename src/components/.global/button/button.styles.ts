import styled from 'styled-components';
import { pxToRem } from '../../../utils/pxToRem';
import type { ButtonProps } from './types';

export const StyledButton = styled.button<ButtonProps>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  font-size: ${({ size }) => pxToRem(size || 16)};
  background: ${({ variant }) =>
    !variant || variant === 'secondary'
      ? '#fff'
      : variant === 'tertiary'
        ? 'transparent'
        : 'rgba(0, 57, 134, 1)'};
  color: ${({ variant }) => (variant === 'primary' ? '#fff' : '#0056b3')};
  padding: 1rem 2rem;
  border-radius: 10px;
  border: none;
`;
