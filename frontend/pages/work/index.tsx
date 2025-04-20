import {useState} from "react";
import {ProjectCardData} from "@/composables/projects";
import projects from "@/composables/projects";

const WorkCard = (project:ProjectCardData, index:number) => {
    const FillSkills = () => {
        return project.skills.map((skill:string, index:number) => (
            <div className="skill project-skill" key={index}>
                <p className="body-small" style={{fontSize: 16}}>{skill}</p>
            </div>
        ))
    }

    return (
        <a key={index} href={project.link} className="project-card work-card" target={project.location === "external" ? "_blank" : ""}>
            <img className="project-photo work-photo" src={project.photo}
                 loading="lazy" alt="project photo"/>
            <div className="content-block">
                <h2>{project.name}</h2>
                <p className="body-small">{project.description}</p>
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
        projects.map((project: ProjectCardData, index:number) => (
            isAll ? WorkCard(project, index)
                : isWeb ? (project.type === 'Web' ? WorkCard(project, index) : <></>)
                    : isSoftware ? (project.type === 'Software' ? WorkCard(project, index) : <></>)
                        : isGame ? (project.type === 'Game' ? WorkCard(project, index) : <></>)
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
                    key={index}
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