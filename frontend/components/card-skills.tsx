const FillCardSkills = (projectSkills:string[]) => {
    return projectSkills.map((skill:string) => (
        <div className="skill project-skill">
            <p className="body-small">{skill}</p>
        </div>
    ))
}

export default FillCardSkills;