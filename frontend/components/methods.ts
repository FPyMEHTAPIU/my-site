const Methods = () => {
    const ListenResize = (
        setIsMobile:any, setIsTablet:any) => {
        if (typeof window !== 'undefined') {
            const updateView = () => {
                const width = window.innerWidth;
                setIsMobile(width < 720);
                setIsTablet(width >= 720 && width < 1440);
            };

            updateView();
            window.addEventListener('resize', updateView);

            return () => {
                window.removeEventListener('resize', updateView);
            };
        }
    }

    return (ListenResize);
}

export default Methods;