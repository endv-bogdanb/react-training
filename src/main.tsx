import "./index.css";
import { getBasePath, setBasePath } from "@beeq/core";
import { createRoot } from "react-dom/client";
import { App } from "./App";

setBasePath("/svg");
console.log(getBasePath());

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);
