import styled from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";
import { TextProps } from './types';

export const TextContainer = styled.p<TextProps>`
  width: ${(props) => (props.width ? pxToRem(props.width) : "100%")};
  font-size: ${(props) => `${pxToRem(props.size ?? 20)}`};
  font-weight: ${(props) => `${props.weight ?? 400}`};
  line-height: ${(props) => `${props.lineHeight}`};
  color: ${(props) => `${props.color ?? '#323232'}`};
  margin: 0 auto;
  margin-bottom: 1rem;
`;
