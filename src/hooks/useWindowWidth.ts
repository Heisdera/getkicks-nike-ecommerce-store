import { useEffect, useState } from "react";

export function useWindowWidth() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      console.log(width);

      if (width >= 768 && width < 1024) {
        setIsTablet(true);
        setIsDesktop(false);
      } else {
        setIsDesktop(false);
        setIsTablet(false);
      }

      if (width >= 375 && width < 768) {
        setIsMobile(true);
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

  console.log({ isMobile, isTablet, isDesktop });

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
}
