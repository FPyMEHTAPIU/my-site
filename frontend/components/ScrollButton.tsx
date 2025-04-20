import { useEffect, useState } from "react";
import calculateContainerSize from "@/composables/calculateContainerSize";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { isMobile, isTablet } = calculateContainerSize();

  const ScrollToTop = () => {
    if (!window) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (!window) return;
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else setIsVisible(false);
  };

  useEffect(() => {
    addEventListener("scroll", handleScroll);
  }, []);

  return !isMobile && !isTablet ? (
    <button
      className="arrow-round scroll-button"
      id="scroll-button"
      onClick={ScrollToTop}
      style={{ visibility: isVisible ? "visible" : "hidden" }}
    >
      <img
        src="/arrows/arrow_up_white32.svg"
        alt="arrow up"
        loading="lazy"
        className="arrow"
      />
    </button>
  ) : (
    <></>
  );
};

export default ScrollButton;
