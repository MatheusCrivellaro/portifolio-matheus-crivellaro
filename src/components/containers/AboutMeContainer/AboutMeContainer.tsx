import './AboutMeContainer.css'
import Button from "../../Button/Button.tsx";
import {RxArrowRight} from "react-icons/rx";

type props = {
    id: string
}

const AboutMeContainer = ({ id }:props) => {
    return (
        <div className="container-aboutme row" id={id}>
            <h1 className="order-1">A visual designer focused on creating emotional digital experience</h1>
            <h2 className="order-2 order-md-3 col-12 col-md-9">Concentrate on your primary objective which is expanding your business, and leave it to me to ensure
                that your business is efficiently portrayed in the digital realm and distinguishes itself from the
                rivals.</h2>
            <div className="order-4">
                <Button color={true} size={3} expansive={true}>
                    <span>About me</span>
                    <RxArrowRight className="header-icon-container-works"/>
                </Button>
            </div>
            <div className="itens-aboutme order-3  col-12 col-md-3 row">
                <p className="col-6 col-md-12">UIUX</p>
                <p className="col-6 col-md-12">BRANDING</p>
                <p className="col-6 col-md-12">MOBILE APP</p>
                <p className="col-6 col-md-12"  >WEBSITE DESIGN</p>
            </div>
        </div>
    )
}

export default AboutMeContainer