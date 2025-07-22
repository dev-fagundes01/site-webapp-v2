import styled from "styled-components";
import { pxToRem } from '../../../utils/pxToRem';

interface TitleContainerProps {
  size?: number;
}

export const TitleContainer = styled.h1<TitleContainerProps>`
  color: #003986;
  font-weight: 600;
  font-size: ${({size = 32}) => `${pxToRem(size)}`};
  width: 36rem;
  margin: auto;
  margin-bottom: 1rem;
`;