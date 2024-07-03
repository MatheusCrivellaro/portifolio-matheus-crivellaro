import './Menu.css'
import CardSelectMenu from "../../components/cards/CardSelectMenu/CardSelectMenu.tsx";
import {RxArrowTopRight} from "react-icons/rx";

const Menu = () => {

    return (
        <div className="menu">
            <div className="div-selector-menu">
                <CardSelectMenu name={"Home"} number={"01"} margin={true} href="apresentation"/>
                <CardSelectMenu name={"Sobre mim"} number={"02"} margin={true} href="about-me"/>
                <CardSelectMenu name={"Projetos"} number={"03"} margin={true} href="works"/>
                <CardSelectMenu name={"Insights"} number={"04"} margin={true} href="insights"/>
            </div>
            <div className="div-contacts-menu">
                <h3>Me siga.</h3>
                <div className="div-links-contacts row">
                    <a className="link-contacts col-6 col-md-4" href="">
                        <p>INSTAGRAM</p>
                        <RxArrowTopRight className="icon-link-contacts"/>
                    </a>
                    <a className="link-contacts col-6 col-md-4" href="">
                        <p>LINKEDIN</p>
                        <RxArrowTopRight className="icon-link-contacts"/>
                    </a>
                    <a className="link-contacts col-6 col-md-4" href="">
                        <p>GITHUB</p>
                        <RxArrowTopRight className="icon-link-contacts"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Menu