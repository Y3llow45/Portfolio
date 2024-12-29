import React from 'react';

interface BuildingProps {
  label: string;
  imageSrc: string;
  onClick: (label: string, index: number) => void;
  index: number;
  isActive?: boolean;
}
const Building: React.FC<BuildingProps> = ({ label, imageSrc, onClick, index, isActive = false }) => {
  return (
    <div
      className={`building ${isActive ? 'active' : ''}`}
      onClick={() => !isActive && onClick(label, index)}
    >
      <img src={imageSrc} alt={`${label} building`} className="building-image" />
      {!isActive && <div className="building-label">{label}</div>}
    </div>
  );
};

export default Building;
