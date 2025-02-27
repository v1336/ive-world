import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./Layout";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout />
  </StrictMode>
);
