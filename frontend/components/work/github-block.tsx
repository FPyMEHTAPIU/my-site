import calculateContainerSize from "@/components/calculateContainerSize";

const GitHubBlock = (link:string) => {
    const {isMobile, isTablet} = calculateContainerSize();

    const MobileGithubBlock = () => {
        return (
            <div className="github-block">
                <div className="arrow-button">
                    <a href="/work">
                        <img src="/arrows/arrow_left_white24.svg" alt="back"/>
                    </a>
                    <a className="button-small" href={link} target="_blank">
                        <p className="body-small black">See on GitHub</p>
                        <img src="/arrows/arrow_right_black16.svg" alt="arrow-right"/>
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
                            alt="back"/>
                        <p className="body-default green">Back to all</p>
                    </a>
                    <a className="button-small" href={link} target="_blank">
                        <p className="body-small black">See on GitHub</p>
                        <img src="/arrows/arrow_right_black16.svg" alt="arrow-right"/>
                    </a>
                </div>
            </div>
        )
    }

    return {MobileGithubBlock, TabletDesktopGithubBlock}
}

export default GitHubBlock;