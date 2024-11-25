import { useState, useEffect } from "react";
import Methods from "@/components/methods";

const Footer = () => {
    const ListenResize:any  = Methods;
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        ListenResize(setIsMobile, setIsTablet);
    }, []);

    const SocialLinks = () => {
        return (
            <div className="social-block">
                <a href="https://www.linkedin.com/in/mykolasaveliev/" target="_blank">
                    <img
                        src={isMobile || isTablet ? "./linkedin24.svg" : "./linkedin48.svg"}
                        alt="linkedin"
                    />
                </a>
                <a href="mailto:kolya59264@gmail.com" target="_blank">
                    <img
                        src={isMobile || isTablet ? "./gmail24.svg" : "./gmail48.svg"}
                        alt="gmail"
                    />
                </a>
                <a href="https://github.com/FPyMEHTAPIU" target="_blank">
                    <img
                        src={isMobile || isTablet ? "./github24.svg" : "./github48.svg"}
                        alt="github"
                    />
                </a>
            </div>
        );
    };

    return (
        <footer>
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
                            <img src="./download16.svg" alt="download"/>
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
                                src={ isTablet ? "./download16.svg" : "./download24.svg"}
                                alt="download"
                            />
                        </a>
                    </div>
                }
                {SocialLinks()}
            </div>
            <p className={ isMobile ? "body-small" : "body-default" }>
                Designed by&nbsp;
                <a
                    href="https://www.behance.net/naumova_design"
                    className={ isMobile ? "body-small" : "body-default" }>
                    Iryna Naumova
                </a>
            </p>
        </footer>
    )
}

export default Footer;