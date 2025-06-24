import React from "react";
import { useTranslation } from "react-i18next";
import { HeaderContainer, Logo, NavLinks } from "./header.styles";
import Link from "../.global/link";
import { HeaderProps } from "./types";
import logo from "../../assets/sou-junior-logo.png";

const Header: React.FC<HeaderProps> = ({ links }) => {
  const { t } = useTranslation();

  return (
    <HeaderContainer role="banner">
      <Logo
        src={logo}
        alt="Sou Junior - Logo da organização que impulsiona carreiras em tecnologia"
        role="img"
      />
      <NavLinks role="navigation" aria-label="Navegação principal">
        {links.map((link, index) => (
          <Link
            key={link.label}
            onClick={link.onClick}
            ariaLabel={
              link.ariaLabel || `Navegar para ${t(`links.${link.label}`)}`
            }
            role="menuitem"
          >
            {t(`links.${link.label}`)}
          </Link>
        ))}
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
