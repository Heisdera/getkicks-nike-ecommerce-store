import { useEffect, useState } from "react";

function useScroll() {
  const [isScrolling, setIsScrolling] = useState(false);

  function navScroll() {
    if (window.scrollY > 20) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", navScroll);

    return () => {
      window.removeEventListener("scroll", navScroll);
    };
  }, []);

  return { isScrolling };
}

export default useScroll;
