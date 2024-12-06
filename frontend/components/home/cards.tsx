import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type ProjectCardData = {
    projectName: string;
    projectPhoto: string;
    projectSkills: string[];
    projectLink: string;
}

const projects:ProjectCardData[] = [
    {
        projectName: 'Hero Fan',
        projectPhoto: './HF.png',
        projectSkills: ['JavaScript', 'React.js', 'Next.js', 'Node.js', 'PostgreSQL'],
        projectLink: './hero_fan'
    },
    {
        projectName: 'FdF',
        projectPhoto: './FdF.png',
        projectSkills: ['C', 'Makefile', 'MLX42 Library'],
        projectLink: './fdf'
    },
    {
        projectName: 'push_swap',
        projectPhoto: './push_swap.png',
        projectSkills: ['C', 'Makefile'],
        projectLink: './push_swap'
    },
    {
        projectName: 'libft',
        projectPhoto: './libft.png',
        projectSkills: ['C', 'Makefile'],
        projectLink: './libft'
    },
    {
        projectName: 'Bee Runner',
        projectPhoto: './bee_runner.png',
        projectSkills: ['C#', 'Unity'],
        projectLink: './bee_runner'
    },
    {
        projectName: 'Zombie Strike',
        projectPhoto: './zombie_strike.png',
        projectSkills: ['C++', 'Unreal Engine'],
        projectLink: './zombie_strike'
    },
];

const Card = (
    project: ProjectCardData
    ) => {
    const FillSkills = (skills:string[]) => {
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
                        {FillSkills(project.projectSkills)}
                    </div>
                </div>
            </a>
        </SwiperSlide>
    )
}

const Cards = () => {
    return (
        <Swiper
            slidesPerView="auto"
            modules={[Navigation, Pagination, Scrollbar]}
            navigation
            pagination={{clickable: true}}
            scrollbar={{draggable: true}}
            className="cards-control-block"
        >
            {projects.map((project:ProjectCardData) => (
                Card(project)
            ))}
        </Swiper>
    )
}

export default Cards;