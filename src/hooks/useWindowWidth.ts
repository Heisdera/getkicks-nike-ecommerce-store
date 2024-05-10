import { useEffect, useState } from "react";

export function useWindowWidth() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // console.log(width);

      // Laptop
      if (width >= 1024) {
        setIsDesktop(true);
        setIsTablet(false);
      }

      // Tablet
      if (width >= 768 && width < 1024) {
        setIsTablet(true);
        setIsDesktop(false);
      } else {
        setIsDesktop(false);
        setIsTablet(false);
      }

      // Mobile
      if (width >= 375 && width < 768) {
        setIsMobile(true);
        setIsTablet(false);
        setIsDesktop(false);
      }

      // Small Screen
      if (width <= 375) {
        setIsSmallScreen(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // console.log({ isMobile, isTablet, isDesktop });

  return {
    isSmallScreen,
    isMobile,
    isTablet,
    isDesktop,
  };
}
