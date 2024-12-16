import { BqButton } from "@beeq/react";
import { type FC, useState } from "react";

export const Stale: FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ flex: 1 }}>
      <h2>Stale</h2>
      <div>{count}</div>
      <BqButton onBqClick={increment}>+ 1</BqButton>
      <BqButton
        onBqClick={() => {
          increment();
          increment();
        }}
      >
        + 2
      </BqButton>
    </div>
  );
};
