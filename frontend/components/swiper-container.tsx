import {Swiper} from "swiper/react";
import {Navigation, Pagination, Scrollbar} from "swiper/modules";
import AddArrows from "@/components/swiper-arrows";

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
        setActiveIndex:any,
        swiperRef:any,
        paginationId:string
    ) => {
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
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    {AddArrows(isMobile, isTablet)}
                    {projects.map((project: any) => (
                        Card(project)
                    ))}
                </Swiper>
                <div className={"pagination-block " + paginationId}></div>
            </div>
        )
    }

    return {SwiperDefault}
}

export default SwiperContainer;