import FillSkills from "@/components/home/main-skills";
import projects from "@/components/projects";
import calculateContainerSize from "@/components/calculateContainerSize";
import GitHubBlock from "@/components/work/github-block";

const link:string = 'https://github.com/FPyMEHTAPIU/hero_fan'

const HeroFan = () => {
    const {containerWidth, isMobile, isTablet} = calculateContainerSize();
    const {MobileGithubBlock, TabletDesktopGithubBlock} = GitHubBlock(link);


    return (
        <main className="main-gap">
            {/*HEADER*/}
            {!isMobile && TabletDesktopGithubBlock()}
            <div className="work-content-block">
                <h1>Hero Fan</h1>
                <p className="body-default">
                    A full-stack (Marvel) Hero Fan webpage created for the Web Express Coding Challenge
                    at Hive Helsinki.
                </p>
                {FillSkills(projects[0].projectSkills, containerWidth, true)}
            </div>
            {/*CONTENT*/}
            <div className="horizontal-card-container video-container">
                <div className="horizontal-card video-container" style={{padding: 0, position: 'relative'}}>
                    <iframe
                        src="https://player.vimeo.com/video/1030456870?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                        allow="fullscreen; picture-in-picture; clipboard-write"
                        style={{width: '100%', height: '100%', border: 'none'}}
                        title="Hero Fan Demo"></iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
            <div className="work-content-block">
                <h2>Technologies Used</h2>
                <ul>
                    <li className="list-dots green"><p className="body-default">
                        <span className="green">Database:</span> PostgreSQL, created and run via Docker
                    </p></li>
                    <li className="list-dots green"><p className="body-default">
                        <span className="green">Back-End:</span> Node.js, Express
                    </p></li>
                    <li className="list-dots green"><p className="body-default">
                        <span className="green">Front-End:</span> React, Next.js
                    </p></li>
                </ul>
            </div>
            <div className="work-content-block">
                <h2>Website Functionality</h2>
                <div className="work-sub-block">
                    <p className="body-default"><span className="green">
                        1.Without Authorization
                    </span></p>
                    <ul>
                        <li className="list-dots"><p className="body-default">
                            View characters preview on the main page
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            View detailed information about each character
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Search for characters
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            User registration and login
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Character sorting
                        </p></li>
                    </ul>
                </div>
                <div className="work-sub-block">
                    <p className="body-default"><span className="green">
                        2.Only Authorized Users
                    </span></p>
                    <ul>
                        <li className="list-dots"><p className="body-default">
                            View the user page (own and other users' profiles)
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Add/remove characters from favorites
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Like/dislike characters
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Search for users
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Change login/password only for their own account
                        </p></li>
                    </ul>
                </div>
            </div>
            <div className="work-content-block">
                <h2>Pages Created</h2>
                <ul>
                    <li className="list-dots"><p className="body-default">
                        Main page with characters and pagination
                    </p></li>
                    <li className="list-dots"><p className="body-default">
                        Character dynamic page
                    </p></li>
                    <li className="list-dots"><p className="body-default">
                        User dynamic page
                    </p></li>
                    <li className="list-dots"><p className="body-default">
                        Search results page
                    </p></li>
                    <li className="list-dots"><p className="body-default">
                        404 error page
                    </p></li>
                </ul>
                <p className="body-default">
                    Also, a <span className="green">header</span> and <span className="green">footer</span> are
                    created, which appear on every page. Registration uses a popup window
                    instead of a separate page.
                </p>
            </div>
            <div className="work-content-block last-block">
                <h2>Data Source</h2>
                <p className="body-default">
                    This website fetches data from the <span className="green">Marvel API</span>,
                    stores it in the database, and works with the database for faster performance.
                    In the future, a data update logic will be added to periodically refresh the data.
                </p>
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

export default HeroFan;