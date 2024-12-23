import InputForm from "@/components/input";
import calculateContainerSize from "@/components/calculateContainerSize";

const Contact = () => {
    const {isMobile, isTablet} = calculateContainerSize();
    const {InputBlock} = InputForm(isMobile, isTablet);

    return (
        <div style={{marginTop: isMobile ? "revert-layer" : isTablet ? 138 : 239}}>
            {InputBlock()}
        </div>

    )
}

export default Contact;