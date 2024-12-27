import React from 'react';
import Building from '../Building/Building';

const Cityscape: React.FC = () => {
  return (
    <div className="cityscape">
      <img src="/images/clouds.png" alt="cloud" className="cloud" style={{ animationDelay: '0s' }} />
      <img src="/images/cloud2.jpg" alt="cloud" className="cloud" style={{ animationDelay: '10s' }} />
      <Building label="Front-End" imageSrc="/images/frontend.png" />
      <Building label="Back-End" imageSrc="/images/backend.png" />
      <Building label="Cybersecurity" imageSrc="/images/cybersecurity.png" />
      <Building label="DevOps" imageSrc="/images/devops.png" />
    </div>
  );
};

export default Cityscape;
