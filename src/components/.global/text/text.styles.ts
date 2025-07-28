import styled from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";
import { TextProps } from './types';

export const TextContainer = styled.p<TextProps>`
  width: ${({ width }) => (width ? pxToRem(width) : "100%")};
  font-size: ${({size = 20}) => pxToRem(size)};
  font-weight: ${({weight = 400}) => weight };
  line-height: ${({lineHeight}) => lineHeight};
  color: ${({color = '#323232'}) => color };
  margin: 0 auto;
  margin-bottom: 1rem;
`;
