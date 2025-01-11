import { SwiperSlide } from 'swiper/react';
import {ProjectCardData} from "@/components/projects";
import projects from "@/components/projects";
import FillCardSkills from "@/components/card-skills";
import SwiperContainer from "@/components/swiper-container";
import React, {useRef, useState} from "react";
import calculateContainerSize from "@/components/calculateContainerSize";

const Card = (
    project: ProjectCardData,
    index: number
    ):React.JSX.Element => {
    return (
        <SwiperSlide className="project-card" key={index}>
            <a href={project.projectLink} className="project-card">
                <img className="project-photo" src={project.projectPhoto} loading="lazy" alt="project photo"/>
                <div className="content-block">
                    <h2>{project.projectName}</h2>
                    <div className="skills-block">
                        {FillCardSkills(project.projectSkills)}
                    </div>
                </div>
            </a>
        </SwiperSlide>
    )
}

const Cards = () => {
    const {SwiperDefault} = SwiperContainer();
    const {isMobile, isTablet, isDesktop1440} = calculateContainerSize();
    const swiperRefMain = useRef(null);
    const [, setActiveIndex] = useState<number>(0);

    return (
        SwiperDefault(isMobile, isTablet, isDesktop1440, Card, projects, setActiveIndex, swiperRefMain, 'main')
    )
}

export default Cards;