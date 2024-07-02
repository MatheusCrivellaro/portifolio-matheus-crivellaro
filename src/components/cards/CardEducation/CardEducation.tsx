import './CardEducation.css'
import {RxArrowTopRight} from "react-icons/rx";

const CardEducation = () => {
    return (
        <div className="card-education">
            <div>
                <h1>Sistemas de Informação</h1>
                <h2>2022 - FIAP</h2>
            </div>
            <div>
                <div className="education-button">
                    <RxArrowTopRight />
                </div>
            </div>
        </div>
    )
}

export default CardEducation