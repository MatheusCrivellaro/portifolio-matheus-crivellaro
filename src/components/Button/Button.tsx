import './Button.css'
import {ReactNode, useState} from "react";

type props = {
    children: ReactNode,
    size?: number,
    color?: boolean
    onClick?: () => void;
}

const Button = ({ onClick, children, size, color }: props) => {

    const [colorState, setColorState] = useState(color);

    const handleClick = () => {
        setColorState(!colorState);
        if (onClick) {
            onClick();
        }
    }

    const colorConfig = color ? (color ? 'button-white' : 'button-black') : 'button-black';
    let sizeConfig: string = "button-sm";

    if (size) {
        if (size === 1)
            sizeConfig = "button-xs";
        if (size === 2)
            sizeConfig = "button-sm";
        if (size === 3)
            sizeConfig = "button-md";
        if (size === 4)
            sizeConfig = "button-lg";
    }

    const classConfig = sizeConfig + " " + colorConfig

    return (
        <button className={`button-basic ${classConfig}`} onClick={onClick ? handleClick : undefined}>
            {children}
        </button>
    )
}

export default Button