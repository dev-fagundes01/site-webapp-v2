import styled from 'styled-components';
import { pxToRem } from '../../../utils/pxToRem';

export const AvatarContainer = styled.img<{
  $size?: number;
  $borderColor?: string;
  $borderWidth?: number;
}>`
  width: ${({ $size = 56 }) => pxToRem($size)};
  height: ${({ $size = 56 }) => pxToRem($size)};
  object-fit: cover;
  border-radius: 999px;
  border: ${({ $borderWidth = 3, $borderColor = '#f2f2f2' }) =>
    `${pxToRem($borderWidth)} solid ${$borderColor}`};
`;
