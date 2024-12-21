import { SwiperSlide } from 'swiper/react';
import {ProjectCardData} from "@/components/projects";
import projects from "@/components/projects";
import FillCardSkills from "@/components/card-skills";
import useDeviceType from "@/components/useDeviceType";
import SwiperContainer from "@/components/swiper-container";
import {useRef, useState} from "react";

const Card = (
    project: ProjectCardData
    ) => {
    return (
        <SwiperSlide className="project-card">
            <a href={project.projectLink} className="project-card">
                <img className="project-photo" src={project.projectPhoto} alt="project photo"/>
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
    const {isMobile, isTablet} = useDeviceType();
    const swiperRefMain = useRef(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        SwiperDefault(isMobile, isTablet, Card, projects, setActiveIndex, swiperRefMain, 'main')
    )
}

export default Cards;