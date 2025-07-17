import React from "react";
import { TitleContainer } from "./title.styles";
import { TitleProps } from "./types";

const Title: React.FC<TitleProps> = ({ children }) => {
  return <TitleContainer>{children}</TitleContainer>;
};

export default Title;
