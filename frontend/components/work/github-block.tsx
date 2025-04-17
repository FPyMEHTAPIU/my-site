import calculateContainerSize from "@/composables/calculateContainerSize";

const GitHubBlock = (link:string) => {
    const {isTablet} = calculateContainerSize();

    const MobileGithubBlock = () => {
        return (
            <div className="github-block">
                <div className="arrow-button">
                    <a href="/work">
                        <img src="/arrows/arrow_left_white24.svg" loading="lazy" alt="back"/>
                    </a>
                    <a className="button-small" href={link} target="_blank" rel="noreferrer">
                        <p className="body-small black">See on GitHub</p>
                        <img src="/arrows/arrow_right_black16.svg" loading="lazy" alt="arrow-right"/>
                    </a>
                </div>
            </div>
        )
    }

    const TabletDesktopGithubBlock = () => {
        return (
            <div className="github-block">
                <div className="arrow-button">
                    <a href="/work" style={{display: 'flex', alignItems: 'center', gap: 24}}>
                        <img
                            src={isTablet ? "/arrows/arrow_left_green16.svg"
                                : "/arrows/arrow_left_green24.svg"}
                            loading="lazy"
                            alt="back"/>
                        <p className="body-default green">Back to all</p>
                    </a>
                    <a className="button-small" href={link} target="_blank" rel="noreferrer">
                        <p className="body-small black">See on GitHub</p>
                        <img src="/arrows/arrow_right_black16.svg" loading="lazy" alt="arrow-right"/>
                    </a>
                </div>
            </div>
        )
    }

    const GitHubButton = (link:string) => {
        return (
            <a className={isTablet ? "button-small last-button" : "button-primary last-button"}
               href={link} target="_blank" rel="noreferrer"
            >
                <p className={isTablet ? "body-small black" : "body-default black"}>See on GitHub</p>
                <img src="/arrows/arrow_right_black16.svg" loading="lazy" alt="arrow-right"/>
            </a>
        )
    }

    return {MobileGithubBlock, TabletDesktopGithubBlock, GitHubButton}
}

export default GitHubBlock;