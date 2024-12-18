const GitHubBlock = (link:string) => {
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

export default GitHubBlock;