import FillSkills from "@/components/home/main-skills";
import projects from "@/components/projects";
import calculateContainerSize from "@/components/calculateContainerSize";
import SwiperContainer from "@/components/swiper-container";
import {useRef, useState} from "react";
import FillImageButtons from "@/components/image-buttons";
import GitHubBlock from "@/components/work/github-block";
import imageSlides from "@/components/work/image-slides";

const buttonsZoomRotate:string[] = [
    'zooming',
    'height scaling',
    'x-axis',
    'y-axis',
    'z-axis'
]

const gifsZoomRotate:string[] = [
    '/projects/fdf/zoom.gif',
    '/projects/fdf/height_scale.gif',
    '/projects/fdf/rotate_x.gif',
    '/projects/fdf/rotate_y.gif',
    '/projects/fdf/rotate_z.gif'
]

const buttonsProjections:string[] = [
    'isometric',
    'top-down',
    'right-side',
    'front-side'
]

const imagesProjections:string[] = [
    '/projects/fdf/isometric.png',
    '/projects/fdf/top_view.png',
    '/projects/fdf/right_view.png',
    '/projects/fdf/front_view.png'
]

const link:string = 'https://github.com/FPyMEHTAPIU/FdF'

const FdF = () => {
    const {SwiperDefault, SwiperImageDesktopHorizontal} = SwiperContainer();
    const {containerWidth, isMobile, isTablet, isDesktop1440} = calculateContainerSize();
    const [activeIndexZoom, setActiveIndexZoom] = useState<number>(0);
    const [activeIndexProjections, setActiveIndexProjections] = useState<number>(0);
    const swipeRefZoom = useRef(null);
    const swipeRefProjections = useRef(null);
    const {MobileGithubBlock, TabletDesktopGithubBlock} = GitHubBlock(link);
    const {imageSlideHorizontal} = imageSlides();

    return (
        <main className="main-gap">
            {/*HEADER*/}
            {!isMobile && TabletDesktopGithubBlock()}
            <div className="work-content-block">
                <h1>FdF</h1>
                <p className="body-default">
                    This project is about creating a simple wireframe model representation
                    of a 3D landscape by linking various points (x, y, z).
                    Create a 3D model from 2D map of numbers.
                </p>
                {FillSkills(projects[2].projectSkills, containerWidth, true)}
            </div>
            {/*CONTENT*/}
            <div className="work-content-block first-content-block">
                <h2>realization</h2>
                <div className="work-sub-block">
                    <p className="body-default green">1.Input Validation</p>
                    <p className="body-default">
                        In this stage, the program checks that exactly one argument (a text file with the
                        .fdf extension) has been passed.
                        It also verifies that the file can be opened and read.
                    </p>
                </div>
                <div className="work-sub-block">
                    <p className="body-default green">2.Map Parsing</p>
                    <p className="body-default">
                        The program reads the file using the get_next_line function
                        and stores the content in an array of strings.
                        It also counts the number of rows and columns in the map.
                    </p>
                </div>
                <div className="work-sub-block">
                    <p className="body-default green">3.Map Conversion</p>
                    <p className="body-default">
                        Here, the map is converted into a struct containing height (z) values.
                        The array of strings is transformed into a point struct, storing the numeric values.
                        If the map includes colors (separated by commas),
                        the program converts these into RGBA format. If no color is specified,
                        default colors are applied based on the z value.
                        The memory used in the previous step is then freed.
                    </p>
                </div>
                <div className="work-sub-block">
                    <p className="body-default green">4.Setting Coordinates</p>
                    <p className="body-default">
                        This step fills the 'point' struct with corresponding
                        x and y coordinates.
                    </p>
                </div>
                <div className="work-sub-block">
                    <p className="body-default green">5.Scaling Point Values</p>
                    <p className="body-default">
                        In this phase, the points are scaled according to the total number
                        of points in the map. This controls the spacing between points.
                    </p>
                </div>
                <div className="work-sub-block">
                    <p className="body-default green">6.Rotating Points</p>
                    <p className="body-default">
                        After scaling, matrix rotation formulas are applied to change the model's angle along the:
                    </p>
                    <ul>
                        <li className="list-dots"><p className="body-default">x-axis</p></li>
                        <li className="list-dots"><p className="body-default">y-axis</p></li>
                        <li className="list-dots"><p className="body-default">z-axis</p></li>
                    </ul>
                    <p className="body-default">
                        <span className="green">Important!</span> The original angle values are stored before rotation.
                        Zooming, height scaling and rotation examples are provided below:
                    </p>
                </div>
            </div>
            <div className="work-content-block" style={{marginBottom: isMobile || isTablet ? -8 : -16}}>
                <div className="skills-block">
                    {FillImageButtons(buttonsZoomRotate, activeIndexZoom, setActiveIndexZoom, swipeRefZoom)}
                </div>
            </div>
            {isMobile ? SwiperDefault(isMobile, isTablet, isDesktop1440, imageSlideHorizontal,
                gifsZoomRotate, setActiveIndexZoom, swipeRefZoom, 'zoom')
                : SwiperImageDesktopHorizontal(isMobile, isTablet, imageSlideHorizontal,
                    gifsZoomRotate, setActiveIndexZoom, swipeRefZoom)
            }
            <div className="work-content-block after-slide">
                <div className="work-sub-block">
                    <p className="body-default green">7.2D Projection Conversion</p>
                    <p className="body-default">
                        The program converts the 3D coordinates into either isometric or orthographic projections.
                        Examples of different projections are shown below:
                    </p>
                </div>
            </div>
            <div className="work-content-block" style={{marginBottom: isMobile || isTablet ? -8 : -16}}>
                <div className="skills-block">
                    {FillImageButtons(buttonsProjections, activeIndexProjections,
                        setActiveIndexProjections, swipeRefProjections)}
                </div>
            </div>
            {isMobile ? SwiperDefault(isMobile, isTablet, isDesktop1440, imageSlideHorizontal,
                imagesProjections, setActiveIndexProjections, swipeRefProjections, 'projections')
            : SwiperImageDesktopHorizontal(isMobile, isTablet, imageSlideHorizontal,
                    imagesProjections, setActiveIndexProjections, swipeRefProjections)}
            <div className="work-content-block after-slide">
                <div className="work-sub-block">
                    <p className="body-default green">8.Centering and Moving Points</p>
                    <p className="body-default">
                        Next, the model is moved to avoid image cropping by aligning it with the
                        left and top edges of the screen. It is also centered based on the window size.
                        User-controlled movement is added in this phase. Moving example is shown below:
                    </p>
                </div>
            </div>
            <div className="work-content-block">
                <div className="skills-block">
                    <div className="skill project-skill body-small tab-text black tab-selected">
                        moving
                    </div>
                </div>
            </div>
            <div className="horizontal-card-container" style={{margin: '-8px auto 0'}}>
                {imageSlideHorizontal('/projects/fdf/moving.gif')}
            </div>
            <div className="work-content-block last-block">
                <div className="work-sub-block">
                    <p className="body-default green">9.Line Drawing</p>
                    <p className="body-default">
                        This section uses the DDA (Digital Differential Analyzer) algorithm to draw lines.
                        First, horizontal lines are drawn, followed by vertical lines.
                    </p>
                </div>
                <div className="work-sub-block">
                    <p className="body-default green">10. Setting up Keyboard and Mouse Controls</p>
                    <p className="body-default">
                        Here, keys and mouse controls are configured to change between isometric and
                        orthographic projections, move the model, rotate it, zoom, and adjust the height scaling.
                        After closing the program (by pressing ESC or clicking the Close button),
                        all allocated memory is cleaned up.
                    </p>
                </div>
            </div>
            {!isMobile && (
                <a className={isTablet ? "button-small last-button" : "button-primary last-button"}
                   href={link} target="_blank"
                >
                    <p className="body-small black">See on GitHub</p>
                    <img src="/arrows/arrow_right_black16.svg" alt="arrow-right"/>
                </a>
            )}
            {isMobile ? MobileGithubBlock() : <></>}
        </main>
    )
}

export default FdF;