import { BqButton, BqDialog } from "@beeq/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { FC } from "react";
import { editTodoStatus, queryTodos, queryTodosStatuses } from "./api";

export interface ReactQueryChangeStatusProps {
  todo: {
    id: string;
    title: string;
    description: string;
    status: "pending" | "done";
  } | null;
  onClose: () => void;
}

export const ReactQueryChangeStatus: FC<ReactQueryChangeStatusProps> = ({
  todo,
  onClose,
}) => {
  const queryClient = useQueryClient();

  const { data: statuses = [] } = useQuery({
    queryFn: queryTodosStatuses,
    queryKey: queryTodosStatuses.queryKey(),
  });

  const { mutate } = useMutation({
    mutationFn: editTodoStatus,
    mutationKey: editTodoStatus.mutationKey(),
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: queryTodos.queryKey() });

      const todos = queryClient.getQueriesData<
        Awaited<ReturnType<typeof queryTodos>>
      >({
        queryKey: queryTodos.queryKey(),
      });

      queryClient.setQueriesData<Awaited<ReturnType<typeof queryTodos>>>(
        { queryKey: queryTodos.queryKey() },
        (old) =>
          old.map((todo) => {
            if (todo.id !== data.id) {
              return todo;
            }
            return { ...todo, status: data.status };
          }),
      );

      onClose();

      return todos;
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: queryTodos.queryKey() });
    },
  });

  return (
    <>
      <BqDialog open={Boolean(todo)} onBqCancel={onClose}>
        <span slot="title">{todo?.title}</span>
        <span>{todo?.description}</span>
        <div slot="footer" style={{ display: "flex", gap: 8 }}>
          {statuses.map((status) => (
            <BqButton
              key={status}
              appearance={status === "done" ? "primary" : "secondary"}
              disabled={todo?.status === status}
              onClick={() => {
                mutate({ id: todo.id, status });
              }}
            >
              {status}
            </BqButton>
          ))}
        </div>
      </BqDialog>
    </>
  );
};
