import { BqButton, BqDropdown, BqIcon, BqOption } from "@beeq/react";
import type { FC } from "react";

export const App: FC = () => {
  return (
    <>
      <BqDropdown>
        <BqButton slot="trigger">Hello world</BqButton>
        <BqOption>
          <BqIcon name="caret-down" slot="suffix" />a
        </BqOption>
      </BqDropdown>
    </>
  );
};
