import styled from "styled-components";
import { pxToRem } from '../../../utils/pxToRem';

interface LinkProps {
  paddingY?: number; 
  paddingX?: number;
  width?: number;
  height?: number;}

export const StyledLink = styled.a<LinkProps>`
  color: #0056b3; /* Darker blue for better contrast */
  text-decoration: none;
  cursor: pointer;
  font-size: ${pxToRem(16)};
  font-weight: 500;
  border-radius: 4px;
  padding-block: ${props => props.paddingY ? pxToRem(props.paddingY) : 'auto'};
  padding-inline: ${props => props.paddingX ? pxToRem(props.paddingX) : 'auto'};
  transition: all 0.2s ease-in-out;
  position: relative;

  min-height: 16px;
  min-width: 16px;
  width: ${props => props.width ?? 'auto'};
  height: ${props => props.height ?? 'auto'};  
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
