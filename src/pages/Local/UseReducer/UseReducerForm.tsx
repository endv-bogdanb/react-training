import { BqInput } from "@beeq/react";
import { type FC, useReducer } from "react";

interface FormState {
  firstName: string;
  lastName: string;
}

export const UseReducerForm: FC = () => {
  const [state, setState] = useReducer(
    (prev: FormState, next: Partial<FormState>) => ({ ...prev, ...next }),
    { firstName: "", lastName: "" },
  );

  return (
    <div style={{ flex: 1 }}>
      <form>
        <h2>Reducer state</h2>
        <BqInput
          name="firstName"
          value={state.firstName}
          onBqInput={(event) => {
            setState({ firstName: `${event.detail.value}` });
          }}
        >
          <span slot="label">First Name</span>
        </BqInput>
        <BqInput
          name="lastName"
          value={state.lastName}
          onBqInput={(event) => {
            setState({ lastName: `${event.detail.value}` });
          }}
        >
          <span slot="label">Last Name</span>
        </BqInput>
      </form>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};
