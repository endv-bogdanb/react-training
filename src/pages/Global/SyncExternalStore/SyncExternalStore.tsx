import type { FC } from "react";
import { Alert } from "./Alert";
import { AlertNotification } from "./AlertNotification";

export const SyncExternalStore: FC = () => {
  return (
    <>
      <h2>Hello world</h2>
      <Alert />
      <AlertNotification />
    </>
  );
};
