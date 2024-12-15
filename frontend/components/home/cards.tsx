import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import {ProjectCardData} from "@/components/projects";
import projects from "@/components/projects";
import FillCardSkills from "@/components/card-skills";
import useDeviceType from "@/components/useDeviceType";
import AddArrows from "@/components/swiper-arrows";
import SwiperContainer from "@/components/swiper-container";

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
    const {isMobile, isTablet} = useDeviceType();

    return (
        SwiperContainer(isMobile, isTablet, Card, projects)
    )
}

export default Cards;