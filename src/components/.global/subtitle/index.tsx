import React from "react";
import { SubtitleContainer } from "./subtitle.styles";
import { SubtitleProps } from "./types";

const Subtitle: React.FC<SubtitleProps> = ({ children, ...props }) => {
  return <SubtitleContainer {...props}>{children}</SubtitleContainer>;
};

export default Subtitle;

