import type { FC } from "react";
import { Toggle } from "./Toggle";
import { ToggleActions } from "./ToggleActions";
import { ToggleValue } from "./ToggleValue";
import { MyContextProvider } from "./myContext";

export const Context: FC = () => {
  return (
    <MyContextProvider>
      <ToggleValue />
      <Toggle />
      <ToggleActions />
    </MyContextProvider>
  );
};
