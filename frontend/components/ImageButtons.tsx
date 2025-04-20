import { RefObject } from "react";
import { SwiperRef } from "swiper/react";

const FillImageButtons = (
  projectSkills: string[],
  activeIndex: number,
  setActiveIndex: (newIndex: number) => void,
  swiperRef: RefObject<SwiperRef>,
) => {
  const moveToSlide = (index: number) => {
    if (swiperRef.current?.swiper?.activeIndex !== index) {
      setActiveIndex(index);
      swiperRef.current?.swiper?.slideTo(index);
    }
  };

  return projectSkills.map((skill: string, index: number) => (
    <button
      key={index}
      className={
        index === activeIndex
          ? "skill project-skill body-small black tab-selected"
          : "skill project-skill tab body-small"
      }
      onClick={() => moveToSlide(index)}
    >
      {skill}
    </button>
  ));
};

export default FillImageButtons;
