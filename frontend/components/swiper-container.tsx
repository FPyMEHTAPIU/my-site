import {Swiper, SwiperRef, SwiperClass} from "swiper/react";
import {Navigation, Pagination, Scrollbar} from "swiper/modules";
import AddArrows from "@/components/swiper-arrows";
import React, {RefObject, useState} from "react";
import {ProjectCardData} from "@/components/projects";

const SwiperContainer = () => {
    const setPaginationIndex = (
        swiper: SwiperClass,
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
        const activeBulletIndex = Array.from(bullets).findIndex((bullet: HTMLElement) => {
            const pagination = swiper.params.pagination;

            if (pagination && typeof pagination !== 'boolean') {
                const bulletActiveClass = pagination.bulletActiveClass;

                if (bulletActiveClass) {
                    return bullet.classList.contains(bulletActiveClass);
                }
            }

            return false;
        });

        setIsLastSlide(activeBulletIndex >= totalBullets - 1);
    }

    const setSlideIndex = (
        swiper: SwiperClass,
        setActiveIndex: ((activeIndex:number) => void) | null,
        setIsFirstSlide: (isFirstSlide:boolean) => void,
        setIsLastSlide: (isLastSlide:boolean) => void
    ) => {
        if (setActiveIndex !== null)
            setActiveIndex(swiper.activeIndex);
        setIsFirstSlide(swiper.isBeginning);
        setIsLastSlide(swiper.isEnd);
    }

    const cardChooser = (
        projects: ProjectCardData[] | string[],
        projectCard: ((project: ProjectCardData, index: number) => React.JSX.Element) | null,
        imageCard: ((img_src:string, index:number) => React.JSX.Element) | null,
    ) => {
        return (
                projects && Array.isArray(projects) && projects.length > 0 ? (
                projects.map((project, index) => {
                    if (typeof project === 'string' && imageCard) {
                        return imageCard(project, index);
                    } else if (projectCard) {
                        return projectCard(project as ProjectCardData, index);
                    }
                })
            ) : (
                <></>
            )
        )
    };

    const SwiperDefault = (
        isMobile: boolean,
        isTablet: boolean,
        isDesktop1440: boolean,
        projectCard: ((project: ProjectCardData, index: number) => React.JSX.Element) | null,
        imageCard: ((img_src:string, index:number) => React.JSX.Element) | null,
        projects: ProjectCardData[] | string[],
        setActiveIndex: ((activeIndex:number) => void) | null,
        swiperRef: RefObject<SwiperRef>,
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
                    ref={swiperRef}
                    parallax={true}
                >
                    {AddArrows(isMobile, isTablet, false, isFirstSlide, isLastSlide, false, '')}
                    {cardChooser(projects, projectCard, imageCard)}
                </Swiper>
                <div className={"pagination-block " + paginationId}></div>
            </div>
        )
    }

    const SwiperImageDesktopHorizontal = (
        isMobile: boolean,
        isTablet: boolean,
        projectCard: ((project: ProjectCardData, index: number) => React.JSX.Element) | null,
        imageCard: ((img_src:string, index:number) => React.JSX.Element) | null,
        projects: ProjectCardData[] | string[],
        setActiveIndex: ((activeIndex:number) => void) | null,
        swiperRef: RefObject<SwiperRef>
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
                parallax={true}
                ref={swiperRef}
            >
                {AddArrows(isMobile, isTablet, true, isFirstSlide, isLastSlide, false, "")}
                {cardChooser(projects, projectCard, imageCard)}
            </Swiper>
        )
    }

    const SwiperImageDesktopVertical = (
        isMobile: boolean,
        isTablet: boolean,
        projectCard: ((project: ProjectCardData, index: number) => React.JSX.Element) | null,
        imageCard: ((img_src:string, index:number) => React.JSX.Element) | null,
        projects: ProjectCardData[] | string[],
        setActiveIndex: ((activeIndex:number) => void) | null,
        swiperRef: RefObject<SwiperRef>,
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
                    ref={swiperRef}
                    parallax={true}
                >
                    {cardChooser(projects, projectCard, imageCard)}
                </Swiper>
                {arrowClass !== 'remove' &&
                    AddArrows(isMobile, isTablet, true, isFirstSlide, isLastSlide, isImgGradient, arrowClass)}
            </div>
        )
    }

    return {SwiperDefault, SwiperImageDesktopHorizontal, SwiperImageDesktopVertical}
}

export default SwiperContainer;