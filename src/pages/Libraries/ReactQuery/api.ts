import type { QueryFunctionContext } from "@tanstack/react-query";

export async function queryTodosStatuses(
  ctx: QueryFunctionContext<ReturnType<typeof queryTodosStatuses.queryKey>>,
) {
  const response = await fetch("/api/todos/statuses", {
    signal: ctx.signal,
    method: "GET",
  });
  return (await response.json()) as ("pending" | "done")[];
}
queryTodosStatuses.queryKey = () => ["queryTodosStatuses"] as const;

export async function queryTodos(
  ctx: QueryFunctionContext<ReturnType<typeof queryTodos.queryKey>>,
) {
  const response = await fetch("/api/todos", {
    signal: ctx.signal,
    method: "GET",
  });
  return (await response.json()) as {
    id: string;
    title: string;
    description: string;
    status: "pending" | "done";
  }[];
}
queryTodos.queryKey = () => ["queryTodos"] as const;

export async function queryTodo(
  ctx: QueryFunctionContext<ReturnType<typeof queryTodo.queryKey>>,
) {
  const [, { id }] = ctx.queryKey;
  const response = await fetch(`/api/todos/${id}`, {
    signal: ctx.signal,
    method: "GET",
  });
  return (await response.json()) as {
    id: string;
    title: string;
    description: string;
    status: "pending" | "done";
  };
}
queryTodo.queryKey = (id: string) => ["queryTodo", { id }] as const;

export async function editTodoStatus(body: {
  id: string;
  status: "pending" | "done";
}) {
  const response = await fetch(`/api/todos/${body.id}`, {
    method: "PUT",
    body: JSON.stringify(body),
  });
  return (await response.json()) as {
    id: string;
    title: string;
    description: string;
    status: "pending" | "done";
  };
}
editTodoStatus.mutationKey = () => ["editTodoStatus"] as const;
