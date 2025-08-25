import styled from "styled-components";
import { CardProps } from "./types";
import { pxToRem } from '../../utils/pxToRem';

export const CardContainer = styled.div<CardProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent = "center" }) => justifyContent};
  align-items: center;
  gap: 1rem;
  max-width: 1200px;
  margin: 0 ${({ marginInline = "auto" }) => marginInline};
  margin-block: ${({ marginBlock = "0" }) => marginBlock};
  padding: ${({ padding = "1rem" }) => padding};
  width: ${({ width }) => (width ? pxToRem(width) : "100%")};
  height: ${({ height }) => (height ? pxToRem(height) : "auto")};
  border: ${({ edgeSection, border }) => (edgeSection ? border : "none")};
  border-radius: 20px;
  background-color: ${({ backgroundColor = "transparent" }) => backgroundColor};
`;
