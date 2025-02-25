import React from 'react';
import './SupportSection.css';

interface SupportSectionProps {
  style?: React.CSSProperties;
}

const SupportSection: React.FC<SupportSectionProps> = ({ style }) => {
  return (
    <div className="support-section" style={style}>
      <h2 className="support-title">Техподдержка</h2>
      <p className="support-subtitle">Единый номер технической поддержки:</p>
      <p className="support-phone">+7 (800) 222 38 27</p>
      
      <button 
        className="support-button"
        onClick={() => window.location.href = 'tel:+78002223827'}
      >
        Позвонить
      </button>

      <p className="support-email">E-mail: ws@v-1336.ru</p>

      <button 
        className="support-button"
        onClick={() => window.location.href = 'mailto:ws@v-1336.ru'}
      >
        Написать
      </button>
    </div>
  );
};

SupportSection.defaultProps = {
  style: {
    flexGrow: 1,
    width: '100%',
    maxWidth: '295px',
    height: 'auto',
  }
};

export default SupportSection;

