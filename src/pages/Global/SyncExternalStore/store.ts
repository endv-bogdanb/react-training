import type { TToastType } from "@beeq/core";
import { useSyncExternalStore } from "react";

export interface Alert {
  id: string;
  type: TToastType;
  message: string;
  time?: number;
}

let state: Alert[] = [];
const subscribers: Set<() => void> = new Set();

const handleSubscribers: Parameters<typeof useSyncExternalStore>[0] = (
  subscriber,
) => {
  subscribers.add(subscriber);
  return () => subscribers.delete(subscriber);
};

const getSnapshot = () => state;
const getServerSnapshot = () => state;

// biome-ignore lint/complexity/noForEach:
const notify = () => subscribers.forEach((subscriber) => subscriber());

export const useNotifications = () =>
  useSyncExternalStore(handleSubscribers, getSnapshot, getServerSnapshot);

export const showAlert = (alert: Omit<Alert, "id">) => {
  state = state.concat({ id: crypto.randomUUID(), time: 3000, ...alert });
  notify();
};

export const hideAlert = (alert: Alert) => {
  state = state.filter((stateAlert) => stateAlert.id !== alert.id);
  notify();
};

// @ts-expect-error
window.showAlert = showAlert;
