import { type FC, useMemo } from "react";
import { Link } from "react-router-dom";
import { ReactRouterFilters } from "./ReactRouterFilters";
import { todos, useReactRouterFilters } from "./utils";

export const ReactRouter: FC = () => {
  const [filters] = useReactRouterFilters();

  const list = useMemo(() => {
    if (filters.length === 0) {
      return todos;
    }
    return todos.filter((todo) =>
      todo.tags.some((tag) => filters.includes(tag)),
    );
  }, [filters]);

  return (
    <>
      <ReactRouterFilters />
      <ol>
        {list.map((todo) => (
          <li key={todo.id}>
            <Link to={`${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ol>
    </>
  );
};
