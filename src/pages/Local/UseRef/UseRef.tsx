import { BqButton } from "@beeq/react";
import { type FC, useRef, useState } from "react";

export const UseRef: FC = () => {
  const ref = useRef(0);
  const [, update] = useState({});
  return (
    <>
      <div>{ref.current}</div>
      <BqButton
        onBqClick={() => {
          ref.current += 1;
        }}
      >
        +1 ref
      </BqButton>
      <BqButton
        onBqClick={() => {
          update({});
        }}
      >
        Force update
      </BqButton>
    </>
  );
};
