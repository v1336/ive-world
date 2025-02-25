import React from "react";
import HeaderSection from "./HeaderSection/HeaderSection";
import ServiceSection from "./ServiceSection/ServiceSection";
import OnlineServiceSection from "./OnlineServiceSection/OnlineServiceSection";
import SupportSection from "./SupportSection/SupportSection";
import MaintenanceSection from "./MaintenanceSection/MaintenanceSection";
import MeasurementSection from "./MeasurementSection/MeasurementSection";

const Layout: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f6f9ff",
        alignItems: "center",
        padding: "20px 0",
        gap: "20px",
      }}
    >
      <HeaderSection />
      <ServiceSection />
      <OnlineServiceSection />
      <SupportSection />
      <MaintenanceSection />
      <MeasurementSection />
    </div>
  );
};

export default Layout;
