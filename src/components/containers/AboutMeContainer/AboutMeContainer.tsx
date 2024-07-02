import './AboutMeContainer.css'
import Button from "../../Button/Button.tsx";
import {RxArrowRight} from "react-icons/rx";

const AboutMeContainer = () => {
    return (
        <div className="container-aboutme row">
            <div className="sub-div-aboutme col-9">
                <h1>A visual designer focused on creating emotional digital experience</h1>
                <h2>Concentrate on your primary objective which is expanding your business, and leave it to me to ensure that your business is efficiently portrayed in the digital realm and distinguishes itself from the rivals.</h2>
                <Button color={true} size={3}>
                    <span>About me</span>
                    <RxArrowRight className="header-icon-container-works"/>
                </Button>
            </div>
            <div className="itens-aboutme col-3">
                <p>UIUX</p>
                <p>BRANDING</p>
                <p>MOBILE APP</p>
                <p>WEBSITE DESIGN</p>
            </div>
        </div>
    )
}

export default AboutMeContainer