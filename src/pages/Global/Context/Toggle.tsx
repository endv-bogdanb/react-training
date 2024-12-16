import { BqSwitch } from "@beeq/react";
import type { FC } from "react";
import { useMyContext } from "./myContext";

export const Toggle: FC = () => {
  const { state, actions } = useMyContext();

  return (
    <>
      <BqSwitch
        name=""
        checked={state.toggle}
        onBqChange={(event) => {
          actions.set(event.detail.checked);
        }}
      />
    </>
  );
};
