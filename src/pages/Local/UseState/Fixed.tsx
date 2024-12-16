import { BqButton } from "@beeq/react";
import { type FC, useState } from "react";

export const Fixed: FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <div style={{ flex: 1 }}>
      <h2>Fixed</h2>
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
