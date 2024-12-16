import "./index.css";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { worker } from "./mocks";

const container = document.getElementById("app");
const root = createRoot(container);

worker.start().then(() => root.render(<App />));
