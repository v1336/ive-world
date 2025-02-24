import React from "react";
import "./IVE50Service.css";

interface IVE50ServiceProps {
  title?: string;
  description?: string;
  downloadText?: string;
}

const IVE50Service: React.FC<IVE50ServiceProps> = ({
  title = "IVE50Service",
  description = "Наше простое и удобное приложение для работы с программно-аппаратным комплексом ИВЭ-50",
  downloadText = "Доступно для скачивания в:",
}) => {
  return (
    <div className="ive50-service">
      <div className="text-container">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>

      <div className="buttons-container">
        <p className="download-text">{downloadText}</p>
        <button
          className="store-button nash-store"
          onClick={() => console.log("Nash Store clicked")}
        >
          <img
            src="https://dashboard.codeparrot.ai/api/image/Z7x3dlCHtJJZ6wKo/store-bu.png"
            alt="Nash Store"
            width="295"
            height="56"
          />
        </button>
        <button
          className="store-button app-store"
          onClick={() => console.log("App Store clicked")}
        >
          <img
            src="https://dashboard.codeparrot.ai/api/image/Z7x3dlCHtJJZ6wKo/store-bu-2.png"
            alt="App Store"
            width="295"
            height="56"
          />
        </button>
      </div>
    </div>
  );
};

export default IVE50Service;
