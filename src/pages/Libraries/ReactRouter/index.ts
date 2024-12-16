import type { RouteObject } from "react-router-dom";
import { ReactRouter } from "./ReactRouter";
import { ReactRouterDetails } from "./ReactRouterDetails";

export const reactRouterRoutes: RouteObject[] = [
  {
    index: true,
    Component: ReactRouter,
  },
  {
    path: ":id",
    Component: ReactRouterDetails,
  },
];
