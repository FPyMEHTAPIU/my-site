import React, {useState} from "react";

const errorMessage:string = 'This field is required!';

const InputForm = (
    isMobile: boolean,
    isTablet: boolean
) => {
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');

    const checkValidity = (
        e:React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
        setError: (message:string) => void,
    ) => {
        const inputField:string = e.target.value;
        const inputElement = e.target

        if (!inputElement || inputField === undefined) return ;
        if (!inputField.length) {
            inputElement.classList.add('input-error')
            setError(errorMessage);
        } else {
            inputElement.classList.remove('input-error')
            setError('');
        }
    }

    const ErrorMessage = (nameError:string) => {
        return (
            nameError ?
                <div className="error-message-block">
                    <img src="/icons/error16.svg" alt="error"/>
                    <p className="error-text">{nameError}</p>
                </div> : <></>
        )
    }

    const InputContainer = () => {
        return (
            <form action="https://api.web3forms.com/submit" method="POST" className='input-container'>
                <input type="hidden" name="access_key" value="ACCESS_KEY"/> {/*TODO: change ACCESS_KEY*/}

                <input name="Name" type="text" placeholder="Name" required
                       onChange={() => setNameError('')}
                       onBlur={(e) => checkValidity(e, setNameError)}
                />
                {ErrorMessage(nameError)}
                <input name="Email" type="email" placeholder="Email" required
                       onChange={() => setEmailError('')}
                       onBlur={(e) => checkValidity(e, setEmailError)}
                />
                {ErrorMessage(emailError)}
                <textarea
                    name="Message"
                    placeholder="Message"
                    style={{height: isMobile || !isTablet ? 357 : 157}}
                    required
                    onChange={() => setMessageError('')}
                    onBlur={(e) => checkValidity(e, setMessageError)}
                />
                {ErrorMessage(messageError)}

                <input type="hidden" name="redirect" value="https://web3forms.com/success"/>
                {/*<input name="Confirmation" type="checkbox" required/>*/}
                <button
                    className="button-primary"
                    style={
                        {
                            width: isMobile || isTablet ? '100%' : 550,
                            justifySelf: 'stretch'
                        }
                    }
                    type="submit"
                >
                    <p className="body-default black">Submit</p>
                </button>
            </form>
        )
    }

    const InputBlock = () => {
        return (
            isMobile ?
                <div className="get-in-touch">
                    <h1>Get In Touch</h1>
                    <p className="body-default" style={{textAlign: 'center'}}>
                        Orci varius natoque penatibus et magnis.
                    </p>
                    {InputContainer()}
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