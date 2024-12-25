import React from "react";
import Cards from "@/components/home/cards";
import FillSkills from "@/components/home/main-skills";
import calculateContainerSize from "@/components/calculateContainerSize";
import InputForm from "@/components/input";

const skills:string[] = ['JavaScript', 'TypeScript', 'React.js',
    'React Native', 'Node.js', 'Next.js', 'CSS', 'HTML', 'PostgreSQL',
    'C', 'C++', 'C#'];

const Index = () => {
    const {containerWidth, isMobile, isTablet} = calculateContainerSize();
    const {InputBlock} = InputForm(isMobile, isTablet);

    const GreetingBlock = () => {
        return (
            isMobile ?
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
                    C/C++.
                </p>
                <p className="body-default">
                    At my free time I play the guitar, recording videos and play computer games.
                </p>
                <img id="my-photo" src="/My%20photo.jpg" alt="my photo"/>
            </div>
                :
                <div className="content-photo">
                    <div className="content-container">
                        <div className="greeting">
                            <p className="body-default black">
                                Hi there! I'm Nick!
                            </p>
                        </div>
                        <h1>A Full-Stack Developer</h1>
                        <p className="body-default">
                            with experience in mobile app
                            development with React Native and software development using
                            C/C++.
                        </p>
                        <p className="body-default">
                            At my free time I play the guitar, recording videos and play computer games.
                        </p>
                    </div>
                    <img id="my-photo" src="/My%20photo.jpg" alt="my photo"/>
                </div>
        )
    }

    return (
        <main>
            <div className="background-ellipse-green"></div>
            <div className="background-ellipse-blue"></div>
            <div className="background-ellipse-light-blue"></div>
            {GreetingBlock()}
            <div id="infinite-line">
                <p className="body-default black">Open to work</p>
                <p className="body-default black">Open to work</p>
                <p className="body-default black">Open to work</p>
            </div>
            <h1 style={{
                alignSelf: "center",
                marginBottom: containerWidth < 1290 ? 24 : 40
            }}>
                My Skills
            </h1>
            {FillSkills(skills, containerWidth, false)}
            {isMobile ?
                <h1 style={{alignSelf: "center", marginBottom: 24}}>
                    My Projects
                </h1>
                :
                <div className="projects-link">
                    <h1>
                        My Projects
                    </h1>
                    <a className="button-small" href='./work' style={{width: 'auto', gap: 16}}>
                        <p className="body-small black">All projects</p>
                        <img
                            src={isMobile || isTablet ? './arrows/arrow_right_black16.svg' : './arrows/arrow_right_black24.svg'}
                            alt="arrow right"
                        />
                    </a>
                </div>
            }
            {Cards()}
            {isMobile ?
                <a className="button-primary" style={{alignSelf: "center"}} href='./work'>
                    <p className="body-small black">All projects</p>
                    <img
                        src={isMobile || isTablet ? './arrows/arrow_right_black16.svg' : './arrows/arrow_right_black24.svg'}
                        alt="arrow right"
                    />
                </a>
                : <></>}
            {InputBlock()}
        </main>
    );
};

export default Index;