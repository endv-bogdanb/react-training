import type { RouteObject } from "react-router-dom";
import { ReactQuery } from "./ReactQuery";
import { ReactQueryProvider } from "./ReactQueryProvider";

export const reactQueryRoutes: RouteObject[] = [
  {
    Component: ReactQueryProvider,
    children: [
      {
        index: true,
        Component: ReactQuery,
      },
    ],
  },
];
