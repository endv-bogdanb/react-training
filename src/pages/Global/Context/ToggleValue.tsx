import type { FC } from "react";
import { useMyContextState } from "./myContext";

export const ToggleValue: FC = () => {
  const { toggle } = useMyContextState();

  return (
    <>
      <h2>Toggle is {`${toggle}`}</h2>
    </>
  );
};
