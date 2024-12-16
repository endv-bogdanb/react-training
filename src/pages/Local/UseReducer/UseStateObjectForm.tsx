import { BqInput } from "@beeq/react";
import { type FC, useState } from "react";

interface FormState {
  firstName: string;
  lastName: string;
}

export const UseStateObjectForm: FC = () => {
  const [state, setState] = useState<FormState>({
    firstName: "",
    lastName: "",
  });

  const onChange = (property: keyof typeof state, value: string) => {
    setState((prev) => ({ ...prev, [property]: value }));
  };

  return (
    <div style={{ flex: 1 }}>
      <form>
        <h2>Object state</h2>
        <BqInput
          name="firstName"
          value={state.firstName}
          onBqInput={(event) => {
            onChange("firstName", `${event.detail.value}`);
          }}
        >
          <span slot="label">First Name</span>
        </BqInput>
        <BqInput
          name="lastName"
          value={state.lastName}
          onBqInput={(event) => {
            onChange("lastName", `${event.detail.value}`);
          }}
        >
          <span slot="label">Last Name</span>
        </BqInput>
      </form>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};
