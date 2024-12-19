import React from "react";

const FillSkills = (
    skills:string[],
    containerWidth:number,
    isWorkPage:boolean
) => {
    return (
        <div className={isWorkPage ? "skills-block-home align-start" : "skills-block-home"}
             style={{marginBottom: isWorkPage ? 0 : 'revert-layer'}}
        >
            {skills.map((skill:string, index:number) => (
                <div
                    key={index}
                    className="skill"
                    style={{
                        borderRadius: containerWidth < 1290 ? 8 : 16,
                        border: 'none'
                    }}
                >
                    <p className="body-default">{skill}</p>
                </div>
            ))}
        </div>
    )
}

export default FillSkills;