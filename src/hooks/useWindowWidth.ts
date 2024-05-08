import { useEffect, useState } from "react";

export function useWindowWidth() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 768 && width < 1024) {
        setIsTablet(true);
        setIsDesktop(false);
      } else {
        setIsDesktop(false);
        setIsTablet(false);
      }

      if (width < 375) {
        setIsSmallScreen(true);
        setIsTablet(false);
        setIsDesktop(false);
      }

      if (width >= 1024) {
        setIsDesktop(true);
        setIsTablet(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log({ isSmallScreen, isTablet, isDesktop });

  return {
    isSmallScreen,
    isTablet,
    isDesktop,
  };
}
