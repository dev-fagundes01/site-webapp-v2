import styled from 'styled-components';
import { pxToRem } from '../../utils/pxToRem';

export const FooterContainer = styled.footer`
  width: ${pxToRem(1216)};
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'logo  . nav nav nav'
    'social social . . .'
    'hr hr hr hr hr'
    '. . . copy copy';
  padding: 4.5rem 0rem;
  text-align: center;
`;

export const Logo = styled.div`
  grid-area: logo;
`;

export const NavContainer = styled.div`
  grid-area: nav;
  display: flex;
  justify-content: flex-end;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

export const SocialList = styled.div`
  grid-area: social;
  width: 26.5rem;
  margin-bottom: 2rem;
  margin-left: 0.1rem;
  display: flex;
  gap: 1rem;

  a {
    font-size: 1.5rem;
    color: #0056b3;
    transition: color 0.2s;
    &:hover {
      color: #003366;
    }
  }
`;

export const Hr = styled.hr`
  grid-area: hr;
`;

export const Copyright = styled.p`
  grid-area: copy;
  font-size: 0.9rem;
  color: #fff;
  margin-top: 1rem;
  text-align: end;
`;
