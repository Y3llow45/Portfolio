import React from 'react';

interface BuildingProps {
  label: string;
  imageSrc: string;
}

const Building: React.FC<BuildingProps> = ({ label, imageSrc }) => {
  return (
    <div className="building">
      <img src={imageSrc} alt={label} className="building-image" />
      <div className="building-label">{label}</div>
    </div>
  );
};

export default Building;
