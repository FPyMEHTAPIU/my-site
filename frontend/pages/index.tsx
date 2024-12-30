import React, {useRef, useEffect, useState} from "react";
import Cards from "@/components/home/cards";
import FillSkills from "@/components/home/main-skills";
import calculateContainerSize from "@/components/calculateContainerSize";
import InputForm from "@/components/input";
import useOverlay from "@/components/overlay";

const skills:string[] = ['JavaScript', 'TypeScript', 'React.js',
    'React Native', 'Node.js', 'Next.js', 'CSS', 'HTML', 'PostgreSQL',
    'C', 'C++', 'C#'];

const Index = () => {
    const {containerWidth, isMobile, isTablet, isDesktop1440} = calculateContainerSize();
    const [isOverlay, setIsOverlay] = useState<boolean>(false);
    const {InputBlock} = InputForm(isMobile, isTablet, isDesktop1440, setIsOverlay, true);
    const {SubmitOverlay} = useOverlay(setIsOverlay, isDesktop1440, true);

    const GreetingBlock = () => {
        return (
            isMobile ?
            <div className="content-container">
                <div className="greeting">
                    <p className="body-small black">
                        Hi there! I'm Nick!
                    </p>
                </div>
                <h1>A Software Engineer</h1>
                <p className="body-default">
                    with experience in web development using TypeScript and React, mobile app development
                    with React Native, and software development using C and C++.
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
                        <h1>A Software Engineer</h1>
                        <p className="body-default">
                            with experience in web development using TypeScript and React, mobile app development
                            with React Native, and software development using C and C++.
                        </p>
                        <p className="body-default">
                            At my free time I play the guitar, recording videos and play computer games.
                        </p>
                    </div>
                    <img id="my-photo" src="/My%20photo.jpg" alt="my photo"/>
                </div>
        )
    }

    const FillMarquee: React.FC = () => {
        const containerRef = useRef<HTMLDivElement | null>(null);

        useEffect(() => {
            const container = containerRef.current;

            if (!container) return;

            const text = "Open to work";

            const replicateText = () => {
                if (!container) return;
                const containerWidth = container.parentElement?.offsetWidth || 0;

                while (container.scrollWidth < containerWidth * 2) {
                    const newElement = document.createElement("p");
                    newElement.className = "body-default black";
                    newElement.textContent = text;
                    container.appendChild(newElement);
                }
            };

            replicateText();
            window.addEventListener("resize", replicateText);

            return () => {
                window.removeEventListener("resize", replicateText);
            };
        }, []);

        return <div id="infinite-line" ref={containerRef}></div>;
    };


    return (
        <main>
            <div className="background-ellipse-green"></div>
            <div className="background-ellipse-blue"></div>
            <div className="background-ellipse-light-blue"></div>
            {GreetingBlock()}
            <FillMarquee />
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
            {isOverlay && SubmitOverlay()}
        </main>
    );
};

export default Index;