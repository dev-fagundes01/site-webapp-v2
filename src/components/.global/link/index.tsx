import React from "react";
import { StyledLink } from "./link.styles";
import { LinkProps } from "./types";

const Link: React.FC<LinkProps> = ({
  children,
  onClick,
  ariaLabel,
  ariaDescribedBy,
  role = "button",
  tabIndex,
  img = false,
  size,
  paddingY,
  paddingX,
  width,
  height,
}) => {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    // Ensure Enter and Space trigger the click action
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (onClick) {
        onClick();
      }
    }
  };

  return (
    <StyledLink
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      role={role}
      tabIndex={tabIndex}
      size={size}
      paddingY={paddingY}
      paddingX={paddingX}
      width={width}
      height={height}
    >
      {img ? (
        <img src={children as string} alt={ariaLabel} style={{ width: "24px", height: "24px" }}/>
      ) : (
        children
      )
      }
    </StyledLink>
  );
};

export default Link;
