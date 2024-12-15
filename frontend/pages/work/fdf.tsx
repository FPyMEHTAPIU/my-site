import FillSkills from "@/components/home/main-skills";
import projects from "@/components/projects";
import calculateContainerSize from "@/components/calculateContainerSize";
import {SwiperSlide} from "swiper/react";
import SwiperContainer from "@/components/swiper-container";
import {useState} from "react";
import FillImageButtons from "@/components/image-buttons";

const buttonsZoomRotate:string[] = [
    'Zooming',
    'Height Scaling',
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

const FdF = () => {
    const {containerWidth, skillGap, isMobile, isTablet} = calculateContainerSize();
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const imageSlide = (img_src:string) => {
        return (
            <SwiperSlide className="horizontal-card">
                <img className="horizontal-card" src={img_src} alt="image" />
            </SwiperSlide>
        )
    }

    return (
        <main className="main-gap">
            {/*HEADER*/}
            <div className="work-content-block" style={{marginBottom: isMobile || isTablet ? 12 : 60}}>
                <h1>FdF</h1>
                <p className="body-default">
                    This project is about creating a simple wireframe model representation
                    of a 3D landscape by linking various points (x, y, z).
                    Create a 3D model from 2D map of numbers.
                </p>
                {FillSkills(projects[2].projectSkills, containerWidth, skillGap, true)}
            </div>
            {/*CONTENT*/}
            <div className="work-content-block">
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
                        Zooming and height scaling examples are provided below:
                    </p>
                </div>
            </div>
            <div className="work-content-block" style={{marginBottom: -8}}>
                <div className="skills-block">
                    {FillImageButtons(buttonsZoomRotate, activeIndex)}
                </div>
            </div>
            {SwiperContainer(isMobile, isTablet, imageSlide, gifsZoomRotate, setActiveIndex)}
        </main>
    )
}

export default FdF;