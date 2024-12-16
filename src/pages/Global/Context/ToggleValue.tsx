import { BqSwitch } from "@beeq/react";
import type { FC } from "react";
import { useMyContext, useMyContextState } from "./myContext";

export const ToggleValue: FC = () => {
  const { toggle } = useMyContextState();

  return (
    <>
      <h2>Toggle is {`${toggle}`}</h2>
    </>
  );
};
