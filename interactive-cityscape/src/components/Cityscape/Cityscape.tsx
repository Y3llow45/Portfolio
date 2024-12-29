import React, { useState } from 'react';
import Building from '../Building/Building';

const Cityscape: React.FC = () => {
  const [activeBuilding, setActiveBuilding] = useState<string | null>(null);

  const handleBuildingClick = (label: string) => {
    if (activeBuilding === label) {
      setActiveBuilding(null);
    } else {
      setActiveBuilding(label);
    }
  };

  return (
    <div className="cityscape">
      {!activeBuilding && (
        <>
          <img src="/images/clouds1.png" alt="cloud" className="cloud cloud-one cloud-1" style={{ animationDelay: '0s' }} />
          <img src="/images/clouds2.png" alt="cloud" className="cloud cloud-one cloud-2" style={{ animationDelay: '1s' }} />
          <img src="/images/clouds3.png" alt="cloud" className="cloud cloud-one cloud-3" style={{ animationDelay: '3s' }} />
          <img src="/images/clouds4.png" alt="cloud" className="cloud cloud-one cloud-4" style={{ animationDelay: '3.5s' }} />
          <img src="/images/clouds5.png" alt="cloud" className="cloud cloud-one cloud-5" style={{ animationDelay: '4s' }} />
          <img src="/images/clouds6.png" alt="cloud" className="cloud cloud-one cloud-6" style={{ animationDelay: '6.4s' }} />
          <img src="/images/clouds7.png" alt="cloud" className="cloud cloud-one cloud-7" style={{ animationDelay: '8s' }} />
          <img src="/images/clouds8.png" alt="cloud" className="cloud cloud-one cloud-8" style={{ animationDelay: '9.4s' }} />
          <img src="/images/clouds9.png" alt="cloud" className="cloud cloud-one cloud-9" style={{ animationDelay: '11.7s' }} />

          <img src="/images/clouds1.png" alt="cloud" className="cloud cloud-two cloud-10" style={{ animationDelay: '0s' }} />
          <img src="/images/clouds2.png" alt="cloud" className="cloud cloud-two cloud-11" style={{ animationDelay: '2s' }} />
          <img src="/images/clouds3.png" alt="cloud" className="cloud cloud-two cloud-12" style={{ animationDelay: '2.5s' }} />
          <img src="/images/clouds4.png" alt="cloud" className="cloud cloud-two cloud-13" style={{ animationDelay: '4s' }} />
          <img src="/images/clouds5.png" alt="cloud" className="cloud cloud-two cloud-14" style={{ animationDelay: '5s' }} />
          <img src="/images/clouds6.png" alt="cloud" className="cloud cloud-two cloud-15" style={{ animationDelay: '6.5s' }} />
          <img src="/images/clouds7.png" alt="cloud" className="cloud cloud-two cloud-16" style={{ animationDelay: '8s' }} />
          <img src="/images/clouds8.png" alt="cloud" className="cloud cloud-two cloud-17" style={{ animationDelay: '9.7s' }} />
          <img src="/images/clouds9.png" alt="cloud" className="cloud cloud-two cloud-18" style={{ animationDelay: '11s' }} />
        </>
      )}
      
      {!activeBuilding ? (
        <>
          <Building label="Front-End" imageSrc="/images/frontend.png" onClick={handleBuildingClick} />
          <Building label="Back-End" imageSrc="/images/backend.png" onClick={handleBuildingClick} />
          <Building label="Cybersecurity" imageSrc="/images/cybersecurity.png" onClick={handleBuildingClick} />
          <Building label="DevOps" imageSrc="/images/devops.png" onClick={handleBuildingClick} />
        </>
      ) : (
        <>
          <Building
            label={activeBuilding}
            imageSrc={`/images/${activeBuilding.toLowerCase()}.png`}
            isActive={true}
            onClick={handleBuildingClick}
          />
          <div className="project-display">
            <h1>{activeBuilding} Projects</h1>
            <p>A lot of text will go here to describe your projects!</p>
            <button onClick={() => setActiveBuilding(null)} className="reset-button">
              Go Back
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cityscape;
