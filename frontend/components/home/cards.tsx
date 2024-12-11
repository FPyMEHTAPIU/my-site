import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import {ProjectCardData} from "@/components/projects";
import projects from "@/components/projects";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import useDeviceType from "@/components/useDeviceType";

const Card = (
    project: ProjectCardData
    ) => {
    const FillSkills = () => {
        return project.projectSkills.map((skill:string) => (
            <div className="skill project-skill">
                <p className="body-small">{skill}</p>
            </div>
        ))
    }

    return (
        <SwiperSlide className="project-card">
            <a href={project.projectLink} className="project-card">
                <img className="project-photo" src={project.projectPhoto} alt="project photo"/>
                <div className="content-block">
                    <h2>{project.projectName}</h2>
                    <div className="skills-block">
                        {FillSkills()}
                    </div>
                </div>
            </a>
        </SwiperSlide>
    )
}

const Cards = () => {
    const {isMobile, isTablet} = useDeviceType();

    return (
        <div className="cards-control-block">
            <Swiper
                slidesPerView="auto"
                slidesOffsetBefore={!isMobile && typeof window !== 'undefined' ?
                    (isTablet ? ((document.documentElement.clientWidth - 690) / 2)
                        : ((document.documentElement.clientWidth - 1290) / 2)) : 0
                }
                //loop={true} //???????
                centeredSlides={isMobile}
                centerInsufficientSlides={true}
                spaceBetween={isMobile ? 8 : (isTablet ? 20 : 30)}
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
                {!isMobile && (
                    <>
                        <button className="arrow-round left">
                            <img
                                src={isMobile ? "./arrows/arrow_left_white16.svg" :
                                    isTablet ? "./arrows/arrow_left_white24.svg" :
                                        "./arrows/arrow_left_white32.svg"}
                                alt="arrow left"
                                className="arrow"
                            />
                        </button>
                        <button className="arrow-round right">
                            <img
                                src={isMobile ? "./arrows/arrow_right_white16.svg" :
                                    isTablet ? "./arrows/arrow_right_white24.svg" :
                                        "./arrows/arrow_right_white32.svg"}
                                alt="arrow left"
                                className="arrow"
                            />
                        </button>
                    </>
                )}
                {projects.map((project: ProjectCardData) => (
                    Card(project)
                ))}
            </Swiper>
            <div className="pagination-block"></div>
        </div>
    )
}

export default Cards;