import React from "react";
import { SubtitleContainer } from "./subtitle.styles";
import { SubtitleProps } from "./types";

const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  return <SubtitleContainer>{children}</SubtitleContainer>;
};

export default Subtitle;
