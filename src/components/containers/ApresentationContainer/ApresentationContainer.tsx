import './ApresentationContainer.css'
import Button from "../../Button/Button.tsx";
import {RxArrowRight} from "react-icons/rx";

type props = {
    id: string
}

const ApresentationContainer = ({ id }:props) => {

    return (
        <div className="container-apresentation" id={id}>
            <h2>Hello! I´m Matheus</h2>
            <h1>Designing digital product with emphasis on <span>visual design</span></h1>
            <div className="sub-div-apresentation row">
                <div className="col-12 col-md-6 order-2 order-md-1">
                    <Button color={false} size={4} expansive={true}>
                        <span className="lets-button-apresentation">Let´s Talk</span>
                        <RxArrowRight className="lets-icon-apresentation"/>
                    </Button>
                </div>
                <p className="col-12 col-md-6 order-1 order-md-2">
                    A multidisciplinary designer harnessing the power of design to achieve online goals.
                </p>
            </div>
        </div>
    )
}

export default ApresentationContainer