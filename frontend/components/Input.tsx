import React, {useState} from "react";
import useOverlay from "@/components/Overlay";

const errorMessage:string = 'This field is required!';

const InputForm = (
    isMobile: boolean,
    isDesktop1440:boolean,
    setIsOverlay: (isOverlay: boolean) => void,
    hideElements: boolean
) => {
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const {ShowOverlay} = useOverlay(setIsOverlay, isDesktop1440, hideElements);

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
                    <img src="/icons/error16.svg" alt="error" loading="lazy" style={{alignSelf: 'center'}}/>
                    <p className="error-text">{nameError}</p>
                </div> : <></>
        )
    }

    const Checkbox = () => {
        return (
            <div className="checkbox-container">
                <div className="checkbox">
                    <input name="Confirmation" type="checkbox" required/>
                </div>
                <p className="error-text white">
                    By clicking "Submit", you give me permission to store your data and contact you.
                    Your information will never be shared with others.
                </p>
            </div>
        )
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const json = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/api/submitForm", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(json),
            });

            const data = await response.json();

            if (response.ok) {
                ShowOverlay(e);
            } else {
                console.error("Error:", data);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const InputContainer = () => {
        return (
            <form action="https://api.web3forms.com/submit" method="POST" className='input-container'
                onSubmit={handleSubmit}
            >

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
                    required
                    onChange={() => setMessageError('')}
                    onBlur={(e) => checkValidity(e, setMessageError)}
                />
                {ErrorMessage(messageError)}
                {Checkbox()}
                <button
                    className="button-primary"
                    style={
                        {
                            width: '100%',
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
                        Searching for the last piece to perfect your team? Let’s chat — I might be the one!
                    </p>
                    {InputContainer()}
                </div>
                :
                <div className="input-block input-margin-top">
                    <div className="letter-block">
                        <div className="get-in-touch">
                            <h1>Get In Touch</h1>
                            <p className="body-default">
                                Searching for the last piece to perfect your team? Let’s chat — I might be the one!
                            </p>
                        </div>
                        <img src="/letter.svg" loading="lazy" alt="letter"/>
                    </div>
                    {InputContainer()}
                </div>
        )
    }

    return {InputBlock};
}

export default InputForm;