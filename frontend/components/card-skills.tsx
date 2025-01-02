import calculateContainerSize from "@/components/calculateContainerSize";

const FillCardSkills = (projectSkills:string[]) => {
    const { isDesktop1440 } = calculateContainerSize();

    return projectSkills.map((skill:string) => (
        <div className="skill project-skill">
            <p className="body-small"
               style={{fontSize: isDesktop1440 ? 16 : 'revert-layer'}}
            >{skill}</p>
        </div>
    ))
}

export default FillCardSkills;