import type { FC } from "react";
import { Fixed } from "./Fixed";
import { Stale } from "./Stale";

export const UseState: FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <Stale />
      <Fixed />
    </div>
  );
};
