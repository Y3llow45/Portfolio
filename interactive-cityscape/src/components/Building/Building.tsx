import React from 'react';

interface BuildingProps {
  label: string;
}

const Building: React.FC<BuildingProps> = ({ label }) => {
  return (
    <div className="building">
      {/* The label for the building */}
      <div className="building-body"></div>
      <div className="building-label">{label}</div>
    </div>
  );
};

export default Building;
