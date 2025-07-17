import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;  
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
  min-height: 60px; /* Ensure adequate touch target height */

  & div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    gap: 1rem;
    padding: 1rem;
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    border-bottom: 2px solid #000;
    background-color: #fff;
  }
`;

export const Logo = styled.img`
  height: 40px;
  max-width: 200px;
  object-fit: contain;

  /* Ensure logo is accessible */
  @media (max-width: 480px) {
    height: 32px;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 0.5rem; /* Reduced gap to allow for link padding */
  align-items: center;

  /* Responsive navigation */
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.25rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
  }
`;
