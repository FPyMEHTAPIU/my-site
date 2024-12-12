import {useState} from "react";
import {ProjectCardData} from "@/components/projects";
import projects from "@/components/projects";

const WorkCard = (project:ProjectCardData) => {
    const FillSkills = () => {
        return project.projectSkills.map((skill:string) => (
            <div className="skill project-skill">
                <p className="body-small">{skill}</p>
            </div>
        ))
    }

    return (
        <a href={project.projectLink} className="project-card work-card">
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

const WorkCards = (
    isAll:boolean,
    isWeb:boolean,
    isSoftware:boolean,
    isGame:boolean
    ) => {
    return (
        projects.map((project: ProjectCardData) => (
            isAll ? WorkCard(project)
                : isWeb ? (project.projectType === 'Web' ? WorkCard(project) : <></>)
                    : isSoftware ? (project.projectType === 'Software' ? WorkCard(project) : <></>)
                        : isGame ? (project.projectType === 'Game' ? WorkCard(project) : <></>)
                            : <></>
        ))
    )
}

const Work = () => {
    const [isAll, setIsAll] = useState<boolean>(true);
    const [isWeb, setIsWeb] = useState<boolean>(false);
    const [isSoftware, setIsSoftware] = useState<boolean>(false);
    const [isGame, setIsGame] = useState<boolean>(false);

    const filters:string[] = [
        'All',
        'Web',
        'Software',
        'Game'
    ]

    const states:boolean[] = [
        isAll,
        isWeb,
        isSoftware,
        isGame
    ];

    const clickAll = () => {
        setIsAll(true);
        setIsWeb(false);
        setIsSoftware(false);
        setIsGame(false);
    }

    const clickWeb = () => {
        setIsAll(false);
        setIsWeb(true);
        setIsSoftware(false);
        setIsGame(false);
    }

    const clickSoftware = () => {
        setIsAll(false);
        setIsWeb(false);
        setIsSoftware(true);
        setIsGame(false);
    }

    const clickGame = () => {
        setIsAll(false);
        setIsWeb(false);
        setIsSoftware(false);
        setIsGame(true);
    }

    const setFilters = () => {
        const Filter = (filter:string, index:number) => {
            return (
                <button
                    className={"text-button back-none"}
                    onClick={filter === 'All' ? clickAll
                        : filter === 'Web' ? clickWeb
                            : filter === 'Software' ? clickSoftware
                                : clickGame
                    }
                >
                    <p className={states[index] ? "body-default green" : "body-default"}>
                        {filter}
                    </p>
                </button>
            )
        };

        return (
            <div className="projects-filter">
                {filters.map((filter:string, index: number) => (
                    Filter(filter, index)
                ))}
            </div>
        )
    }

    return (
        <main>
            {setFilters()}
            <div className="work-card-container">
                {WorkCards(isAll, isWeb, isSoftware, isGame)}
            </div>
        </main>
    )
}

export default Work;