import {SwiperSlide} from "swiper/react";

const imageSlides = () => {
    const imageSlideHorizontal = (img_src:string, index:number) => {
        return (
            <SwiperSlide key={index} className="horizontal-card">
                <img className="horizontal-card" src={img_src} loading="lazy" alt="image" />
            </SwiperSlide>
        )
    }

    const imageSlideVertical = (img_src:string, index:number) => {
        return (
            <SwiperSlide key={index} className="vertical-card">
                <img className="vertical-card" src={img_src} loading="lazy" alt="image" />
            </SwiperSlide>
        )
    }

    return {imageSlideHorizontal, imageSlideVertical}
}

export default imageSlides