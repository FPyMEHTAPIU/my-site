import FillSkills from "@/components/home/main-skills";
import projects from "@/components/projects";
import calculateContainerSize from "@/components/calculateContainerSize";
import GitHubBlock from "@/components/work/github-block";

const link:string = 'https://github.com/Linkshegelianer/react-native-aava'

const SMTH = () => {
    const {containerWidth, isMobile, isTablet} = calculateContainerSize();
    const {MobileGithubBlock, TabletDesktopGithubBlock} = GitHubBlock(link);

    return (
        <main className="main-gap">
            {/*HEADER*/}
            {!isMobile && TabletDesktopGithubBlock()}
            <div className="work-content-block">
                <h1>SMTH</h1>
                <p className="body-default">
                    Swipe Me To Hire (SMTH) -  a mobile app designed  to make job
                    searching  and hiring stress-free. Developed by the talented team 'Rock Bottom'
                    for <span className="green">Aava Lääkärikeskus at Junction 2024</span>,
                    held November 8-10 in Helsinki.
                </p>
                {FillSkills(projects[1].projectSkills, containerWidth, true)}
            </div>
            {/*CONTENT*/}
            <div className="work-content-block last-block">
                <div className="horizontal-card-container" style={{margin: 0, alignSelf: 'flex-start'}}>
                    <img className="horizontal-card horizontal-image" src={'/projects/smth/slides.png'} alt="image"/>
                </div>
                {!isMobile && (
                    <a className={isTablet ? "button-small" : "button-primary"} href={link} target="_blank"
                       style={{margin: isTablet ? '36px 0 48px' : '44px 0 104px'}}
                    >
                        <p className="body-small black">See on GitHub</p>
                        <img src="/arrows/arrow_right_black16.svg" alt="arrow-right"/>
                    </a>
                )}
            </div>
            {isMobile ? MobileGithubBlock() : <></>}
        </main>
    )
}

export default SMTH;