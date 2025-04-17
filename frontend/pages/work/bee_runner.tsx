import calculateContainerSize from "@/components/calculateContainerSize";
import GitHubBlock from "@/components/work/github-block";
import FillSkills from "@/components/home/main-skills";
import getCurrentProject from "@/components/getCurrentProject";

const currentProject = getCurrentProject("Bee Runner");

const link:string = 'https://github.com/FPyMEHTAPIU/bee_runner'

const Bee_Runner = () => {
    const {containerWidth, isMobile} = calculateContainerSize();
    const {MobileGithubBlock, TabletDesktopGithubBlock, GitHubButton} = GitHubBlock(link);

    return (
        <main className="main-gap">
            {/*HEADER*/}
            {!isMobile && TabletDesktopGithubBlock()}
            <div className="work-content-block">
                <h1>Bee Runner</h1>
                <p className="body-default">
                    In this amusing game, your goal is to escape from a giant bee. Your journey won't be easy as
                    you'll encounter numerous obstacles and enemies. Only the best players will be able to unlock
                    the Chest of Dreams and claim the well-deserved reward!
                </p>
                {FillSkills(currentProject.projectSkills, containerWidth, true)}
            </div>
            <div className="work-content-block">
                <img className="horizontal-card horizontal-image"
                     src={'/projects/bee_runner/bee_runner.png'} alt="image"
                     loading="lazy"
                />
                <p className="body-default">
                    This project created for the Games Job Fair Spring 2024 LITE - Unity Engine Programming Challenge.
                </p>
                <a href="https://fpymehtapiu.itch.io/bee-runner" className="button-secondary align-start"
               style={{justifyContent: 'center'}} target="_blank" rel="noreferrer">
                <p className="body-default">Play here!</p>
                <img src="/arrows/arrow_right_white24.svg" alt="arrow right" loading="lazy"/>
            </a>
            </div>
            {/*CONTENT*/}
            <div className="work-content-block first-content-block">
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
            </div>
            {!isMobile && GitHubButton(link)}
            {isMobile ? MobileGithubBlock() : <></>}
        </main>
    )
}

export default Bee_Runner;