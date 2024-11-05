import { useState, useEffect } from 'react';
import { isMobileDevice } from '../Components/utils/utils';

const useBreakpoint = (widthBreakpoint = 768) => {
    const [breakpoint, setBreakpoint] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(isMobileDevice() || window.innerWidth <= widthBreakpoint);
  
    const resize = () => {
      setBreakpoint(window.innerWidth);
      setIsMobile(isMobileDevice() || window.innerWidth <= widthBreakpoint);
    };
  
    useEffect(() => {
      window.addEventListener('resize', resize);
      resize(); // Initial check
      return () => {
        window.removeEventListener('resize', resize);
      };
    }, [widthBreakpoint]);
  
    return { breakpoint, isMobile };
  };

export default useBreakpoint;