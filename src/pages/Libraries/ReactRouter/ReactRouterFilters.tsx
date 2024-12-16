import { BqOption, BqSelect } from "@beeq/react";
import { type FC, useMemo } from "react";
import { todos, useReactRouterFilters } from "./utils";

export const ReactRouterFilters: FC = () => {
  const tags = useMemo(
    () => [...new Set(todos.flatMap(({ tags }) => tags))],
    [],
  );
  const [filters, setFilters] = useReactRouterFilters();

  return (
    <>
      <BqSelect
        name=""
        multiple
        value={JSON.stringify(filters ?? [])}
        onBqSelect={(event) => {
          setFilters(event.detail.value as string[]);
        }}
      >
        <span slot="label">Filter by tags</span>
        {tags.map((tag) => (
          <BqOption key={tag} value={tag}>
            {tag}
          </BqOption>
        ))}
      </BqSelect>
    </>
  );
};
