import {Swiper} from "swiper/react";
import {Navigation, Pagination, Scrollbar} from "swiper/modules";
import AddArrows from "@/components/swiper-arrows";
import {useEffect, useState} from "react";

const SwiperContainer = () => {
    const setSlideIndex = (
        swiper:any,
        setActiveIndex:any
    ) => {
        if (setActiveIndex === null)
            return ;
        setActiveIndex(swiper.activeIndex);
    }

    const SwiperDefault = (
        isMobile: boolean,
        isTablet: boolean,
        Card:any,
        projects:any,
        activeIndex:number,
        setActiveIndex:any,
        swiperRef:any,
        paginationId:string
    ) => {
        const [isFirstSlide, setIsFirstSlide] = useState(true);
        const [isLastSlide, setIsLastSlide] = useState(true);
        const [visibleSlides, setVisibleSlides] = useState<number>(1);

        useEffect(() => {
            setIsFirstSlide(activeIndex === 0);
            setVisibleSlides(swiperRef.current.slidesPerViewDynamic())
            setIsLastSlide(activeIndex + visibleSlides - 1 >= projects.length);
        }, [activeIndex])

        return (
            <div className="cards-control-block">
                <Swiper
                    slidesPerView="auto"
                    slidesOffsetBefore={!isMobile && typeof window !== 'undefined' ?
                        (isTablet ? 15 : 75) : 0
                    }
                    centeredSlides={isMobile}
                    centerInsufficientSlides={true}
                    spaceBetween={isMobile ? 8 : (isTablet ? 20 : 30)}
                    onSlideChange={() => setSlideIndex(swiperRef.current, setActiveIndex)}
                    modules={[Navigation, Pagination, Scrollbar]}
                    navigation={{
                        prevEl: '.arrow-round.left',
                        nextEl: '.arrow-round.right'
                    }}
                    pagination={{
                        dynamicBullets: true, clickable: true,
                        el: `.pagination-block.${paginationId}`,
                        bulletClass: "dot", bulletActiveClass: "dot-filled"
                    }}
                    scrollbar={{draggable: true}}
                    className="cards-control-block"
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper
                    }}
                >
                    {AddArrows(isMobile, isTablet, false, isFirstSlide, isLastSlide)}
                    {projects.map((project: any) => (
                        Card(project)
                    ))}
                </Swiper>
                <div className={"pagination-block " + paginationId}></div>
            </div>
        )
    }

    const SwiperImageDesktopHorizontal = (
        isMobile: boolean,
        isTablet: boolean,
        Card:any,
        projects:any,
        activeIndex:number,
        setActiveIndex:any,
        swiperRef:any
    ) =>
    {
        const [isFirstSlide, setIsFirstSlide] = useState(true);
        const [isLastSlide, setIsLastSlide] = useState(true);

        useEffect(() => {
            setIsFirstSlide(activeIndex === 0);
            setIsLastSlide(activeIndex === projects.length - 1);
        }, [activeIndex])

        return (
            <Swiper
                slidesPerView={1}
                centeredSlides={true}
                centerInsufficientSlides={true}
                onSlideChange={() => setSlideIndex(swiperRef.current, setActiveIndex)}
                modules={[Navigation, Scrollbar]}
                navigation={{
                    prevEl: '.arrow-round.left.no-margin',
                    nextEl: '.arrow-round.right.no-margin'
            }}
                scrollbar={{draggable: true}}
                className="horizontal-card-container"
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                {AddArrows(isMobile, isTablet, true, isFirstSlide, isLastSlide)}
                {projects.map((project: any) => (
                    Card(project)
                ))}
            </Swiper>
        )
    }
    return {SwiperDefault, SwiperImageDesktopHorizontal}
}

export default SwiperContainer;