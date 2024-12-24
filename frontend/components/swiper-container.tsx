import {Swiper} from "swiper/react";
import {Navigation, Pagination, Scrollbar} from "swiper/modules";
import AddArrows from "@/components/swiper-arrows";
import {useState} from "react";

const SwiperContainer = () => {
    const setPaginationIndex = (
        swiper:any,
        setActiveIndex:any,
        setIsFirstSlide:any,
        setIsLastSlide:any
    ) => {
        if (setActiveIndex === null)
            return ;
        setActiveIndex(swiper.activeIndex);
        setIsFirstSlide(swiper.activeIndex === 0);

        const bullets = swiper.pagination.bullets;
        const totalBullets = bullets.length;
        const activeBulletIndex = Array.from(bullets).findIndex((bullet: any) =>
            bullet.classList.contains(swiper.params.pagination.bulletActiveClass));

        setIsLastSlide(activeBulletIndex >= totalBullets - 1);
    }

    const setSlideIndex = (
        swiper:any,
        setActiveIndex:any,
        projects:any,
        setIsFirstSlide:any,
        setIsLastSlide:any
    ) => {
        if (setActiveIndex !== null)
            setActiveIndex(swiper.activeIndex);

        console.log(swiper.isBeginning)
        console.log(swiper.isEnd)
        setIsFirstSlide(swiper.isBeginning);
        setIsLastSlide(swiper.isEnd);
    }

    const SwiperDefault = (
        isMobile: boolean,
        isTablet: boolean,
        isDesktop1440: boolean,
        Card:any,
        projects:any,
        setActiveIndex:any,
        swiperRef:any,
        paginationId:string
    ) => {
        const [isFirstSlide, setIsFirstSlide] = useState<boolean>(true);
        const [isLastSlide, setIsLastSlide] = useState<boolean>(false);

        return (
            <div className="cards-control-block">
                <Swiper
                    slidesPerView="auto"
                    slidesOffsetBefore={!isMobile && typeof window !== 'undefined' ?
                        (isTablet ? 15 : (isDesktop1440 ? 75 : 140)) : 0
                    }
                    centeredSlides={isMobile}
                    centerInsufficientSlides={true}
                    spaceBetween={isMobile ? 8 : (isTablet ? 20 : 30)}
                    onPaginationUpdate={(swiper) => setPaginationIndex(
                        swiper, setActiveIndex, setIsFirstSlide, setIsLastSlide
                    )}
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
        setActiveIndex:any,
        swiperRef:any
    ) =>
    {
        const [isFirstSlide, setIsFirstSlide] = useState<boolean>(true);
        const [isLastSlide, setIsLastSlide] = useState<boolean>(false);

        return (
            <Swiper
                slidesPerView={1}
                centeredSlides={true}
                centerInsufficientSlides={true}
                onSlideChange={(swiper) => setSlideIndex(
                    swiper, setActiveIndex, projects, setIsFirstSlide, setIsLastSlide
                )}
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

    const SwiperImageDesktopVertical = (
        isMobile: boolean,
        isTablet: boolean,
        Card:any,
        projects:any,
        setActiveIndex:any,
        swiperRef:any
    ) =>
    {
        const [isFirstSlide, setIsFirstSlide] = useState<boolean>(true);
        const [isLastSlide, setIsLastSlide] = useState<boolean>(false);

        return (
            <Swiper
                slidesPerView={2}
                spaceBetween={isTablet ? 20 : 30}
                onSlideChange={(swiper) => setSlideIndex(
                    swiper, setActiveIndex, projects, setIsFirstSlide, setIsLastSlide
                )}
                modules={[Navigation, Scrollbar]}
                navigation={{
                    prevEl: '.arrow-round.left.no-margin',
                    nextEl: '.arrow-round.right.no-margin'
                }}
                scrollbar={{draggable: true}}
                className="vertical-card-container"
                onSwiper={(swiper) => {swiperRef.current = swiper}}
            >
                {AddArrows(isMobile, isTablet, true, isFirstSlide, isLastSlide)}
                {projects.map((project: any) => (
                    Card(project)
                ))}
            </Swiper>
        )
    }

    return {SwiperDefault, SwiperImageDesktopHorizontal, SwiperImageDesktopVertical}
}

export default SwiperContainer;