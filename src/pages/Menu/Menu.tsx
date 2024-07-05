import './Menu.css'
import {RxArrowRight, RxArrowTopRight} from "react-icons/rx";
import Button from "../../components/Button/Button.tsx";
import {useContext} from "react";
import {TemaNavContext} from "../../contexts/TemaNavContext.tsx";

const Menu = () => {

    const contextoTema = useContext(TemaNavContext)

    return (
        <div className="menu">
            <div className="div-selector-menu">
                <div className="item-select-menu margin-item-select-menu">
                    <a className="item-select-menu-title" href="/#apresentation">
                        <h1>Home</h1>
                        <h2>(01)</h2>
                    </a>
                    <a href="/#apresentation" className="d-none d-md-block">
                        <Button size={3} color={false} border={true} onClick={contextoTema?.alternarTema}>
                            <RxArrowRight className="icon-container-select"/>
                        </Button>
                    </a>
                </div>
                <div className="item-select-menu margin-item-select-menu">
                    <a className="item-select-menu-title" href="..#about-me">
                        <h1>Sobre mim</h1>
                        <h2>(02)</h2>
                    </a>
                    <a href="/#about-me" className="d-none d-md-block">
                        <Button size={3} color={false} border={true} onClick={contextoTema?.alternarTema}>
                            <RxArrowRight className="icon-container-select"/>
                        </Button>
                    </a>
                </div>
                <div className="item-select-menu margin-item-select-menu">
                    <a className="item-select-menu-title" href="/#works">
                        <h1>Projetos</h1>
                        <h2>(03)</h2>
                    </a>
                    <a href="/#works" className="d-none d-md-block">
                        <Button size={3} color={false} border={true} onClick={contextoTema?.alternarTema}>
                            <RxArrowRight className="icon-container-select"/>
                        </Button>
                    </a>
                </div>
                <div className="item-select-menu margin-item-select-menu">
                    <a className="item-select-menu-title" href="/#insights">
                        <h1>Insights</h1>
                        <h2>(04)</h2>
                    </a>
                    <a href="/#insights" className="d-none d-md-block">
                        <Button size={3} color={false} border={true} onClick={contextoTema?.alternarTema}>
                            <RxArrowRight className="icon-container-select"/>
                        </Button>
                    </a>
                </div>
            </div>
            <div className="div-contacts-menu">
                <h3>Me siga.</h3>
                <div className="div-links-contacts row">
                    <a className="link-contacts col-6 col-md-4" href="https://www.instagram.com/matcriv_">
                        <p>INSTAGRAM</p>
                        <RxArrowTopRight className="icon-link-contacts"/>
                    </a>
                    <a className="link-contacts col-6 col-md-4" href="https://www.linkedin.com/in/matheus-crivellaro/">
                        <p>LINKEDIN</p>
                        <RxArrowTopRight className="icon-link-contacts"/>
                    </a>
                    <a className="link-contacts col-6 col-md-4" href="https://github.com/MatheusCrivellaro">
                        <p>GITHUB</p>
                        <RxArrowTopRight className="icon-link-contacts"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Menu