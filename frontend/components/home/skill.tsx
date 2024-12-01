import React from "react";

type SkillRowsProps = {
    rows: string[][];
};

const FillSkills = (skills:string[], containerWidth:number, skillGap:number) => {
    const SkillRows: React.FC<SkillRowsProps> = ({ rows }) => {
        return (
            <div className="skills-block-home">
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="skills-row">
                        {row.map((skill, skillIndex) => (
                            <div
                                key={skillIndex}
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
                ))}
            </div>
        );
    };

    const calculateSkillWidth = (skill: string): number => {
        return (containerWidth < 1290 ? (skill.length * 12.1 + 32)
            : (skill.length * 25 + 40));
    };

    const arrangeSkills = (
        skills: string[],
        containerWidth: number,
        gap: number
    ): string[][] => {
        const rows: string[][] = [];
        let currentRow: string[] = [];
        let currentRowWidth = 0;

        skills.forEach((skill) => {
            const skillWidth = calculateSkillWidth(skill);
            if (currentRowWidth + skillWidth + (currentRow.length > 0 ? gap : 0) <= containerWidth) {
                currentRow.push(skill);
                currentRowWidth += skillWidth + (currentRow.length > 1 ? gap : 0);
            } else {
                rows.push(currentRow);
                currentRow = [skill];
                currentRowWidth = skillWidth;
            }
        });

        if (currentRow.length > 0) {
            rows.push(currentRow);
        }

        return rows;
    };

    const rows = arrangeSkills(skills, containerWidth, skillGap);

    return (
        <SkillRows rows={rows} />
    );
}

export default FillSkills;