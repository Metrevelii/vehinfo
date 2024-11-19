import { useState, useEffect } from 'react';

const useBreakpoint = (widthBreakpoint = 768) => {
  const [breakpoint, setBreakpoint] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= widthBreakpoint);

  const resize = () => {
    setBreakpoint(window.innerWidth);
    setIsMobile(window.innerWidth <= widthBreakpoint);
  };

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();  
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [widthBreakpoint]);

  return { breakpoint, isMobile };
};

export default useBreakpoint;