import { RouteEnum2 } from './utils/enums/RouteEnum';
import HomeController from './pages/home/controller';
import AreaController from './pages/area-operation/area/controller/index';

export const routes = [
  { path: RouteEnum2.HOME, component: HomeController },
  { path: '/area/:areaName', component: AreaController },
];
