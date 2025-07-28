import React from "react";
import { useNavigate } from "react-router-dom";
import DesignView from "../view/index.view";
import { RouteEnum, RouteEnum2 } from "../../../utils/enums/RouteEnum";
import { LinkFooterEnum, LinkFooterEnum2, LinkFooterEnum3 } from '../../../utils/enums/LinkFooterEnum';
import Telegram from '../../../assets/social/Telegram.png'
import Twitch from '../../../assets/social/Twitch.png'
import Discord from '../../../assets/social/discord.png'
import Facebook from '../../../assets/social/facebook.png'
import Instagram from '../../../assets/social/instagram.png'
import Linkedin from '../../../assets/social/linkedin.png'
import Twitter from '../../../assets/social/twitter.png'
import Youtube from '../../../assets/social/youtube.png'
import Github from '../../../assets/social/github.png'

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

  const footerLinks = [
    {
      label: "Conheça a SouJunior",
      to: LinkFooterEnum.MEET_SOUJUNIOR.toString(),
    },
    {
      label: "Sobre Nós",
      to: LinkFooterEnum.ABOUT_US.toString(),
    },
    {
      label: "Missão, Valores e Visão",
      to: LinkFooterEnum.MISSION_VALUES_VISION.toString(),
    },
    {
      label: "Nossas Iniciativas",
      to: LinkFooterEnum.INITIATIVES.toString(),
    },
  ]

  const footerLinks2 = [
    {
      label: "Fale Conosco",
      to: LinkFooterEnum2.CONTACT_US.toString(),
    },
    {
      label: "FAQ",
      to: LinkFooterEnum2.FAQ.toString(),
    },
    {
      label: "Ouvidoria",
      to: LinkFooterEnum2.OMBUDSMAN.toString(),
    },
  ]

  const footerLinks3 = [
    {
      label: "Faça Parte",
      to: LinkFooterEnum3.TAKE_PART.toString(),
    }
  ]

  const socialLinks = [
    { icon: Linkedin, to: "https://linkedin.com" },
    { icon: Github, to: "https://github.com" },
    { icon: Discord, to: "https://discord.com" },
    { icon: Youtube, to: "https://youtube.com" },
    { icon: Twitter, to: "https://twitter.com" },
    { icon: Instagram, to: "https://instagram.com" },
    { icon: Facebook, to: "https://facebook.com" },
    { icon: Telegram, to: "https://telegram.org" },
    { icon: Twitch, to: "https://twitch.tv" },
  ];

  const copyright = '© 2025 SouJunior. Todos os direitos reservados.'

  return <DesignView 
  headerLinks={headerLinks} 
  footerLinks={footerLinks} 
  footerLinks2={footerLinks2}  
  footerLinks3={footerLinks3} 
  socialLinks={socialLinks} 
  copyright={copyright}
  />;
};

export default DesignController;
