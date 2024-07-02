import './Menu.css'
import CardSelectMenu from "../../components/cards/CardSelectMenu/CardSelectMenu.tsx";
import {RxArrowTopRight} from "react-icons/rx";

const Menu = () => {

    return (
        <div className="menu">
            <div className="div-selector-menu">
                <CardSelectMenu name={"Home"} number={"01"} margin={true} href="apresentation"/>
                <CardSelectMenu name={"About Me"} number={"02"} margin={true} href="about-me"/>
                <CardSelectMenu name={"Works"} number={"03"} margin={true} href="works"/>
                <CardSelectMenu name={"Insights"} number={"04"} margin={true} href="insights"/>
            </div>
            <div className="div-contacts-menu">
                <h3>Fallow me.</h3>
                <div className="div-links-contacts">
                    <div className="link-contacts">
                        <a href="">INSTAGRAM</a>
                        <RxArrowTopRight/>
                    </div>
                    <div className="link-contacts">
                        <a href="">LINKEDIN</a>
                        <RxArrowTopRight/>
                    </div>
                    <div className="link-contacts">
                        <a href="">GITHUB</a>
                        <RxArrowTopRight/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu