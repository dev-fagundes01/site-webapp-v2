import styled from 'styled-components';

export const LogoContainer = styled.img`
  height: 40px;
  max-width: 200px;
  object-fit: contain;

  /* Ensure logo is accessible */
  @media (max-width: 480px) {
    height: 32px;
  }
`;
