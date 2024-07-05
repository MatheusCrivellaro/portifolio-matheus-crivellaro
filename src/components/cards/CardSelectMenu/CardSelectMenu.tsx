import './CardSelectMenu.css'
import Button from "../../Button/Button.tsx";
import {RxArrowRight} from "react-icons/rx";
import {useContext} from "react";
import {TemaNavContext} from "../../../contexts/TemaNavContext.tsx";
import {Link} from "react-router-dom";

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
            <Link to={"/#" + href} className="item-select-menu-title">
                <h1>{name}</h1>
                <h2>({number})</h2>
            </Link>
            <Link to={"/#" + href} className="d-none d-md-block">
                <Button size={3} color={false} border={true} onClick={contextoTema?.alternarTema}>
                    <RxArrowRight className="icon-container-select"/>
                </Button>
            </Link>
        </div>
    )
}

export default CardSelectMenu