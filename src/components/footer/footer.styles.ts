import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem 1rem;
  background: #f5f5f5;
  text-align: center;
`;

export const Nav = styled.nav`
  margin-bottom: 1rem;
  a {
    margin: 0 1rem;
    color: #0056b3;
    text-decoration: none;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SocialList = styled.div`
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

export const Copyright = styled.div`
  font-size: 0.9rem;
  color: #666;
`;