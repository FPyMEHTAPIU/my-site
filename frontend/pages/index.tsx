import React, {useEffect, useState} from "react";
import Methods from "@/components/methods";
import Card from "@/components/home/card";
import FillSkills from "@/components/home/skill";

const skills:string[] = ['JavaScript', 'TypeScript', 'React.js',
    'React Native', 'Node.js', 'Next.js', 'CSS', 'HTML', 'PostgreSQL',
    'C', 'C++', 'C#'];

const Index = () => {
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const [skillGap, setSkillGap] = useState<number>(0);
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined')
        {
            setWindowWidth(window.innerWidth);
            setContainerWidth(windowWidth < 720 ? 345 :
                (windowWidth > 1440 ? window.innerWidth : 690 ));
            setSkillGap(windowWidth < 1440 ? 10 : 24);
        }
        setIsMobile(windowWidth < 720);
        setIsTablet(windowWidth > 720 && windowWidth < 1440);
    }, [windowWidth])

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
                :
                <div className="content-photo">
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
                    </div>
                    <img id="my-photo" src="./My%20photo.jpg" alt="my photo"/>
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
            <h1 style={{justifySelf: "center", marginBottom: 24}}>
                My Skills
            </h1>
            {FillSkills(skills, containerWidth, skillGap)}
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