import './NavBar.css'
import { RxArrowRight } from "react-icons/rx";
import Button from "../Button/Button.tsx";
import {useLocation} from "react-router-dom";
import {useContext, useEffect } from "react";
import SuspenseButton from "../SuspenseButton/SuspenseButton.tsx";
import {TemaNavContext} from "../../contexts/TemaNavContext.tsx";

const NavBar = () => {

    const contextoTema = useContext(TemaNavContext);

    const location = useLocation();

    useEffect(() => {

        if (location.pathname === '/menu')
            contextoTema?.alternarTema();
    }, [location.pathname])

    return (
        <div>
            <nav
                className={`container-nav ${contextoTema?.tema==="escuro" ? "active-menu" : "deactivate-menu"}`}>
                <h1>portifólio.</h1>
                <div className={`div-nav-buttons ${contextoTema?.tema==="escuro" ? "active-menu" : "deactivate-menu"}`}>
                    <div className={`div-nav-button d-md-block d-none ${contextoTema?.tema==="escuro" ? "active-menu" : "deactivate-menu"}`}>
                        <Button color={contextoTema?.tema === "claro"} onClick={() => contextoTema?.alternarTema} border={false}>
                                <span
                                    className={`lets-button-nav button-child ${contextoTema?.tema === "escuro" ? "active-menu" : "deactivate-menu"}`}>Let´s talk</span>
                            <RxArrowRight
                                className={`lets-icon-nav button-child ${contextoTema?.tema === "escuro" ? "active-menu" : "deactivate-menu"}`}/>
                        </Button>
                    </div>
                    <div className={`div-nav-button ${contextoTema?.tema === "escuro" ? "active-menu" : "deactivate-menu"}`}>
                        <SuspenseButton />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar