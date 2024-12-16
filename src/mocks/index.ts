import { http, HttpResponse, delay } from "msw";
import { setupWorker } from "msw/browser";

let todos: {
  id: string;
  title: string;
  description: string;
  status: "pending" | "done";
}[] = [
  {
    id: "1",
    title: "Buy milk",
    description: "Get that awesome brand of milk",
    status: "pending",
  },
  {
    id: "2",
    title: "Buy coffee",
    description: "Get that awesome brand of coffee",
    status: "done",
  },
  {
    id: "3",
    title: "Buy bread",
    description: "Get that awesome brand of coffee",
    status: "pending",
  },
];

const handlers = [
  http.get("/api/todos/statuses", async () => {
    await delay();
    return HttpResponse.json(["pending", "done"]);
  }),
  http.get("/api/todos", async () => {
    await delay(todos.length * 1500);
    return HttpResponse.json(todos);
  }),
  http.get("/api/todos/:id", async ({ params }) => {
    await delay();
    return HttpResponse.json(
      todos.find((todo) => todo.id === params.id) ?? null,
    );
  }),
  http.put("/api/todos/:id", async ({ request, params }) => {
    const body = (await request.json()) as { status: "pending" | "done" };
    todos = todos.map((todo) => {
      if (todo.id === params.id) {
        return { ...todo, ...body };
      }
      return todo;
    });
    await delay();
    return HttpResponse.json(
      todos.find((todo) => todo.id === params.id) ?? null,
    );
  }),
];

export const worker = setupWorker(...handlers);
