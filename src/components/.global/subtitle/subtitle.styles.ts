import styled from "styled-components";
import { pxToRem } from '../../../utils/pxToRem';
import { SubtitleProps } from './types';

export const SubtitleContainer = styled.h2<SubtitleProps>`
  font-size: ${({size = 24}) => `${pxToRem(size)}`};
  color: ${({color}) => `${color}`};
  margin-bottom: 0.75rem;
`;
