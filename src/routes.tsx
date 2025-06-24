import { RouteEnum } from "./utils/enums/RouteEnum";
import DesignController from "./pages/design/controller/index.controller";

export const routes = [{ path: RouteEnum.DESIGN, component: DesignController }];
