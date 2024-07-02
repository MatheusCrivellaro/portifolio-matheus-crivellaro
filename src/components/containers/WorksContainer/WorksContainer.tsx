import './WorksContainer.css'
import Button from "../../Button/Button.tsx";
import {RxArrowRight} from "react-icons/rx";
import {ReactNode} from "react";

type props = {
    children: ReactNode;
}

const WorksContainer = ({ children }: props) => {
    return (
        <div className="container-works">
            <div className="header-works">
                <h1>Selected works</h1>
                <Button color={true} size={3}>
                    <span>
                        View All Works
                    </span>
                    <RxArrowRight className="header-icon-container-works"/>
                </Button>
            </div>
            <div className="row div-cards-works">
                {children}
            </div>
        </div>
    )
}

export default WorksContainer