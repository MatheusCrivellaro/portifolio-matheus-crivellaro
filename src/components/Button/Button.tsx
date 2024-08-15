import './Button.css'
import {ReactNode} from "react";

type props = {
    children: ReactNode,
    size?: number,
    color?: boolean
    onClick?: () => void;
    border?: boolean
    expansive?: boolean
}

const Button = ({ onClick, children, size, color, border, expansive }: props) => {

    const colorConfig = color ? (color ? 'button-white' : 'button-black') : 'button-black';
    const borderConfig = border ? 'button-border-white' : 'button-border-black';
    const expansiveConfig = expansive ? "button-expansive" : "button-not-expansive";
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

    const classConfig = sizeConfig + " " + colorConfig + " " + borderConfig + " " + expansiveConfig

    return (
        <button className={`button-basic ${classConfig}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
