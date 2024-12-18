const FillImageButtons = (
    projectSkills:string[],
    activeIndex:number,
    setActiveIndex:any,
    swiperRef:any
) => {
    const moveToSlide = (index:number) => {
        if (swiperRef.activeIndex !== index) {
            setActiveIndex(index);
            swiperRef.current.slideTo(index);
        }
    }

    return projectSkills.map((
        skill:string,
        index:number
    ) => (
        <button
            className={index === activeIndex ? "skill project-skill body-small tab-text black tab-selected"
                : "skill project-skill tab body-small tab-text"}
            onClick={() => moveToSlide(index)}
        >
            {skill}
        </button>
    ))
}

export default FillImageButtons;