const AddArrows = (
    isMobile: boolean,
    isTablet: boolean,
    isImages: boolean,
    isFirstSlide: boolean,
    isLastSlide: boolean
) => {
    return (
        !isMobile && (
        <>
            <button
                className={isImages ? "arrow-round left no-margin" : "arrow-round left"}
                style={{visibility: isFirstSlide ? "hidden" : "visible"}}
            >
                <img
                    src={isMobile ? "/arrows/arrow_left_white16.svg" :
                        isTablet ? "/arrows/arrow_left_white24.svg" :
                            "/arrows/arrow_left_white32.svg"}
                    alt="arrow left"
                    className="arrow"
                />
            </button>
            <button
                className={isImages ? "arrow-round right no-margin" : "arrow-round right"}
                style={{visibility: isLastSlide ? "hidden" : "visible"}}
            >
                <img
                    src={isMobile ? "/arrows/arrow_right_white16.svg" :
                        isTablet ? "/arrows/arrow_right_white24.svg" :
                            "/arrows/arrow_right_white32.svg"}
                    alt="arrow right"
                    className="arrow"
                />
            </button>
        </>
    ))
};

export default AddArrows;