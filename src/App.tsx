import type { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages";

export const App: FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
