const AddArrows = (
    isMobile: boolean,
    isTablet: boolean
) => {
    return (
        !isMobile && (
        <>
            <button className="arrow-round left">
                <img
                    src={isMobile ? "/arrows/arrow_left_white16.svg" :
                        isTablet ? "/arrows/arrow_left_white24.svg" :
                            "/arrows/arrow_left_white32.svg"}
                    alt="arrow left"
                    className="arrow"
                />
            </button>
            <button className="arrow-round right">
                <img
                    src={isMobile ? "/arrows/arrow_right_white16.svg" :
                        isTablet ? "/arrows/arrow_right_white24.svg" :
                            "/arrows/arrow_right_white32.svg"}
                    alt="arrow left"
                    className="arrow"
                />
            </button>
        </>
    ))
};

export default AddArrows;