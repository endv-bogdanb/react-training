import { BqProgress, BqToast } from "@beeq/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { type FC, useEffect, useState } from "react";
import { ReactQueryChangeStatus } from "./ReactQueryChangeStatus";
import { queryTodos, queryTodosStatuses } from "./api";

export const ReactQuery: FC = () => {
  const queryClient = useQueryClient();

  const [todo, setTodo] = useState<{
    id: string;
    title: string;
    description: string;
    status: "pending" | "done";
  }>(null);

  const {
    data: todos = [],
    isLoading,
    isFetching,
  } = useQuery({
    queryFn: queryTodos,
    queryKey: queryTodos.queryKey(),
  });

  useEffect(() => {
    queryClient.prefetchQuery({
      queryFn: queryTodosStatuses,
      queryKey: queryTodosStatuses.queryKey(),
    });
  }, [queryClient]);

  return (
    <>
      {isLoading && <BqProgress indeterminate />}
      <ol>
        {todos.map((todo) => (
          // biome-ignore lint/a11y/useKeyWithClickEvents:
          <li
            key={todo.id}
            style={{ cursor: "pointer" }}
            onClick={() => setTodo(todo)}
          >
            {todo.status === "done" ? <s>{todo.title}</s> : todo.title}
          </li>
        ))}
      </ol>
      <ReactQueryChangeStatus todo={todo} onClose={() => setTodo(null)} />
      <BqToast
        open={isFetching && !isLoading}
        placement="bottom-center"
        type="loading"
        time={Number.MAX_SAFE_INTEGER}
      >
        Refreshing list ...
      </BqToast>
    </>
  );
};
