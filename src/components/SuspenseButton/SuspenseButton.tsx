import './SuspenseButton.css'
import Button from "../Button/Button.tsx";
import {NavLink, useLocation} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {CgMenu} from "react-icons/cg";
import {TemaNavContext} from "../../contexts/TemaNavContext.tsx";

const SuspenseButton = () => {

    const contextoTema = useContext(TemaNavContext)

    const location = useLocation();

    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > 45) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {

        if (location.pathname === '/menu')
            contextoTema?.alternarTema();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname])

    return (
        <NavLink to={contextoTema?.tema==="escuro" ? "/" : "/menu"} className={`text-decoration-none button-suspense ${isSticky ? "active-button-suspense" : "deactive-button-suspense"}`}>
            <Button color={contextoTema?.tema==="claro"} onClick={() => contextoTema?.alternarTema()} border={false}>
                <CgMenu
                    className={`menu-icon button-child ${contextoTema?.tema==="escuro" ? "active-menu" : "deactivate-menu"}`}/>
            </Button>
        </NavLink>
    )
}

export default SuspenseButton