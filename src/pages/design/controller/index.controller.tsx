import React from "react";
import { useNavigate } from "react-router-dom";
import DesignView from "../view/index.view";
import { RouteEnum } from "../../../utils/enums/RouteEnum";

const DesignController: React.FC = () => {
  const navigate = useNavigate();

  const headerLinks = [
    {
      label: "aboutUs",
      onClick: () => navigate(RouteEnum.ABOUT_US),
      ariaLabel: "Navegar para a página Sobre Nós",
    },
    {
      label: "initiatives",
      onClick: () => navigate(RouteEnum.INITIATIVES),
      ariaLabel: "Navegar para a página Nossas Iniciativas",
    },
    {
      label: "testimonials",
      onClick: () => navigate(RouteEnum.TESTIMONIALS),
      ariaLabel: "Navegar para a página Depoimentos",
    },
    {
      label: "joinUs",
      onClick: () => navigate(RouteEnum.JOIN_US),
      ariaLabel: "Navegar para a página Faça Parte",
    },
    {
      label: "supportUs",
      onClick: () => navigate(RouteEnum.SUPPORT_US),
      ariaLabel: "Navegar para a página Seja um Apoiador",
    },
  ];

  return <DesignView links={headerLinks} />;
};

export default DesignController;
