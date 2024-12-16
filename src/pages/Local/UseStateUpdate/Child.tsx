import { BqButton } from "@beeq/react";
import { type FC, useRef, useState } from "react";

export interface ChildProps {
  defaultCount: number;
}

export const Child: FC<ChildProps> = ({ defaultCount }) => {
  const prevCount = useRef(defaultCount);
  const [count, setCount] = useState(defaultCount);
  const [trending, setTrending] = useState("↕️");

  if (count !== prevCount.current) {
    setTrending(count > prevCount.current ? "⬆️" : "⬇️");
    prevCount.current = count;
  }

  return (
    <>
      <BqButton
        onBqClick={() => {
          setCount((count) => count - 1);
        }}
      >
        - 1
      </BqButton>
      {count} {trending}
      <BqButton
        onBqClick={() => {
          setCount((count) => count + 1);
        }}
      >
        + 1
      </BqButton>
    </>
  );
};
