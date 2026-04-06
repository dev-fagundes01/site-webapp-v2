import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 60px; /* Ensure adequate touch target height */
  font-weight: 500;
  position: relative;

  & div {
    width: stretch;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    & div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin: 1rem 2rem;
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    }
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

export const NavLinks = styled.nav`
  display: flex;
  gap: 0.5rem;
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
