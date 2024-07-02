import './EducationContainer.css'
import {ReactNode} from "react";

type props = {
    children: ReactNode
}

const EducationContainer = ({ children }: props) => {
    return (
        <div className="container-education row">
            <div className="div-title col-4">
                <h1>Education & Courses</h1>
            </div>
            <div className="col-8">
                {children}
            </div>
        </div>
    )
}

export default EducationContainer;