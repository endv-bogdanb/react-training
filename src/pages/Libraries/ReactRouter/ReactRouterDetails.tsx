import { BqBadge, BqButton, BqCard } from "@beeq/react";
import { type FC, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { todos, useReactRouterFilters } from "./utils";

export const ReactRouterDetails: FC = () => {
  const navigate = useNavigate();
  const [, setFilters] = useReactRouterFilters();
  const { id } = useParams<{ id: string }>();
  const todo = useMemo(() => todos.find((todo) => todo.id === id), [id]);

  if (!todo) {
    return (
      <>
        <BqCard>
          <h2>Not Found</h2>
          <div>
            <BqButton appearance="text" onBqClick={() => navigate(-1)}>
              Go back
            </BqButton>
          </div>
        </BqCard>
      </>
    );
  }

  return (
    <>
      <BqCard>
        <h2>{todo.title}</h2>
        <div>{todo.description}</div>
        <div style={{ display: "flex", gap: 8 }}>
          {todo.tags.map((tag) => (
            <BqBadge key={tag}>{tag}</BqBadge>
          ))}
        </div>
        <div>
          <BqButton
            appearance="text"
            onBqClick={() => {
              setFilters(todo.tags, { replace: false });
              // navigate("..", { state: todo.tags });
            }}
          >
            Show similar
          </BqButton>
        </div>
      </BqCard>
    </>
  );
};
