import {FormEvent} from "react";

const useOverlay = (
    setIsOverlay: (isOverlay: boolean) => void,
    isDesktop1440:boolean,
    hideElements: boolean
) => {

    const CloseOverlay = () => {
        if (hideElements) {
            const header = document.querySelector("header") as HTMLElement | null;
            const footer = document.querySelector("footer") as HTMLElement | null;
            if (header) header.style.display = 'flex';
            if (footer) footer.style.display = 'flex';
        }
        document.body.style.overflow = 'revert';
        setIsOverlay(false);
    }

    const ShowOverlay = (
        e:FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        setIsOverlay(true);
        if (hideElements) {
            const header = document.querySelector("header") as HTMLElement | null;
            const footer = document.querySelector("footer") as HTMLElement | null;
            if (header) header.style.display = 'none';
            if (footer) footer.style.display = 'none';
        }
        document.body.style.overflow = "hidden";
    }

    const SubmitOverlay = () => {
        return (
            <div className="overlay" onClick={(e) => {
                if (e.currentTarget === e.target) CloseOverlay()
            }}>
                <div className="overlay-block">
                    <div className="overlay-content">
                        {isDesktop1440 ?
                            <h2 style={{textAlign: "center"}}>Thanks for reaching out!</h2>
                            :
                            <h1 style={{textAlign: "center"}}>Thanks for reaching out!</h1>
                        }
                        <p className="body-default" style={{textAlign: "center"}}>
                            You message just showed up in my inbox. Talk to you soon!
                        </p>
                    </div>
                    <a href="/" className="button-small" onClick={(e) => {
                        if (e.currentTarget === e.target) CloseOverlay()
                    }}>
                        <p className={isDesktop1440 ?'body-default black' : 'body-small black' }>
                            Back to Homepage
                        </p>
                        <img src="/arrows/arrow_right_black24.svg" alt="arrow"/>
                    </a>
                </div>
            </div>
        )
    }

    return {ShowOverlay, SubmitOverlay}
}

export default useOverlay;