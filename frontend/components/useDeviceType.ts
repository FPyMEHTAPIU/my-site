import {useEffect, useState} from "react";

const useDeviceType = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const updateDimensions = () => {
            const width:number = window.innerWidth;
            setIsMobile(width < 720);
            setIsTablet(width >= 720 && width < 1440);
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, [])

    return {isMobile, isTablet};
}

export default useDeviceType;