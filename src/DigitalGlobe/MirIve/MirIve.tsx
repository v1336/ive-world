import React from 'react';
import './MirIve.css';

interface MirIveProps {
  text?: string;
  backgroundColor?: string;
  textColor?: string;
}

const MirIve: React.FC<MirIveProps> = ({
  text = 'Мир ИВЭ',
  backgroundColor = '#f6f9ff80',
  textColor = '#000f7f'
}) => {
  return (
    <div className="mir-ive-container" style={{ backgroundColor }}>
      <span className="mir-ive-text" style={{ color: textColor }}>
        {text}
      </span>
    </div>
  );
};

export default MirIve;

