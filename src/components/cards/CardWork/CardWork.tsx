import './CardWork.css'
import Button from "../../Button/Button.tsx";
import {RxArrowRight} from "react-icons/rx";

const CardWork = () => {
    return (
        <div className="row card-work">
            <div className="card-work-details col-md-6 col-12 order-2 order-md-1">
                <div>
                    <h1>Project 1</h1>
                    <h2>2023 - Product design</h2>
                    <h3>Transformed an e-commerce website with a modern redesign, optimizing the shopping journey and elevating brand identity. Resulted in improved user engagement, increased sales, and a seamless shopping experience.</h3>
                </div>
                <div>
                    <Button size={3} color={true} expansive={true}>
                        <span>Saber mais</span>
                        <RxArrowRight className="card-work-details-icon"/>
                    </Button>
                </div>
            </div>
            <div className="card-work-img col-md-6 col-12 order-1 order-md-2" />
        </div>
    )
}

export default CardWork