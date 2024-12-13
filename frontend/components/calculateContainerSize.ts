import {useEffect, useState} from "react";

const calculateContainerSize = () => {
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const [skillGap, setSkillGap] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isTablet, setIsTablet] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const updateDimensions = () => {
            const width = window.innerWidth;
            setContainerWidth(
                width < 720 ? 345 : (width >= 1440 ? 1290 : 690)
            );
            setSkillGap(width < 1440 ? 10 : 24);
            setIsMobile(width < 720);
            setIsTablet(width >= 720 && width < 1440);
        };

        const getScrollbarWidth = () =>  {
            const documentWidth = document.documentElement.clientWidth
            return Math.abs(window.innerWidth - documentWidth)
        }

        document.documentElement.style.setProperty('--scrollbar-width', `${getScrollbarWidth()}px`)

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, [])

    return {containerWidth, skillGap, isMobile, isTablet};
}

export default calculateContainerSize;