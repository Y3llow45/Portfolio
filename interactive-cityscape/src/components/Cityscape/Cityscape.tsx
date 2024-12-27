import React from 'react';
import Building from '../Building/Building';

const Cityscape: React.FC = () => {
  return (
    <div className="cityscape">
      <img src="/images/clouds1.png" alt="cloud" className="cloud" style={{ animationDelay: '0s' }} />
      <img src="/images/clouds2.png" alt="cloud" className="cloud" style={{ animationDelay: '2s' }} />
      <img src="/images/clouds3.png" alt="cloud" className="cloud" style={{ animationDelay: '4s' }} />
      <img src="/images/clouds4.png" alt="cloud" className="cloud" style={{ animationDelay: '6s' }} />
      <img src="/images/clouds5.png" alt="cloud" className="cloud" style={{ animationDelay: '8s' }} />
      <img src="/images/clouds6.png" alt="cloud" className="cloud" style={{ animationDelay: '10s' }} />
      <img src="/images/clouds7.png" alt="cloud" className="cloud" style={{ animationDelay: '12s' }} />
      <img src="/images/clouds8.png" alt="cloud" className="cloud" style={{ animationDelay: '14s' }} />
      <img src="/images/clouds9.png" alt="cloud" className="cloud" style={{ animationDelay: '16s' }} />
      <Building label="Front-End" imageSrc="/images/frontend.png" />
      <Building label="Back-End" imageSrc="/images/backend.png" />
      <Building label="Cybersecurity" imageSrc="/images/cybersecurity.png" />
      <Building label="DevOps" imageSrc="/images/devops.png" />
    </div>
  );
};

export default Cityscape;
