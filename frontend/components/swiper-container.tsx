import {Swiper} from "swiper/react";
import {Navigation, Pagination, Scrollbar} from "swiper/modules";
import AddArrows from "@/components/swiper-arrows";

const SwiperContainer = (
    isMobile: boolean,
    isTablet: boolean,
    Card:any,
    projects:any,
    setActiveIndex:any
) => {
    const setSlideIndex = (swiper:any) => {
        if (setActiveIndex === null)
            return ;
        setActiveIndex(swiper.activeIndex);
    }

    return (
        <div className="cards-control-block">
            <Swiper
                slidesPerView="auto"
                slidesOffsetBefore={!isMobile && typeof window !== 'undefined' ?
                    (isTablet ? ((document.documentElement.clientWidth - 690) / 2)
                        : ((document.documentElement.clientWidth - 1290) / 2)) : 0
                }
                centeredSlides={isMobile}
                centerInsufficientSlides={true}
                spaceBetween={isMobile ? 8 : (isTablet ? 20 : 30)}
                onSlideChange={setSlideIndex}
                modules={[Navigation, Pagination, Scrollbar]}
                navigation={{
                    prevEl: '.arrow-round.left',
                    nextEl: '.arrow-round.right'
                }}
                pagination={{
                    dynamicBullets: true, clickable: true,
                    el: ".pagination-block",
                    bulletClass: "dot", bulletActiveClass: "dot-filled"
                }}
                scrollbar={{draggable: true}}
                className="cards-control-block"
            >
                {AddArrows(isMobile, isTablet)}
                {projects.map((project: any) => (
                    Card(project)
                ))}
            </Swiper>
            <div className="pagination-block"></div>
        </div>
    )
}

export default SwiperContainer;