import {Swiper} from "swiper/react";
import {Navigation, Pagination, Scrollbar} from "swiper/modules";
import AddArrows from "@/components/swiper-arrows";
import {useState} from "react";
import {ProjectCardData} from "@/components/projects";

const SwiperContainer = () => {
    const setPaginationIndex = (
        swiper:any,
        setActiveIndex: ((activeIndex:number) => void) | null,
        setIsFirstSlide: (isFirstSlide:boolean) => void,
        setIsLastSlide: (isLastSlide:boolean) => void
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
        setActiveIndex: ((activeIndex:number) => void) | null,
        setIsFirstSlide: (isFirstSlide:boolean) => void,
        setIsLastSlide: (isLastSlide:boolean) => void
    ) => {
        if (setActiveIndex !== null)
            setActiveIndex(swiper.activeIndex);
        setIsFirstSlide(swiper.isBeginning);
        setIsLastSlide(swiper.isEnd);
    }

    const SwiperDefault = (
        isMobile: boolean,
        isTablet: boolean,
        isDesktop1440: boolean,
        Card:any,
        projects:ProjectCardData[]|string[],
        setActiveIndex: ((activeIndex:number) => void) | null,
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
                        (isTablet ? 15 : (isDesktop1440 ? 135 : 175)) : 0
                    }
                    centeredSlides={isMobile && !paginationId.includes('vertical')}
                    centerInsufficientSlides={!paginationId.includes('vertical')}
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
                        setTimeout(() => {
                            swiper.update();
                        }, 100);
                    }}
                    parallax={true}
                >
                    {AddArrows(isMobile, isTablet, false, isFirstSlide, isLastSlide, false, '')}
                    {projects.map((project: any, index:number) => (
                        Card(project, index)
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
        setActiveIndex: ((activeIndex:number) => void) | null,
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
                    swiper, setActiveIndex, setIsFirstSlide, setIsLastSlide
                )}
                modules={[Navigation, Scrollbar]}
                navigation={{
                    prevEl: '.arrow-round.left.no-margin',
                    nextEl: '.arrow-round.right.no-margin'
                }}
                scrollbar={{draggable: true}}
                className="horizontal-card-container"
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                parallax={true}
            >
                {AddArrows(isMobile, isTablet, true, isFirstSlide, isLastSlide, false, "")}
                {projects.map((project: any, index:number) => (
                    Card(project, index)
                ))}
            </Swiper>
        )
    }

    const SwiperImageDesktopVertical = (
        isMobile: boolean,
        isTablet: boolean,
        Card:any,
        projects:any,
        setActiveIndex: ((activeIndex:number) => void) | null,
        swiperRef:any,
        isImgGradient:boolean,
        arrowClass: string
    ) =>
    {
        const [isFirstSlide, setIsFirstSlide] = useState<boolean>(true);
        const [isLastSlide, setIsLastSlide] = useState<boolean>(false);

        return (
            <div className="vertical-control-block">
                <div className={"pagination-block " + arrowClass}></div>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={isTablet ? 20 : 30}
                    onSliderMove={(swiper) => setSlideIndex(
                        swiper, setActiveIndex, setIsFirstSlide, setIsLastSlide
                    )}
                    onSlideChange={(swiper) => setSlideIndex(
                        swiper, setActiveIndex, setIsFirstSlide, setIsLastSlide
                    )}
                    modules={[Navigation, Scrollbar]}
                    navigation={{
                        prevEl: arrowClass === 'first' ? '' :
                            `.arrow-round.left.no-margin.${arrowClass}`,
                        nextEl: arrowClass === 'first' ? '' :
                            `.arrow-round.right.no-margin.${arrowClass}`
                    }}
                    scrollbar={{draggable: true}}
                    className="vertical-card-container"
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper
                    }}
                    parallax={true}
                >
                    {projects.map((project: any, index: number) => (
                        Card(project, index)
                    ))}
                </Swiper>
                {arrowClass !== 'remove' &&
                    AddArrows(isMobile, isTablet, true, isFirstSlide, isLastSlide, isImgGradient, arrowClass)}
            </div>
        )
    }

    return {SwiperDefault, SwiperImageDesktopHorizontal, SwiperImageDesktopVertical}
}

export default SwiperContainer;