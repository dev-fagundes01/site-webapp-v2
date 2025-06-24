import styled from "styled-components";

export const StyledLink = styled.a`
  color: #0056b3; /* Darker blue for better contrast */
  text-decoration: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;
  padding: 8px 12px;
  transition: all 0.2s ease-in-out;
  position: relative;

  /* Ensure minimum touch target size (44x44px) */
  min-height: 44px;
  min-width: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    text-decoration: underline;
    background-color: rgba(0, 86, 179, 0.1);
    color: #003d82;
  }

  &:focus {
    outline: 2px solid #0056b3;
    outline-offset: 2px;
    background-color: rgba(0, 86, 179, 0.1);
    text-decoration: underline;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid #0056b3;
    outline-offset: 2px;
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    border: 1px solid currentColor;
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
