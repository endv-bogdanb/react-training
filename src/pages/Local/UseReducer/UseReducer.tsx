import type { FC } from "react";
import { UseReducerForm } from "./UseReducerForm";
import { UseStateForm } from "./UseStateForm";
import { UseStateObjectForm } from "./UseStateObjectForm";

export const UseReducer: FC = () => {
  return (
    <div style={{ display: "flex", gap: 32, marginInline: 8 }}>
      <UseStateForm />
      <UseStateObjectForm />
      <UseReducerForm />
    </div>
  );
};
