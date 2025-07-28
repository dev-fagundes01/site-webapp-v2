import styled from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";
import { SubtitleProps } from "./types";

export const SubtitleContainer = styled.h2<SubtitleProps>`
  font-size: ${({ size = 24 }) => `${pxToRem(size)}`};
  color: ${({ color = "#666666" }) => color};
  margin-top: ${({ marginTop = 0 }) => `${pxToRem(marginTop)}`};
  margin-bottom: ${({ marginBottom = 0 }) => `${pxToRem(marginBottom)}`};
`;
