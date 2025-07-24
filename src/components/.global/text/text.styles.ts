import styled from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";
import { TextProps } from './types';

export const TextContainer = styled.p<TextProps>`
  width: ${(props) => `${pxToRem(props.width ?? 400)}`};
  font-size: ${(props) => `${pxToRem(props.size ?? 20)}`};
  font-weight: ${(props) => `${props.weight ?? 400}`};
  line-height: ${(props) => `${props.lineHeight}`};
  color: ${(props) => `${props.color ?? '#323232'}`};
  margin-left: ${(props) => `${pxToRem(props.marginLeft ?? 0)}`};
  margin-bottom: 1rem;
`;
