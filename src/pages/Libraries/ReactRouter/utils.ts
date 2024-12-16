import {
  type NavigateOptions,
  useLocation,
  useNavigate,
} from "react-router-dom";

export interface Todo {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export const todos: Todo[] = [
  {
    id: "1",
    title: "Javascript",
    description:
      "JavaScript is a scripting or programming language that allows you to implement complex features on web pages.",
    tags: ["web"],
  },
  {
    id: "2",
    title: "Typescript",
    description:
      "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    tags: ["web", "backend"],
  },
  {
    id: "3",
    title: "Python",
    description:
      "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics",
    tags: ["backend"],
  },
  {
    id: "4",
    title: "Java",
    description:
      "Java is a programming language and computing platform first released by Sun Microsystems in 1995",
    tags: ["backend"],
  },
] as const;

export const useReactRouterFilters = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const changeFilters = (
    filters?: Todo["tags"],
    options?: Omit<NavigateOptions, "state">,
  ) => {
    navigate("/libraries/react-router", {
      state: filters,
      replace: true,
      ...options,
    });
  };

  return [location.state ?? [], changeFilters] as const;
};
