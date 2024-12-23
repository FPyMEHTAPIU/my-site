import { useState, useEffect } from "react";
import Methods from "@/components/methods";
import {useRouter} from "next/router";

const Footer = () => {
    const ListenResize:any = Methods();
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const router = useRouter();
    const [page, setPage] = useState<string>('');

    useEffect(() => {
        if (router.isReady) {
            setPage(router.pathname as string);
            console.log(page)
        }
    }, [router.isReady, router.pathname]);

    useEffect(() => {
        if (typeof window !== 'undefined')
            setWindowWidth(window.innerWidth);
        ListenResize(setIsMobile, setIsTablet);
    }, [windowWidth]);

    const SocialLinks = () => {
        return (
            <div className="social-block">
                <a href="https://www.linkedin.com/in/nicksaveliev/" target="_blank">
                    <img
                        src={isMobile || isTablet ? "/icons/linkedin24.svg" : "/icons/linkedin48.svg"}
                        alt="linkedin"
                    />
                </a>
                <a href="mailto:kolya59264@gmail.com" target="_blank">
                    <img
                        src={isMobile || isTablet ? "/icons/gmail24.svg" : "/icons/gmail48.svg"}
                        alt="gmail"
                    />
                </a>
                <a href="https://github.com/FPyMEHTAPIU" target="_blank">
                    <img
                        src={isMobile || isTablet ? "/icons/github24.svg" : "/icons/github48.svg"}
                        alt="github"
                    />
                </a>
            </div>
        );
    };

    return (
        <footer style={{marginBottom:
                (isMobile && page !== '/work' && page.includes('work')) ? 116 : 'revert'}}>
            <div className="footer-container">
                {isMobile ?
                    <div className="links-container">
                        <div className="links-row">
                            <a href="/" className="text-button">
                                <p className="body-default">Home</p>
                            </a>
                            <a href="/work" className="text-button">
                                <p className="body-default">Work</p>
                            </a>
                            <a href="/contact" className="text-button">
                                <p className="body-default">Contact</p>
                            </a>
                        </div>
                        <a href="/" className="text-button">
                            <p className="body-default">Download CV</p>
                            <img src="/icons/download16.svg" alt="download"/>
                        </a>
                    </div>
                    :
                    <div className="links-row">
                        <a href="/" className="text-button">
                            <p className="body-default">Home</p>
                        </a>
                        <a href="/work" className="text-button">
                            <p className="body-default">Work</p>
                        </a>
                        <a href="/contact" className="text-button">
                            <p className="body-default">Contact</p>
                        </a>
                        <a href="/" className="text-button">
                            <p className="body-default">Download CV</p>
                            <img
                                src={ isTablet ? "/icons/download16.svg" : "/icons/download24.svg"}
                                alt="download"
                            />
                        </a>
                    </div>
                }
                {SocialLinks()}
            </div>
            <p
                className={ isMobile ? "body-small" : "body-default" }
                style={{marginBottom: 40}}>
                Designed by&nbsp;
                <a
                    href="https://www.linkedin.com/in/naumovadesign/"
                    className={ isMobile ? "body-small" : "body-default" }
                    style={{textDecoration: 'underline'
                }}
                    target="_blank"
                >
                    Iryna Naumova
                </a>
            </p>
        </footer>
    )
}

export default Footer;