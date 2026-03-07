import { RouteEnum } from './enums/RouteEnum';

export const createHeaderLinks = (navigate: (route: RouteEnum) => void) => {
  const handleAnchorClick = (route: string) => {
    const hash = route.includes('#') ? route.split('#')[1] : null;
    const basePath = route.includes('#') ? route.split('#')[0] || '/' : route;

    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(basePath as RouteEnum);
      }
    } else {
      navigate(route as RouteEnum);
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
  ];
};
