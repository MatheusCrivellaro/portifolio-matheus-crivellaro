import './AboutMeContainer.css'
import Button from "../../Button/Button.tsx";
import {RxArrowRight} from "react-icons/rx";

type props = {
    id: string
}

const AboutMeContainer = ({ id }:props) => {
    return (
        <div className="container-aboutme row" id={id}>
            <h1 className="order-1">Developer BackEnd especializado em criar soluções digitais eficazes</h1>
            <h2 className="order-2 order-md-3 col-12 col-md-9">Como desenvolvedor BackEnd, meu papel é transformar suas ideias em soluções digitais funcionais e eficazes. Enquanto você se concentra em crescer seu negócio, eu cuido de todo o aspecto técnico, utilizando Java e Spring Boot para garantir que sua aplicação seja robusta, escalável e alinhada às suas necessidades.</h2>
            <div className="order-4">
                <Button color={true} size={3} expansive={true}>
                    <span>Sobre mim</span>
                    <RxArrowRight className="header-icon-container-works"/>
                </Button>
            </div>
            <div className="itens-aboutme order-3  col-12 col-md-3 row">
                <p className="col-6 col-md-12">API REST</p>
                <p className="col-6 col-md-12">SPRING BOOT</p>
                <p className="col-6 col-md-12">SITES RESPONSIVOS</p>
                <p className="col-6 col-md-12"  >SISTEMAS DE INFORMAÇÃO</p>
            </div>
        </div>
    )
}

export default AboutMeContainer
