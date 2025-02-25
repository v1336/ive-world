import React from "react";
import HeaderSection from "./HeaderSection/HeaderSection";
import ServiceSection from "./ServiceSection/ServiceSection";
import OnlineServiceSection from "./OnlineService/OnlineService";
import SupportSection from "./SupportSection/SupportSection";
import MaintenanceSection from "./MaintenanceSection/MaintenanceSection";
import MeasurementSection from "./MeasurementSection/MeasurementSection";
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
