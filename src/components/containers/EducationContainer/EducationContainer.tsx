import './EducationContainer.css'
import {ReactNode} from "react";

type props = {
    children: ReactNode
    id: string
}

const EducationContainer = ({ children, id }: props) => {
    return (
        <div className="container-education row" id={id}>
            <div className="div-title col-12 col-md-4">
                <h1>Education & Courses</h1>
            </div>
            <div className="div-card-insights col-12 col-md-8">
                {children}
            </div>
        </div>
    )
}

export default EducationContainer;