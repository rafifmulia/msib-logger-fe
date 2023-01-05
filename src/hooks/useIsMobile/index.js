import { useState, useEffect } from "react";

function useIsMobile() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
   setWidth(window.innerWidth);
  }
  
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);
  
  const isMobile = width <= 768;

  return isMobile;
}

export default useIsMobile;

// https://stackoverflow.com/questions/39435395/reactjs-how-to-determine-if-the-application-is-being-viewed-on-mobile-or-deskto
// https://reactjs.org/docs/hooks-overview.html
