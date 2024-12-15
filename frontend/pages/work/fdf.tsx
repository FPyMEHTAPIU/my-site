import FillSkills from "@/components/home/main-skills";
import projects from "@/components/projects";
import calculateContainerSize from "@/components/calculateContainerSize";
import {Swiper, SwiperSlide} from "swiper/react";
import FillCardSkills from "@/components/card-skills";
import {Navigation, Pagination, Scrollbar} from "swiper/modules";

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

    const imageSlide = (img_src:string) => {
        return (
            <SwiperSlide className="horizontal-card">
                <img className="horizontal-card" src={img_src} alt="image" />
            </SwiperSlide>
        )
    }

    const imageSwiper = () => {
        return (
            <div className="horizontal-card-block">
                <Swiper
                    slidesPerView="auto"
                    centeredSlides={true}
                    centerInsufficientSlides={true}
                    spaceBetween={isMobile ? 8 : (isTablet ? 20 : 30)}
                    modules={[Navigation, Pagination, Scrollbar]}
                    navigation={{
                        prevEl: '.arrow-round.left',
                        nextEl: '.arrow-round.right'
                    }}
                    pagination={{
                        dynamicBullets: true, clickable: true,
                        el: ".pagination-block",
                        bulletClass: "dot", bulletActiveClass: "dot-filled"
                    }}
                    scrollbar={{draggable: true}}
                    className="cards-control-block"
                >
                    {!isMobile && (
                        <>
                            <button className="arrow-round left">
                                <img
                                    src={isMobile ? "./arrows/arrow_left_white16.svg" :
                                        isTablet ? "./arrows/arrow_left_white24.svg" :
                                            "./arrows/arrow_left_white32.svg"}
                                    alt="arrow left"
                                    className="arrow"
                                />
                            </button>
                            <button className="arrow-round right">
                                <img
                                    src={isMobile ? "./arrows/arrow_right_white16.svg" :
                                        isTablet ? "./arrows/arrow_right_white24.svg" :
                                            "./arrows/arrow_right_white32.svg"}
                                    alt="arrow left"
                                    className="arrow"
                                />
                            </button>
                        </>
                    )}
                    {gifsZoomRotate.map((gif: string) => (
                        imageSlide(gif)
                    ))}
                </Swiper>
                <div className="pagination-block"></div>
            </div>

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
            <div className="work-content-block">
                <div className="skills-block">
                    {FillCardSkills(buttonsZoomRotate)}
                </div>
                {imageSwiper()}
            </div>
        </main>
    )
}

export default FdF;