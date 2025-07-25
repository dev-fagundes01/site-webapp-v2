import React from "react";
import { SubtitleContainer } from "./subtitle.styles";
import { SubtitleProps } from "./types";

const Subtitle: React.FC<SubtitleProps> = ({ children, size = 24, color = "#666666" }) => {
  return <SubtitleContainer size={size} color={color}>{children}</SubtitleContainer>;
};

export default Subtitle;

