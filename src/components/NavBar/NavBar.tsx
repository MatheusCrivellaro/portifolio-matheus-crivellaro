import './NavBar.css'
import { RxArrowRight } from "react-icons/rx";
import { CgMenu } from "react-icons/cg";
import Button from "../Button/Button.tsx";
import {NavLink, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > 200) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {

        if (location.pathname === '/menu')
            setIsOpen(true);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname])

    return (
        <nav className={`container-nav ${isSticky ? 'navbar-fixed-top' : ''} ${isOpen ? "active-menu" : "deactivate-menu"}`}>
            <h1>portifólio.</h1>
            <div className={`div-nav-buttons ${isOpen ? "active-menu" : "deactivate-menu"}`}>
                <div className={`div-nav-button ${isOpen ? "active-menu" : "deactivate-menu"}`}>
                    <NavLink to={isOpen ? "/" : "/menu"} className="text-decoration-none">
                        <Button color={!isOpen} onClick={()=>setIsOpen(!isOpen)}>
                            <span className={`lets-button-nav button-child ${isOpen ? "active-menu" : "deactivate-menu"}`}>Let´s talk</span>
                            <RxArrowRight className={`lets-icon-nav button-child ${isOpen ? "active-menu" : "deactivate-menu"}`}/>
                        </Button>
                    </NavLink>
                </div>
                <div className={`div-nav-button ${isOpen ? "active-menu" : "deactivate-menu"}`}>
                    <NavLink to={isOpen ? "/" : "/menu"} >
                        <Button color={!isOpen} onClick={()=>setIsOpen(!isOpen)}>
                            <CgMenu className={`menu-icon button-child ${isOpen ? "active-menu" : "deactivate-menu"}`}/>
                        </Button>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavBar