const FillImageButtons = (
    projectSkills:string[],
    activeIndex:number
) => {
    return projectSkills.map((skill:string, index:number) => (
        <button
            className={index === activeIndex ? "skill project-skill body-small tab-text black tab-selected"
                : "skill project-skill tab body-small tab-text"}
        >
            {skill}
        </button>
    ))
}

export default FillImageButtons;