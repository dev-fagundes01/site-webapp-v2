import styled from "styled-components";
import { pxToRem } from '../../../utils/pxToRem';

interface SubtitleContainerProps {
  size: number;
  color: string;
}

export const SubtitleContainer = styled.h2<SubtitleContainerProps>`
  font-size: ${({size = 24}) => `${pxToRem(size)}`};
  color: ${({color}) => `${color}`};
  margin-bottom: 0.75rem;
`;
