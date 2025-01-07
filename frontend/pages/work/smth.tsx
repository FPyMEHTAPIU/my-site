import FillSkills from "@/components/home/main-skills";
import projects from "@/components/projects";
import calculateContainerSize from "@/components/calculateContainerSize";
import GitHubBlock from "@/components/work/github-block";

const link:string = 'https://github.com/Linkshegelianer/react-native-aava'

const SMTH = () => {
    const {containerWidth, isMobile} = calculateContainerSize();
    const {MobileGithubBlock, TabletDesktopGithubBlock, GitHubButton} = GitHubBlock(link);

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
                    <img className="horizontal-card horizontal-image" style={{margin: 0}}
                         src={'/projects/smth/slides.png'} loading="lazy" alt="image"
                    />
                </div>
            </div>
            {!isMobile && GitHubButton(link)}
            {isMobile ? MobileGithubBlock() : <></>}
        </main>
    )
}

export default SMTH;