import calculateContainerSize from "@/components/calculateContainerSize";
import GitHubBlock from "@/components/work/github-block";
import FillSkills from "@/components/home/main-skills";
import projects from "@/components/projects";

const link:string = 'https://github.com/FPyMEHTAPIU/Zombie-Strike'

const Zombie_Strike = () => {
    const {containerWidth, isMobile, isTablet} = calculateContainerSize();
    const {MobileGithubBlock, TabletDesktopGithubBlock} = GitHubBlock(link);

    return (
        <main className="main-gap">
            {/*HEADER*/}
            {!isMobile && TabletDesktopGithubBlock()}
            <div className="work-content-block" style={{marginBottom: isMobile || isTablet ? 12 : 44}}>
                <h1>Zombie Strike</h1>
                <p className="body-default">
                    This is a game with an auto-shooter mechanic where you just need to move, aim, and survive.
                </p>
                {FillSkills(projects[6].projectSkills, containerWidth, true)}
            </div>
            <div className="work-content-block" style={{marginBottom: isMobile || isTablet ? 12 : 44}}>
                <div className="horizontal-card-container" style={{margin: 0, alignSelf: 'flex-start'}}>
                    <img className="horizontal-card" src={'/projects/zombie_strike/zombie_strike.png'} alt="image"
                         style={{width: isMobile ? 345 : isTablet ? 545 : 860 , alignSelf: 'flex-start', margin: 0,
                        top: 0, aspectRatio: 0.5}}
                    />
                </div>
            </div>
            <a href="https://isotopic.io/game/?game=Zombie_Strike" className="button-secondary" target="_blank"
               style={{margin: isMobile ? '0 15px' : (isTablet ? '0 133px' : '0 295px')}}
            >
                <p className="body-default">Play here!</p>
                <img src="/arrows/arrow_right_white24.svg" alt="arrow right"/>
            </a>
            {/*CONTENT*/}
            <div className="work-content-block" style={{marginBottom: isMobile || isTablet ? 12 : 44}}>
                <h2>controls</h2>
                <ul>
                    <li className="list-dots"><p className="body-default">
                        Left Mouse Button (LMB): Hold to move and aim.
                    </p></li>
                    <li className="list-dots"><p className="body-default">
                        Shift + LMB: Just aim.
                    </p></li>
                </ul>
            </div>

            <div className="work-content-block last-block">
                <h2>implemented features</h2>
                <div className="work-sub-block">
                    <p className="body-default green">1.Game Mechanics (Most of these were written in C++)</p>
                    <ul>
                        <li className="list-dots"><p className="body-default">
                            Following mouse cursor (similar to the Path of Exile game).
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Setting player character and enemy animations.
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Setting the attack range and animation for enemies.
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Creating a damage system with hit and collision (projectile and punch).
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Adding health and experience systems.
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Implementing the level system and choosing a bonus when leveling up.
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Adding experience drops when an enemy dies.
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Setting the maximum count of enemies and randomizing their spawn.
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Adding a score counter.
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Implementing the gun class with its own settings.
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Adding a timer.
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Adding a pause/resume game feature.
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            UI Programming.
                        </p></li>
                    </ul>
                </div>
                <div className="work-sub-block">
                    <p className="body-default green">2.UI</p>
                    <ul>
                        <li className="list-dots"><p className="body-default">
                            Main Menu screen.
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Pause screen.
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Tutorial screen.
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Bonus Choose screen.
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Win and Lose screens.
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Buttons design.
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Health- and Experience Bar design.
                        </p></li>
                    </ul>
                </div>
                <div className="work-sub-block">
                    <p className="body-default green">3.Visual</p>
                    <ul>
                        <li className="list-dots"><p className="body-default">
                            Level environment.
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Setting visual shoot and hit effects.
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Setting and randomizing shoot and hit sound effects.
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Grabbing experience visual effect.
                        </p></li>
                    </ul>
                </div>
                <div className="work-sub-block">
                    <p className="body-default green">4.Music</p>
                    <p className="body-default">
                        All was created by myself with Groovepad except for the grab experience sound.
                    </p>
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

export default Zombie_Strike;