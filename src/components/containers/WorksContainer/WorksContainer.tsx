import './WorksContainer.css'
import Button from "../../Button/Button.tsx";
import {RxArrowRight} from "react-icons/rx";
import {ReactNode} from "react";

type props = {
    children: ReactNode;
    id: string
}

const WorksContainer = ({ children, id }: props) => {
    return (
        <div className="container-works row" id={id}>
            <h1 className="col-12 col-md-6 order-1">Selected works</h1>
            <div className="col-12 col-md-6 order-4 order-md-2 div-button-works">
                <Button color={true} size={3} expansive={true}>
                    <span>
                        View All Works
                    </span>
                    <RxArrowRight className="header-icon-container-works"/>
                </Button>
            </div>
            <div className="row div-cards-works order-2 order-md-3">
                {children}
            </div>
        </div>
    )
}

export default WorksContainer