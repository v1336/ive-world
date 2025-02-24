import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import IVE50Service from "./IVE50Service";
import OnlineService from "./OnlineService";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IVE50Service />
    <OnlineService />
  </StrictMode>
);
