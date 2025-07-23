import styled from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";

interface ListContainerProps {
  width?: number;
  color?: string;
  size?: number;
  weight?: number;
  lineHeight?: number;
}

export const ListContainer = styled.p<ListContainerProps>`
  width: ${(props) => props.width ? pxToRem(props.width) : "100%"};
  font-size: ${(props) => `${pxToRem(props.size ?? 20)}`};
  font-weight: ${(props) => `${props.weight}`};
  line-height: ${(props) => `${props.lineHeight}`};
  color: ${(props) => `${props.color}`};
  margin-bottom: 1rem;
`;
