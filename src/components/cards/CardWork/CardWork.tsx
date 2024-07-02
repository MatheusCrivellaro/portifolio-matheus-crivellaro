import './CardWork.css'
import {RxArrowRight} from "react-icons/rx";
import Button from "../../Button/Button.tsx";

const CardWork = () => {
    return (
        <div className="card-work col-12 col-xxl-6">
            <img src="/img-praia-gray_Prancheta%201.png" alt="" width="1056" height="512"/>
            <div className="details-work">
                <div>
                    <h1>Project</h1>
                    <h2>Description of project</h2>
                </div>
                <Button color={true} size={3}>
                    <RxArrowRight className="header-icon-container-works"/>
                </Button>
            </div>
        </div>
    )
}

export default CardWork