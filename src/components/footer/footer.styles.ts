import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";

export const FooterContainer = styled.footer`
  width: ${pxToRem(1216)};
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "logo  . nav nav nav"
    "social social . . ."
    "hr hr hr hr hr"
    ". . . copy copy";
  padding: 4rem 0rem;
  text-align: center;
`;

export const Logo = styled.div`
  grid-area: logo;
  margin-left: 0.5rem;
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
  margin-bottom: 1rem;

  a {
    font-size: ${pxToRem(16)};
    margin: 0 1rem;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SocialList = styled.div`
  grid-area: social;
  width: 36rem;
  margin-bottom: 1rem;
  a {
    margin: 0 0.5rem;
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
  color: #666;
  margin-top: 1rem;
  text-align: end;
`;
