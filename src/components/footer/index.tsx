import React from "react";
import { FooterProps } from "./types";
import { FooterContainer, Nav, SocialList, Copyright } from "./footer.styles";
import Link from '../.global/link';
import Image from '../.global/image';
import logoImage from "../../assets/sou-junior-logo.png";

const Footer: React.FC<FooterProps> = ({
  links,
  socialLinks,
  copyright,
}) => (
  <FooterContainer>
    <Image src={logoImage} alt="Sou Junior - Logo da organização que impulsiona carreiras em tecnologia" role="img"/>
    <Nav>
      {links.map((link) => (
        <Link key={link.label} to={link.to}>
          {link.label}
        </Link>
      )
      )}
    </Nav>
    {socialLinks && (
      <SocialList>
        {socialLinks.map((social) => (
          <Link key={social.to} to={social.to} img={true}>
            {social.icon}
          </Link>
        ))}
      </SocialList>
    )}
    {copyright && <Copyright>{copyright}</Copyright>}
  </FooterContainer>
);

export default Footer;