import { BqToast } from "@beeq/react";
import type { FC } from "react";
import { hideAlert, useNotifications } from "./store";

export const Alert: FC = () => {
  const alerts = useNotifications();

  return (
    <>
      {alerts.map((alert) => (
        <BqToast
          key={alert.id}
          type={alert.type}
          time={alert.time}
          open
          onBqHide={() => {
            hideAlert(alert);
          }}
        >
          {alert.message}
        </BqToast>
      ))}
    </>
  );
};
