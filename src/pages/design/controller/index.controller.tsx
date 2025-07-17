import React from "react";
import { useNavigate } from "react-router-dom";
import DesignView from "../view/index.view";
import { RouteEnum, RouteEnum2 } from "../../../utils/enums/RouteEnum";

const DesignController: React.FC = () => {
  const navigate = useNavigate();

  const headerLinks = [
    [
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
    ],
    [
      {
        label: "business",
        onClick: () => navigate(RouteEnum2.BUSINESS),
        ariaLabel: "Navegar para a página ",
      },
      {
        label: "techRecruiter",
        onClick: () => navigate(RouteEnum2.TECH_RECRUITER),
        ariaLabel: "Navegar para a página ",
      },
      {
        label: "products",
        onClick: () => navigate(RouteEnum2.PRODUCTS),
        ariaLabel: "Navegar para a página ",
      },
      {
        label: "agility",
        onClick: () => navigate(RouteEnum2.AGILITY),
        ariaLabel: "Navegar para a página ",
      },
      {
        label: "socialMedia",
        onClick: () => navigate(RouteEnum2.SOCIAL_MEDIA),
        ariaLabel: "Navegar para a página ",
      },
      {
        label: "uiUxDesign",
        onClick: () => navigate(RouteEnum2.UI_UX_DESIGN),
        ariaLabel: "Navegar para a página ",
      },
      {
        label: "frontEnd",
        onClick: () => navigate(RouteEnum2.FRONT_END),
        ariaLabel: "Navegar para a página ",
      },
      {
        label: "backEnd",
        onClick: () => navigate(RouteEnum2.BACK_END),
        ariaLabel: "Navegar para a página ",
      },
      {
        label: "data",
        onClick: () => navigate(RouteEnum2.DATA),
        ariaLabel: "Navegar para a página ",
      },
      {
        label: "qA",
        onClick: () => navigate(RouteEnum2.QA),
        ariaLabel: "Navegar para a página ",
      },
      {
        label: "devOps",
        onClick: () => navigate(RouteEnum2.DEV_OPS),
        ariaLabel: "Navegar para a página ",
      }
    ]
  ];

  return <DesignView links={headerLinks} />;
};

export default DesignController;