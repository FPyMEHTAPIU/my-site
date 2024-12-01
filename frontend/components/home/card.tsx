const Card = (
    projectName:string,
    photoLocation:string,
    skills:string[]
    ) => {
    const FillSkills = (skills:string[]) => {
        return skills.map((skill:string) => (
            <div className="skill project-skill">
                <p className="body-small">{skill}</p>
            </div>
        ))
    }

    return (
        <div className="project-card">
            <img src={photoLocation} alt="project photo"/>
            <div className="content-block">
                <h2>{projectName}</h2>
                <div className="skills-block">
                    {FillSkills(skills)}
                </div>
            </div>
        </div>
    )
}

export default Card;