import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const desktopImage = "./images/bg-header-desktop.svg";
  const mobileImage = "./images/bg-header-mobile.svg";

  useEffect(() => {
    const handleResize = () => {
      const isMobileViewport = window.innerWidth <= 768; // Adjust breakpoint as needed
      setIsMobile(isMobileViewport);
    };

    window.addEventListener('resize', handleResize);

    handleResize(); // Check initial viewport size

    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  return (
    <>
      <img
        src={isMobile ? mobileImage : desktopImage}
        alt=""
        style={{ width: '100%' }}
      />
    </>
  );
};

export default Hero;
