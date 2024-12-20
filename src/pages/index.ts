import { createBrowserRouter } from "react-router-dom";
import { SideBar } from "../layouts/SideBar";
import { Context, SyncExternalStore } from "./Global";
import { Home } from "./Home";
import {
  ReactHookForm,
  reactQueryRoutes,
  reactRouterRoutes,
} from "./Libraries";
import { UseReducer, UseRef, UseState, UseStateUpdate } from "./Local";

export const router = createBrowserRouter([
  {
    Component: SideBar,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/local",
        children: [
          {
            path: "use-ref",
            Component: UseRef,
          },
          {
            path: "use-state",
            Component: UseState,
          },
          {
            path: "use-state-update",
            Component: UseStateUpdate,
          },
          {
            path: "use-reducer",
            Component: UseReducer,
          },
        ],
      },
      {
        path: "/global",
        children: [
          {
            path: "context",
            Component: Context,
          },
          {
            path: "sync-external-store",
            Component: SyncExternalStore,
          },
        ],
      },
      {
        path: "/libraries",
        children: [
          {
            path: "react-router",
            children: [...reactRouterRoutes],
          },
          {
            path: "hook-form",
            Component: ReactHookForm,
          },
          {
            path: "react-query",
            children: [...reactQueryRoutes],
          },
        ],
      },
    ],
  },
]);
