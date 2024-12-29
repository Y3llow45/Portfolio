import React, { useState } from 'react';
import Building from '../Building/Building';
import gsap from 'gsap';

const Cityscape: React.FC = () => {
  const [activeBuilding, setActiveBuilding] = useState<string | null>(null);

  const handleBuildingClick = (label: string, index: number) => {
    if (activeBuilding === label) {
      return;
    }

    gsap.to(".building", {
      opacity: 0,
      duration: 3,
    });

    gsap.to(".cloud", {
      opacity: 0,
      duration: 3,
    });

    gsap.to(`.building:nth-child(${index + 1})`, {
      x: -200,
      delay: index * 0.5,
      opacity: 1,
      duration: 0,
    });

    setActiveBuilding(label);
  };

  const handleGoBack = () => {
    gsap.to(".building", {
      x: 0,
      opacity: 1,
      duration: 2,
    });

    gsap.to(".cloud", {
      opacity: 0.6,
      duration: 2,
    });

    setActiveBuilding(null);
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
          {["FrontEnd", "BackEnd", "Cybersecurity", "DevOps"].map((label, index) => (
            <Building
              key={label}
              label={label}
              imageSrc={`/images/${label.toLowerCase()}.png`}
              onClick={handleBuildingClick}
              index={index}
            />
          ))}
        </>
      ) : (
        <>
          <Building
            label={activeBuilding}
            imageSrc={`/images/${activeBuilding.toLowerCase()}.png`}
            isActive={true}
            onClick={handleBuildingClick}
            index={0}
          />
          <div className="project-display">
            <h1>{activeBuilding} Projects</h1>
            <p>A lot of text will go here to describe your projects!</p>
            <button onClick={() => handleGoBack} className="reset-button">
              Go Back
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cityscape;
