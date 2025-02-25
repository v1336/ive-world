import React from "react";
import HeaderSection from "./Components/HeaderSection/HeaderSection";
import ServiceSection from "./Components/ServiceSection/ServiceSection";
import OnlineServiceSection from "./Components/OnlineServiceSection/OnlineServiceSection";
import SupportSection from "./Components/SupportSection/SupportSection";
import MaintenanceSection from "./Components/MaintenanceSection/MaintenanceSection";
import MeasurementSection from "./Components/MeasurementSection/MeasurementSection";
import styles from "./Layout.module.css";

const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
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
