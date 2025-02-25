import React from "react";
import "./DigitalGlobe.css";
import MirIve from "./MirIve/MirIve";

interface DigitalGlobeProps {
  imageUrl?: string;
  showCharts?: boolean;
}

const DigitalGlobe: React.FC<DigitalGlobeProps> = ({
  imageUrl = "https://dashboard.codeparrot.ai/api/image/Z7x_3ogrK1O5dGlE/group-10.png",
  showCharts = true,
}) => {
  return (
    <>
      <div className="digital-globe-container">
        <div className="globe-wrapper">
          <div
            className="globe-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div className="data-overlay">
              {showCharts && (
                <div className="chart-container">
                  <div className="chart chart-1" />
                  <div className="chart chart-2" />
                  <div className="chart chart-3" />
                </div>
              )}
              <div className="binary-stream">
                {Array(20)
                  .fill(0)
                  .map((_, idx) => (
                    <span
                      key={idx}
                      className="binary-digit"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      {Math.round(Math.random())}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <MirIve />
    </>
  );
};

export default DigitalGlobe;
