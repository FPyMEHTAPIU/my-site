import React from "react";
import { SwiperSlide } from "swiper/react";

const imageSlides = () => {
  const imageSlideHorizontal = (
    img_src: string,
    index: number,
  ): React.JSX.Element => {
    return (
      <SwiperSlide key={index} className="horizontal-card">
        <img src={img_src} loading="lazy" alt="image" />
      </SwiperSlide>
    );
  };

  const imageSlideVertical = (
    img_src: string,
    index: number,
  ): React.JSX.Element => {
    return (
      <SwiperSlide key={index} className="vertical-card">
        <img src={img_src} loading="lazy" alt="image" />
      </SwiperSlide>
    );
  };

  return { imageSlideHorizontal, imageSlideVertical };
};

export default imageSlides;
