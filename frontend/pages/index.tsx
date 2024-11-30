import React, {useEffect, useState} from "react";
import Methods from "@/components/methods";
import Card from "@/components/card";

type SkillRowsProps = {
    rows: string[][];
};

const skills:string[] = ['JavaScript', 'TypeScript', 'React.js',
    'React Native', 'Node.js', 'Next.js', 'CSS', 'HTML', 'PostgreSQL',
    'C', 'C++', 'C#'];

const Index = () => {
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const [skillGap, setSkillGap] = useState<number>(0);
    const [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
        if (typeof window !== 'undefined')
        {
            setWindowWidth(window.innerWidth);
            setContainerWidth(windowWidth < 720 ? 345 :
                (windowWidth > 1440 ? window.innerWidth : 690 ));
            setSkillGap(windowWidth < 1440 ? 10 : 24);
        }
    }, [windowWidth])

    const FillSkills = () => {
        const SkillRows: React.FC<SkillRowsProps> = ({ rows }) => {
            return (
                <div className="skills-block-home">
                    {rows.map((row, rowIndex) => (
                        <div key={rowIndex} className="skills-row">
                            {row.map((skill, skillIndex) => (
                                <div
                                    key={skillIndex}
                                    className="skill"
                                    style={{borderRadius: 8, border: 'none'}}
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
            return skill.length * 12.1 + 32;
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

    return (
        <main>
            <div className="content-container">
                <div className="greeting">
                    <p className="body-small black">
                        Hi there! I'm Nick!
                    </p>
                </div>
                <h1>A Full-Stack Developer</h1>
                <p className="body-default">
                    with experience in mobile app
                    development with React Native and software development using
                    C/C++. My background includes game development, and I've
                    worked on various software projects such as developing an
                    image editor, 3D modelling, implementing sorting algorithms,
                    and creating my own library.
                </p>
                <p className="body-default">
                    At my free time I play the guitar, recording videos and play computer games.
                </p>
                <img id="my-photo" src="./My%20photo.jpg" alt="my photo"/>
            </div>
            <div id="infinite-line">
                <p className="body-default black">Open to work</p>
                <p className="body-default black">Open to work</p>
                <p className="body-default black">Open to work</p>
            </div>
            <h1 style={{justifySelf: "center", marginBottom: 24}}>
                My Skills
            </h1>
            {FillSkills()}
            <h1 style={{justifySelf: "center", marginBottom: 24}}>
                My Projects
            </h1>
            <div style={{justifyItems: "center"}}>
                {Card('FdF', './FDF.png', ['C', 'Makefile', 'MLX42 Library'])}
                <div className="control-block">
                    <button className="dot dot-filled"/>
                    <button className="dot dot-next-prev"/>
                    <button className="dot"/>
                    <button className="dot"/>
                    <button className="dot"/>
                    <button className="dot"/>
                </div>
            </div>
            <a className="button-primary" href='./work'>
                <p className="body-small black">All projects</p>
                <img src='' alt="arrow right"/>
            </a>
            <div style={{
                display: 'flex',
                width: 345,
                flexDirection: 'column',
                alignItems: 'center',
                gap: 16,
                marginBottom: 24,
                marginTop: 48
            }}>
                <h1>Get In Touch</h1>
                <p className="body-default" style={{textAlign: 'center'}}>
                    Orci varius natoque penatibus et magnis.
                </p>
            </div>
            <div className='input-container'>
                <input className="input" placeholder="Topic"/>
                <input className="input" placeholder="Email"/>
                <textarea
                    className="input"
                    placeholder="Message"
                    style={{height: 357}}
                />
                <button
                    className="button-primary"
                    style={{width: '100%', justifySelf: 'stretch'}}
                >
                    <p className="body-default black">Submit</p>
                </button>
            </div>
        </main>
    );
};

export default Index;