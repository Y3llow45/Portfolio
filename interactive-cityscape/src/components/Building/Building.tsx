import React from 'react';


interface BuildingProps {
  label: string;
  imageSrc: string;
  onClick: (label: string) => void;
  isActive?: boolean;
}

const Building: React.FC<BuildingProps> = ({ label, imageSrc, onClick, isActive = false }) => {
  return (
    <div
      className={`building ${isActive ? 'active' : ''}`}
      onClick={() => !isActive && onClick(label)}
    >
      <img src={imageSrc} alt={`${label} building`} className="building-image" />
      {!isActive && <div className="building-label">{label}</div>}
    </div>
  );
};

export default Building;
