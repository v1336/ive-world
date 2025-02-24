import React from "react";
import "./OnlineService.css";

interface OnlineServiceProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onRequestClick?: () => void;
}

const OnlineService: React.FC<OnlineServiceProps> = ({
  title = "Услуга онлайн",
  description = "Оставьте свой запрос на сайте www.ivelabs.ru, и наш специалист свяжется с вами в кратчайшие сроки!",
  buttonText = "Оставить запрос",
  onRequestClick = () => console.log("Request clicked"),
}) => {
  return (
    <div className="online-service">
      <div className="background-image"></div>
      <div className="content-container">
        <div className="text-content">
          <h1 className="title">{title}</h1>
          <p className="description">{description}</p>
        </div>
        <div className="bottom-section">
          <div className="group-image"></div>
          <button className="request-button" onClick={onRequestClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnlineService;
