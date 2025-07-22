import styled from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";

interface TextContainerProps {
  color?: string;
  size?: number;
  weight?: number;
}

export const TextContainer = styled.p<TextContainerProps>`
  font-size: ${(props) => `${pxToRem(props.size ?? 20)}`};
  font-weight: ${(props) => `${props.weight}`};
  color: ${(props) => `${props.color}`};
  margin-bottom: 1rem;
`;
