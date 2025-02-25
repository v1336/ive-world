import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import IVE50Service from "./IVE50Service/IVE50Service";
import OnlineService from "./OnlineService/OnlineService";
import TechSupport from "./TechSupport/TechSupport";
import DigitalGlobe from "./DigitalGlobe/DigitalGlobe";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DigitalGlobe />
    <IVE50Service />
    <OnlineService />
    <TechSupport />
  </StrictMode>
);
