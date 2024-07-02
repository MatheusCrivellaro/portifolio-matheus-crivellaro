import './InsightsContainer.css'
import Button from "../../Button/Button.tsx";
import {RxArrowRight} from "react-icons/rx";
import {ReactNode} from "react";

type props = {
    children: ReactNode;
}

const InsightsContainer = ({ children }: props) => {
    return (
        <div className="insights-container">
            <div className="header-insights">
                <h1>Insights </h1>
                <Button size={3} color={true}>
                    <span>View All Insights</span>
                    <RxArrowRight className="header-icon-container-insights"/>
                </Button>
            </div>
            <div className="row">
                {children}
            </div>
        </div>
    )
}

export default InsightsContainer;