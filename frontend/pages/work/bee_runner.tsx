import calculateContainerSize from "@/components/calculateContainerSize";
import GitHubBlock from "@/components/work/github-block";
import FillSkills from "@/components/home/main-skills";
import projects from "@/components/projects";

const link:string = 'https://github.com/FPyMEHTAPIU/bee_runner'

const Bee_Runner = () => {
    const {containerWidth, isMobile, isTablet} = calculateContainerSize();
    const {MobileGithubBlock, TabletDesktopGithubBlock} = GitHubBlock(link);

    return (
        <main className="main-gap">
            {/*HEADER*/}
            {!isMobile && TabletDesktopGithubBlock()}
            <div className="work-content-block" style={{marginBottom: isMobile || isTablet ? 12 : 44}}>
                <h1>Bee Runner</h1>
                <p className="body-default">
                    In this amusing game, your goal is to escape from a giant bee. Your journey won't be easy as
                    you'll encounter numerous obstacles and enemies. Only the best players will be able to unlock
                    the Chest of Dreams and claim the well-deserved reward!
                </p>
                {FillSkills(projects[5].projectSkills, containerWidth, true)}
            </div>
            <div className="work-content-block" style={{marginBottom: isMobile || isTablet ? 12 : 44}}>
                <div className="horizontal-card-container" style={{margin: 0, alignSelf: 'flex-start'}}>
                    <img className="horizontal-card" src={'/projects/bee_runner/bee_runner.png'} alt="image"
                        style={{width: isMobile ? 345 : isTablet ? 545 : 860 , alignSelf: 'flex-start', margin: 0}}
                    />
                </div>
                <p className="body-default">
                This project created for the Games Job Fair Spring 2024 LITE - Unity Engine Programming Challenge.
                </p>
            </div>
            <a href="https://fpymehtapiu.itch.io/bee-runner" className="button-secondary" target="_blank"
               style={{margin: isMobile ? '0 15px' : (isTablet ? '0 133px' : '0 295px')}}
            >
                <p className="body-default">Play here!</p>
                <img src="/arrows/arrow_right_white24.svg" alt="arrow right"/>
            </a>
            {/*CONTENT*/}
            <div className="work-content-block" style={{marginBottom: isMobile || isTablet ? 12 : 44}}>
                <h2>controls</h2>
                <ul>
                    <li className="list-dots"><p className="body-default">Jump: Spacebar</p></li>
                    <li className="list-dots"><p className="body-default">
                        Shoot:Left Mouse Button (LMB) or Left CTRL
                    </p></li>
                    <li className="list-dots"><p className="body-default">Pause: Escape (ESC)</p></li>
                </ul>
                <p className="body-default">
                    The giant bee can catch you immediately, or you may lose before it reaches you. You have
                    a health bar that can deplete before reaching your goal, but you're not defenseless! You can
                    evade obstacles and shoot enemies. Defeating enemies rewards you with items like coins, keys,
                    or healing flasks. Coins can be used to purchase the Chest of Dreams, while keys are used
                    to open it. The reward can change your life and bring happiness. You also have the option to
                    reset your progress, although you won't want to!
                </p>
            </div>


            <div className="work-content-block last-block">
                <h2>implemented features</h2>
                <div className="work-sub-block">
                    <p className="body-default green">1.Procedural Generation</p>
                    <ul>
                        <li className="list-dots"><p className="body-default">Ground lines change randomly before generation.
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Smooth transition between grounds if number of lines is the same.
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Random spawning of obstacles and enemies.
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Calculated spawn positions.
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Deletion of old map sections.
                        </p></li>
                    </ul>
                </div>
                <div className="work-sub-block">
                    <p className="body-default green">2.Shooting</p>
                    <ul>
                        <li className="list-dots"><p className="body-default">
                            Set delay between shots for player and enemies.
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Projectiles disappear upon collision with enemies, player, ground, or when leaving the
                            screen.
                        </p></li>
                    </ul>
                </div>
                <div className="work-sub-block">
                    <p className="body-default green">3.Running</p>
                    <ul>
                        <li className="list-dots"><p className="body-default">
                            Speed increases over time.
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Colliding with obstacles or enemies decreases speed.
                        </p></li>
                    </ul>
                </div>
                <div className="work-sub-block">
                    <p className="body-default green">4.Collecting</p>
                    <ul>
                        <li className="list-dots"><p className="body-default">
                            Collect coins and keys throughout the game to spend on the Chest of Dreams.
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Grab healing items to restore health.
                        </p></li>
                    </ul>
                </div>
                <div className="work-sub-block">
                    <p className="body-default green">5.Monsters and Obstacles</p>
                    <ul>
                        <li className="list-dots"><p className="body-default">
                            Two types of monsters (melee and ranged).
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Two types of obstacles (with and without damage).
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Main monster: the giant bee.
                        </p></li>
                    </ul>
                </div>
                <div className="work-sub-block">
                    <p className="body-default green">6.UI</p>
                    <ul>
                        <li className="list-dots"><p className="body-default">
                            Game HUD (Player's Health Bar, coins, keys, and score).
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Pause screen (coins, keys, current score, best score, and buttons).
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Main menu screen (buttons, Chest shop, coins, and keys).
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Tutorial screen.
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Game over screen.
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Enemies' Health Bar.
                        </p></li>
                    </ul>
                </div>
                <div className="work-sub-block">
                    <p className="body-default green">7.Music Environment</p>
                    <ul>
                        <li className="list-dots"><p className="body-default">
                            Game music created by myself using Groovepad.
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Main menu music created by myself using Groovepad.
                        </p></li>
                        <li className="list-dots"><p className="body-default">
                            Other sounds sourced from the Unity Asset Store.
                        </p></li>
                    </ul>
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

export default Bee_Runner;