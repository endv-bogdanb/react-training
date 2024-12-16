import { BqInput } from "@beeq/react";
import { type FC, useState } from "react";

export const UseStateForm: FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div style={{ flex: 1 }}>
      <form>
        <h2>Normal State</h2>
        <BqInput
          name="firstName"
          value={firstName}
          onBqInput={(event) => {
            setFirstName(`${event.detail.value}`);
          }}
        >
          <span slot="label">First Name</span>
        </BqInput>
        <BqInput
          name="lastName"
          value={lastName}
          onBqInput={(event) => {
            setLastName(`${event.detail.value}`);
          }}
        >
          <span slot="label">Last Name</span>
        </BqInput>
      </form>
      <pre>{JSON.stringify({ firstName, lastName }, null, 2)}</pre>
    </div>
  );
};
