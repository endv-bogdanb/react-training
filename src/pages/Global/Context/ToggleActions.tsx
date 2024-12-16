import { BqButton } from "@beeq/react";
import type { FC } from "react";
import { useMyContextMethods } from "./myContext";

export const ToggleActions: FC = () => {
  console.log("ToggleActions ", Date.now());
  const { on, off, toggle } = useMyContextMethods();

  return (
    <div style={{ display: "flex", gap: 16 }}>
      <BqButton onBqClick={on}>ON</BqButton>
      <BqButton onBqClick={off}>OFF</BqButton>
      <BqButton onBqClick={toggle}>TOGGLE</BqButton>
    </div>
  );
};
