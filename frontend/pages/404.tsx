import {useRouter} from "next/router";
import React, {useEffect} from "react";
import calculateContainerSize from "@/composables/calculateContainerSize";

const Page404 = () => {
    const router = useRouter();
    const {isMobile, isTablet} = calculateContainerSize();

    useEffect(():void => {
        router.replace("/404");
    }, []);

    return (
        <main style={{height: "100vh", justifyContent: "unset"}}>
            <div className="background-ellipse-green page404"></div>
            <div className="background-ellipse-blue page404"></div>
            <p className="not-found">
                {'4{}4'}
            </p>
            <div className="oops-block" style={{textAlign: "center"}}>
                {isMobile || isTablet ?
                    <h1 style={{maxWidth: isMobile ? 262 : 'unset'}}>Oops! Page Not Found</h1>
                    :
                    <h2>Oops! Page Not Found</h2>
                }
                <p className="body-default" style={{maxWidth: isMobile ? 299 : (isTablet ? 421 : 528)}}>
                    Something went wrong. Please&nbsp;check the URL or go back to the homepage.
                </p>
                <a href="/" className="button-small">
                    <p className="body-default black">Back to Homepage</p>
                    <img src="/arrows/arrow_right_black24.svg" loading="lazy" alt="arrow right"/>
                </a>
            </div>
        </main>
    )
}

export default Page404;