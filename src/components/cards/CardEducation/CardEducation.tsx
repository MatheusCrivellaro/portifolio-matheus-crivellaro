import './CardEducation.css'
import {RxArrowTopRight} from "react-icons/rx";

type props = {
    title: string,
    description: string,
    link: string
}

const CardEducation = ({ title, description, link }: props) => {
    return (
        <div className="card-education">
            <div>
                <h1>{title}</h1>
                <h2>{description}</h2>
            </div>
            <div>
                <a className="education-button" href={link}>
                    <RxArrowTopRight />
                </a>
            </div>
        </div>
    )
}

export default CardEducation