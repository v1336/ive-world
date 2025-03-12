import React from "react";
import HeaderSection from "./Components/HeaderSection/HeaderSection";
import ServiceSection from "./Components/ServiceSection/ServiceSection";
import OnlineServiceSection from "./Components/OnlineServiceSection/OnlineServiceSection";
import SupportSection from "./Components/SupportSection/SupportSection";
import MaintenanceSection from "./Components/MaintenanceSection/MaintenanceSection";
import MeasurementSection from "./Components/MeasurementSection/MeasurementSection";
import styles from "./Layout.module.css";

// async function notifyUser() {
//   await Notification.requestPermission().then((permission) => {
//     if (permission === "granted") {
//       console.log("Enabling notifications");
//     } else if (permission === "denied") {
//       alert("Notifications is denied");
//     }
//   });
// }

function notifyUser() {
  if (!("Notification" in window)) {
    // Check if the browser supports notifications
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    // Check whether notification permissions have already been granted;
    // if so, create a notification
    const notification = new Notification("Hi there!");
    // …
  } else if (Notification.permission !== "denied") {
    // We need to ask the user for permission
    Notification.requestPermission().then((permission) => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        const notification = new Notification("Hi there!");
        // …
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them anymore.
}

const Layout: React.FC = () => {
  notifyUser();

  const buttonClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const notification = new Notification("Enabling notifications");
  };

  return (
    <div className={styles.layout}>
      <button onClick={buttonClick} className="button">
        Hello world.
      </button>
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
