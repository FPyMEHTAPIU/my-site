import {SwiperSlide} from "swiper/react";

const imageSlides = () => {
    const imageSlideHorizontal = (img_src:string) => {
        return (
            <SwiperSlide className="horizontal-card">
                <img className="horizontal-card" src={img_src} loading="lazy" alt="image" />
            </SwiperSlide>
        )
    }

    const imageSlideVertical = (img_src:string) => {
        return (
            <SwiperSlide className="vertical-card">
                <img className="vertical-card" src={img_src} loading="lazy" alt="image" />
            </SwiperSlide>
        )
    }

    return {imageSlideHorizontal, imageSlideVertical}
}

export default imageSlides