import { BqButton } from "@beeq/react";
import type { FC } from "react";
import { showAlert } from "./store";

export const AlertNotification: FC = () => {
  return (
    <div>
      <BqButton
        onBqClick={() => {
          showAlert({ type: "success", message: "success" });
        }}
      >
        Success
      </BqButton>
    </div>
  );
};
