import InputForm from "@/components/input";
import calculateContainerSize from "@/composables/calculateContainerSize";
import {useState} from "react";
import useOverlay from "@/components/overlay";

const Contact = () => {
    const {isMobile, isTablet, isDesktop1440} = calculateContainerSize();
    const [isOverlay, setIsOverlay] = useState<boolean>(false);
    const {InputBlock} = InputForm(isMobile, isDesktop1440, setIsOverlay, false);
    const {SubmitOverlay} = useOverlay(setIsOverlay, isDesktop1440, false);

    return (
        <div style={{marginTop: isMobile ? "revert-layer" : isTablet ? 137 : isDesktop1440 ? 169 : 213,
            marginBottom: isDesktop1440 ? -44 : 0
        }}>
            {InputBlock()}
            {isOverlay && SubmitOverlay()}
        </div>
    )
}

export default Contact;