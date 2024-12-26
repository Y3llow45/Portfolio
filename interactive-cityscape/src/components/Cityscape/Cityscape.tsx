import React from 'react';
import Building from '../Building/Building';

const Cityscape: React.FC = () => {
  return (
    <div className="cityscape">
      {/* Render 4 buildings */}
      <Building label="Front-End" />
      <Building label="Back-End" />
      <Building label="Cybersecurity" />
      <Building label="DevOps" />
    </div>
  );
};

export default Cityscape;
