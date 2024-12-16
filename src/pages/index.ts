import { createBrowserRouter } from "react-router-dom";
import { SideBar } from "../layouts/SideBar";
import { Context, SyncExternalStore } from "./Global";
import { Home } from "./Home";
import { UseReducer, UseState, UseStateUpdate } from "./Local";

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
    ],
  },
]);
