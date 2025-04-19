import React from "react";

export type SocialIconType = {
    children: () => React.ReactNode;
    link: string;
    name: string;
};

const SocialIcon = (props: SocialIconType) => {
    return (
        <a href={props.link} target="_blank" rel="noreferrer" id={`${props.name}-icon`} className="social-icon">
            {props.children()}
        </a>
    )
}

export default SocialIcon