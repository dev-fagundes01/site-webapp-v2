import styled from "styled-components";
import { CardProps } from "./types";
import { pxToRem } from '../../utils/pxToRem';

export const CardContainer = styled.div<CardProps>`
  display: flex;
  justify-content: center;
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  margin-block: ${({ marginBlock = "auto" }) => marginBlock};
  padding: ${({ padding = "1rem" }) => padding};
  width: ${({ width }) => (width ? pxToRem(width) : "100%")};
  border: ${({ edgeSection }) => (edgeSection ? "1px solid #0056b3" : "none")};
  border-radius: 20px;
`;
