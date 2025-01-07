import { useState, useEffect } from "react";
import {useRouter} from "next/router";
import calculateContainerSize from "@/components/calculateContainerSize";

const Footer = () => {
    const {isMobile, isTablet} = calculateContainerSize();
    const router = useRouter();
    const [page, setPage] = useState<string>('');

    useEffect(() => {
        if (router.isReady) {
            setPage(router.pathname as string);
        }
    }, [router.isReady, router.pathname]);

    const SocialLinks = () => {
        return (
            <div className="social-block">
                <a href="https://www.linkedin.com/in/nicksaveliev/" target="_blank">
                    <img
                        src={isMobile || isTablet ? "/icons/linkedin24.svg" : "/icons/linkedin36.svg"}
                        loading="lazy"
                        alt="linkedin"
                    />
                </a>
                <a href="mailto:kolya59264@gmail.com" target="_blank">
                    <img
                        src={isMobile || isTablet ? "/icons/gmail24.svg" : "/icons/gmail36.svg"}
                        loading="lazy"
                        alt="gmail"
                    />
                </a>
                <a href="https://github.com/FPyMEHTAPIU" target="_blank">
                    <img
                        src={isMobile || isTablet ? "/icons/github24.svg" : "/icons/github36.svg"}
                        loading="lazy"
                        alt="github"
                    />
                </a>
            </div>
        );
    };

    return (
        <footer style={{
            marginBottom: (isMobile && page !== '/work' && page.includes('work')) ? 116 : 'revert',
            width: !isMobile && page === '/work' ? 690 : 'revert-layer',
            justifySelf: !isMobile && page === '/work' ? 'center' : 'revert'
        }}>
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
                            <img className="download-icon" src="/icons/download16.svg" alt="download"/>
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
                                className="download-icon"
                                src={ isTablet ? "/icons/download16.svg" : "/icons/download24.svg"}
                                loading="lazy"
                                alt="download"
                            />
                        </a>
                    </div>
                }
                {SocialLinks()}
            </div>
            <p
                className="body-small"
                style={{marginBottom: 40}}>
                Designed by&nbsp;
                <a
                    href="https://www.linkedin.com/in/naumovadesign/"
                    className="body-small"
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