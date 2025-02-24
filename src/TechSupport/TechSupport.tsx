import React from "react";
import "./TechSupport.css";

interface TechSupportProps {
  phoneNumber?: string;
  email?: string;
  title?: string;
  supportText?: string;
}

export const TechSupport: React.FC<TechSupportProps> = ({
  phoneNumber = "+7 (800) 222 38 27",
  email = "ws@v-1336.ru",
  title = "Техподдержка",
  supportText = "Единый номер технической поддержки:",
}) => {
  return (
    <div className="tech-support">
      <img
        src="https://dashboard.codeparrot.ai/api/image/Z7x_JUdFGv3G61oE/subtract.png"
        alt="background-top"
        className="background-top"
      />
      <div className="upper-section">
        <h1 className="title">{title}</h1>
        <p className="support-text">{supportText}</p>
        <div className="phone-container">
          <span className="phone-number">{phoneNumber}</span>
          <img
            src="https://dashboard.codeparrot.ai/api/image/Z7x_JUdFGv3G61oE/outline.png"
            alt="phone"
            className="phone-icon"
          />
        </div>
        <button className="action-button call-button">Позвонить</button>
      </div>

      <img
        src="https://dashboard.codeparrot.ai/api/image/Z7x_JUdFGv3G61oE/subtract-2.png"
        alt="background-bottom"
        className="background-bottom"
      />
      <div className="lower-section">
        <img
          src="https://dashboard.codeparrot.ai/api/image/Z7x_JUdFGv3G61oE/outline-2.png"
          alt="email"
          className="email-icon"
        />
        <div className="email-container">
          <p className="email-label">E-mail:</p>
          <p className="email-address">{email}</p>
        </div>
        <button className="action-button write-button">Написать</button>
      </div>
    </div>
  );
};

export default TechSupport;
