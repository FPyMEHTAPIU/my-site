import React from "react";

const InputForm = (
    isMobile: boolean,
    isTablet: boolean
) => {
    const InputContainer = () => {
        return (
            <div className='input-container'>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <textarea
                    placeholder="Message"
                    style={ { height: isMobile || !isTablet ? 357 : 157 } }
                />
                <button
                    className="button-primary"
                    style= {
                        { width: isMobile || isTablet ? '100%' : 550,
                            justifySelf: 'stretch'}
                    }>
                    <p className="body-default black">Submit</p>
                </button>
            </div>
        )
    }

    const InputBlock = () => {
        return (
            isMobile ?
                <div className="get-in-touch">
                    <h1>Get In Touch</h1>
                    <p className="body-default" style={{textAlign: 'center'}}>
                        Orci varius natoque penatibus et magnis.
                     </p>{InputContainer()}
                </div>
                :
                <div className="input-block">
                    <div className="letter-block">
                        <div className="get-in-touch">
                            <h1 style={!isTablet ? {width: 520} : {}}>Get In Touch</h1>
                            <p className="body-default">
                                Orci varius natoque penatibus et magnis.
                            </p>
                        </div>
                        <img src="/letter.svg" alt="letter"/>
                    </div>
                    {InputContainer()}
                </div>
        )
    }

    return {InputBlock};
}

export default InputForm;