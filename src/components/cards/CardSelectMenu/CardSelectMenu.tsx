import './CardSelectMenu.css'
import Button from "../../Button/Button.tsx";
import {RxArrowRight} from "react-icons/rx";
import {useContext} from "react";
import {TemaNavContext} from "../../../contexts/TemaNavContext.tsx";

type props = {
    name: string,
    number: string,
    margin?: boolean,
    href: string
}

const CardSelectMenu = ({ name, number, margin, href }:props) => {

    const contextoTema = useContext(TemaNavContext)

    return (
        <div className={`item-select-menu ${margin ? "margin-item-select-menu" : ""}`}>
            <div className="item-select-menu-title">
                <h1>{name}</h1>
                <h2>({number})</h2>
            </div>
            <a href={"/#" + href}>
                <Button size={3} color={false} border={true} onClick={contextoTema?.alternarTema}>
                    <RxArrowRight className="icon-container-select"/>
                </Button>
            </a>
        </div>
    )
}

export default CardSelectMenu