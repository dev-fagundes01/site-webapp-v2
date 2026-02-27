import { RouteEnum, RouteEnum2 } from './enums/RouteEnum';

export const createHeaderLinks = (
  navigate: (route: RouteEnum | RouteEnum2) => void,
) => {
  const handleAnchorClick = (route: string) => {
    const hash = route.includes('#') ? route.split('#')[1] : null;
    const basePath = route.includes('#') ? route.split('#')[0] || '/' : route;

    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(basePath as RouteEnum | RouteEnum2);
      }
    } else {
      navigate(route as RouteEnum | RouteEnum2);
    }
  };

  return [
    [
      {
        label: 'aboutUs',
        onClick: () => handleAnchorClick(RouteEnum.ABOUT_US),
        ariaLabel: 'Navegar para a página Sobre Nós',
      },
      {
        label: 'initiatives',
        onClick: () => handleAnchorClick(RouteEnum.INITIATIVES),
        ariaLabel: 'Navegar para a página Nossas Iniciativas',
      },
      {
        label: 'newsAndEvents',
        onClick: () => handleAnchorClick(RouteEnum.NEWS_AND_EVENTS),
        ariaLabel: 'Navegar para a página Notícias & Eventos',
      },
      {
        label: 'joinUs',
        onClick: () => handleAnchorClick(RouteEnum.JOIN_US),
        ariaLabel: 'Navegar para a página Faça Parte',
      },
      {
        label: 'supportUs',
        onClick: () => handleAnchorClick(RouteEnum.SUPPORT_US),
        ariaLabel: 'Navegar para a página Seja um Apoiador',
      },
    ],
    [
      {
        label: 'business',
        onClick: () => handleAnchorClick(RouteEnum2.BUSINESS),
        ariaLabel: 'Navegar para a página business',
      },
      {
        label: 'techRecruiter',
        onClick: () => handleAnchorClick(RouteEnum2.TECH_RECRUITER),
        ariaLabel: 'Navegar para a página tech-recruiter',
      },
      {
        label: 'product',
        onClick: () => handleAnchorClick(RouteEnum2.PRODUCT),
        ariaLabel: 'Navegar para a página produto',
      },
      {
        label: 'agility',
        onClick: () => handleAnchorClick(RouteEnum2.AGILITY),
        ariaLabel: 'Navegar para a página agilidade',
      },
      {
        label: 'socialMedia',
        onClick: () => handleAnchorClick(RouteEnum2.SOCIAL_MEDIA),
        ariaLabel: 'Navegar para a página social-media',
      },
      {
        label: 'uiUxDesign',
        onClick: () => handleAnchorClick(RouteEnum2.UI_UX_DESIGN),
        ariaLabel: 'Navegar para a página design',
      },
      {
        label: 'frontEnd',
        onClick: () => handleAnchorClick(RouteEnum2.FRONT_END),
        ariaLabel: 'Navegar para a página front-end',
      },
      {
        label: 'backEnd',
        onClick: () => handleAnchorClick(RouteEnum2.BACK_END),
        ariaLabel: 'Navegar para a página back-end',
      },
      {
        label: 'data',
        onClick: () => handleAnchorClick(RouteEnum2.DATA),
        ariaLabel: 'Navegar para a página dados',
      },
      {
        label: 'qA',
        onClick: () => handleAnchorClick(RouteEnum2.QA),
        ariaLabel: 'Navegar para a página qa',
      },
      {
        label: 'devOps',
        onClick: () => handleAnchorClick(RouteEnum2.DEV_OPS),
        ariaLabel: 'Navegar para a página dev-ops',
      },
      {
        label: 'home',
        onClick: () => handleAnchorClick(RouteEnum2.HOME),
        ariaLabel: 'Navegar para a página home',
      },
    ],
  ];
};
