import type { FC } from "react";
import { Child } from "./Child";

export const UseStateUpdate: FC = () => {
  return (
    <>
      <Child defaultCount={0} />
    </>
  );
};
