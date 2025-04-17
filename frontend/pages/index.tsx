import React, {useRef, useEffect, useState} from "react";
import Cards from "@/components/home/cards";
import FillSkills from "@/components/home/main-skills";
import calculateContainerSize from "@/composables/calculateContainerSize";
import InputForm from "@/components/input";
import useOverlay from "@/components/overlay";

const skills:string[] = ['TypeScript', 'JavaScript', 'React.js',
    'React Native', 'Node.js', 'Next.js', 'CSS', 'HTML', 'PostgreSQL',
    'C', 'C++', 'C#'];

const Index = () => {
    const {containerWidth, isMobile, isTablet, isDesktop1440} = calculateContainerSize();
    const [isOverlay, setIsOverlay] = useState<boolean>(false);
    const {InputBlock} = InputForm(isMobile, isDesktop1440, setIsOverlay, true);
    const {SubmitOverlay} = useOverlay(setIsOverlay, isDesktop1440, true);

    const GreetingBlock = () => {
        return (
                <div className="content-photo">
                    {isMobile ? <div className="greeting">
                        <p className="body-default black">
                            Hi there! I'm Nick!
                        </p>
                    </div> : <></>}
                    <div className="content-container">
                        {!isMobile ? <div className="greeting">
                            <p className="body-default black">
                                Hi there! I'm Nick!
                            </p>
                        </div> : <></>}
                        <h1>A Software Engineer</h1>
                        <div className="text-container">
                            <p className="body-default">
                                with experience in web development using TypeScript and&nbsp;React, mobile app development
                                with React Native, and&nbsp;software development using C&nbsp;and&nbsp;C++.
                            </p>
                            <p className="body-default">
                                At my free time I play the guitar, record videos and&nbsp;play computer games.
                            </p>
                        </div>
                    </div>
                    <img id="my-photo" src="/My%20photo.jpg" loading="lazy" alt="my photo"/>
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
                marginBottom: 24
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
                        <p className={isTablet ? "body-small black" : "body-default black"}>
                            All projects</p>
                        <img
                            src={isMobile || isTablet ? './arrows/arrow_right_black16.svg' : './arrows/arrow_right_black24.svg'}
                            loading="lazy" alt="arrow right"
                        />
                    </a>
                </div>
            }
            {Cards()}
            {isMobile ?
                <a className="button-small" style={{justifySelf: "stretch", margin: '24px 15px 0'}} href='./work'>
                    <p className="body-small black">All projects</p>
                    <img
                        src={isMobile || isTablet ? './arrows/arrow_right_black16.svg' : './arrows/arrow_right_black24.svg'}
                        loading="lazy" alt="arrow right"
                    />
                </a>
                : <></>}
            {InputBlock()}
            {isOverlay && SubmitOverlay()}
        </main>
    );
};

export default Index;