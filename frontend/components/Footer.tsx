import {useState, useEffect} from "react";
import {useRouter} from "next/router";
import calculateContainerSize from "@/composables/calculateContainerSize";
import SocialIcon, {SocialIconType} from "@/public/icons/SocialIcon";
import LinkedIn from "@/public/icons/LinkedIn";
import Github from "@/public/icons/Github";
import Gmail from "@/public/icons/Gmail";
import Download from "@/public/icons/Download";

const socialIcons: SocialIconType[] = [
    {
        children: LinkedIn,
        name: "linkedin",
        link: "https://www.linkedin.com/in/nicksaveliev/"
    },
    {
        children: Gmail,
        name: "gmail",
        link: "mailto:kolya59264@gmail.com"
    },
    {
        children: Github,
        name: "github",
        link: "https://github.com/FPyMEHTAPIU"
    }
]

const Footer = () => {
    const {isMobile} = calculateContainerSize();
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
                {socialIcons.map((icon) =>
                    <SocialIcon link={icon.link} name={icon.name} key={icon.name}>
                        {icon.children}
                    </SocialIcon>
                )}
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
                        {/*TODO: change CV*/}
                        <a href="/CV_Nick_Saveliev.pdf" className="text-button" download>
                            <p className="body-default">Download CV</p>
                            <Download />
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
                        <a href="/CV_Nick_Saveliev.pdf" className="text-button" download>
                            <p className="body-default">Download CV</p>
                            <Download />
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
                    style={{textDecoration: 'underline'}}
                    target="_blank" rel="noreferrer"
                >
                    Iryna Naumova
                </a>
            </p>
        </footer>
    )
}

export default Footer;