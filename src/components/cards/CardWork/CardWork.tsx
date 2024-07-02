import './CardWork.css'
import {RxArrowRight} from "react-icons/rx";
import Button from "../../Button/Button.tsx";

const CardWork = () => {
    return (
        <div className="card-work col-12 row">
            <div className="details-work col-md-5 order-2 order-md-1">
                <div>
                    <h1>Project</h1>
                    <h3>2023 - Product design</h3>
                    <h2>Developed an intuitive online streaming app that brings entertainment to users' fingertips. The
                        app offers a vast library of content, smooth playback, and personalized recommendations,
                        enhancing the user's streaming experience</h2>
                </div>
                <Button color={true} size={3}>
                    <RxArrowRight className="header-icon-container-works"/>
                </Button>
            </div>
            <div className="col-md-7 order-1 order-md-2">
                <img src="/pexels-vlada-karpovich-4450430.jpg" alt="" width="626" height="500"/>
            </div>
        </div>
    )
}

export default CardWork