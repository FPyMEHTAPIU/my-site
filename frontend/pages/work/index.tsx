import {ProjectCardData} from "@/components/projects";
import projects from "@/components/projects";
import useDeviceType from "@/components/useDeviceType";

const WorkCard = (project:ProjectCardData) => {
    const { isMobile, isTablet } = useDeviceType();

    const FillSkills = () => {
        return project.projectSkills.map((skill:string) => (
            <div className="skill project-skill">
                <p className="body-small">{skill}</p>
            </div>
        ))
    }

    return (
        <a href={project.projectLink} className="project-card work-card" style={{marginBottom: 16}}>
            <img className="project-photo" src={project.projectPhoto} alt="project photo"/>
            <div className="content-block">
                <h2>{project.projectName}</h2>
                <p className="body-small">{project.projectDescription}</p>
                <div className="skills-block">
                    {FillSkills()}
                </div>
            </div>
        </a>
    )
}

const WorkCards = () => {
    return (
        projects.map((project: ProjectCardData) => (
            WorkCard(project)
        ))
    )
}

const Work = () => {
    return (
        <main>
            <div className="projects-filter">
                <button className="body-default text-button back-none">All</button>
                <button className="body-default text-button back-none">Web</button>
                <button className="body-default text-button back-none">Software</button>
                <button className="body-default text-button back-none">Game</button>
            </div>
            <div className="work-card-container">
                {WorkCards()}
            </div>
        </main>
    )
}

export default Work;