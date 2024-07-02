import './InsightsContainer.css'
import Button from "../../Button/Button.tsx";
import {RxArrowRight} from "react-icons/rx";
import {ReactNode} from "react";

type props = {
    children: ReactNode;
    id: string
}

const InsightsContainer = ({ children, id }: props) => {
    return (
        <div className="insights-container row" id={id}>
            <h1 className="order-1 col-md-6">Insights</h1>
            <div className="div-button-insights order-3 order-md-2 col-md-6">
                <Button size={3} color={true} expansive={true}>
                    <span>View All Insights</span>
                    <RxArrowRight className="header-icon-container-insights"/>
                </Button>
            </div>
            <div className="cards-container-insight row order-2 order-md-3">
                {children}
            </div>
        </div>
    )
}

export default InsightsContainer;