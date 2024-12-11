import React, {useEffect, useState} from "react";
import Cards from "@/components/home/cards";
import FillSkills from "@/components/home/skill";

const skills:string[] = ['JavaScript', 'TypeScript', 'React.js',
    'React Native', 'Node.js', 'Next.js', 'CSS', 'HTML', 'PostgreSQL',
    'C', 'C++', 'C#'];

const Index = () => {
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const [skillGap, setSkillGap] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isTablet, setIsTablet] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const updateDimensions = () => {
            const width = window.innerWidth;
            setContainerWidth(
                width < 720 ? 345 : (width >= 1440 ? 1290 : 690)
            );
            setSkillGap(width < 1440 ? 10 : 24);
            setIsMobile(width < 720);
            setIsTablet(width >= 720 && width < 1440);
        };

        const getScrollbarWidth = () =>  {
            const documentWidth = document.documentElement.clientWidth
            return Math.abs(window.innerWidth - documentWidth)
        }

        document.documentElement.style.setProperty('--scrollbar-width', `${getScrollbarWidth()}px`)

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, [])

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
                <img id="my-photo" src="./My%20photo.jpg" alt="my photo"/>
            </div>
                :
                <div className="content-photo" style={{marginTop: isTablet ? 139 : 195}}>
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
                    <img id="my-photo" src="./My%20photo.jpg" alt="my photo"/>
                </div>
        )
    }

    const InputContainer = () => {
        return (
            <div className='input-container'>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <textarea
                    placeholder="Message"
                    style={ { height: isMobile || !isTablet ? 357 : 157 } }
                />
                <button
                    className="button-primary"
                    style= {
                    { width: isMobile || isTablet ? '100%' : 550,
                        justifySelf: 'stretch'}
                }>
                    <p className="body-default black">Submit</p>
                </button>
            </div>
        )
    }

    return (
        <main>
            {GreetingBlock()}
            <div id="infinite-line">
                <p className="body-default black">Open to work</p>
                <p className="body-default black">Open to work</p>
                <p className="body-default black">Open to work</p>
            </div>
            <h1 style={{
                justifySelf: "center",
                marginBottom: containerWidth < 1290 ? 24: 40
            }}>
                My Skills
            </h1>
            {FillSkills(skills, containerWidth, skillGap)}
            {isMobile ?
                <h1 style={{justifySelf: "center", marginBottom: 24}}>
                My Projects
            </h1>
                :
            <div className="projects-link" style={{width: containerWidth}}>
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
            { isMobile ?
            <a className="button-primary" href='./work'>
                <p className="body-small black">All projects</p>
                <img
                    src={isMobile || isTablet ? './arrows/arrow_right_black16.svg' : './arrows/arrow_right_black24.svg'}
                    alt="arrow right"
                />
            </a>
            : <></>}
            {isMobile ?
                <div className="get-in-touch">
                    <h1>Get In Touch</h1>
                    <p className="body-default" style={{textAlign: 'center'}}>
                        Orci varius natoque penatibus et magnis.
                    </p>
                    {InputContainer()}
                </div>
                :
                <div className="input-block">
                    <div className="letter-block">
                        <div className="get-in-touch">
                            <h1 style={!isTablet ? {width: 520} : {}}>Get In Touch</h1>
                            <p className="body-default">
                                Orci varius natoque penatibus et magnis.
                            </p>
                        </div>
                        <img src="./letter.svg" alt="letter"/>
                    </div>
                    {InputContainer()}
                </div>
            }
        </main>
    );
};

export default Index;