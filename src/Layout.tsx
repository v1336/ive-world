import React, { useState } from "react";
import HeaderSection from "./Components/HeaderSection/HeaderSection";
import ServiceSection from "./Components/ServiceSection/ServiceSection";
import OnlineServiceSection from "./Components/OnlineServiceSection/OnlineServiceSection";
import SupportSection from "./Components/SupportSection/SupportSection";
import MaintenanceSection from "./Components/MaintenanceSection/MaintenanceSection";
import MeasurementSection from "./Components/MeasurementSection/MeasurementSection";
import styles from "./Layout.module.css";

function notifyUser() {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    new Notification("Hi there!");
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification("Hi there!");
      }
    });
  }
}

const Layout: React.FC = () => {
  notifyUser();

  const [userTimer, setUserTimer] = useState<number>(0);

  const buttonClick = (value: number) => {
    setTimeout(() => {
      new Notification("Enabling notifications");
    }, value * 1000);
  };

  return (
    <div className={styles.layout}>
      <button
        onClick={() => {
          buttonClick(userTimer);
        }}
        className="button"
      >
        notifications
      </button>
      <input
        type="number"
        value={userTimer}
        name="quantity"
        min="0"
        max="999"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={(e: any) => {
          setUserTimer(Number(e.target.value));
        }}
      ></input>
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
