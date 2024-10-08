import './InsightsContainer.css'
import {RxArrowRight} from "react-icons/rx";
import {useState} from "react";
import insights_image_1 from "../../../images/pexels-luis-gomes-166706-546819.jpg"
import insights_image_2 from "../../../images/pexels-pavel-danilyuk-5496463.jpg"
import insights_image_3 from "../../../images/pexels-goumbik-574073.jpg"
import insights_image_4 from "../../../images/pexels-goumbik-574077.jpg"
import insights_image_5 from "../../../images/pexels-cookiecutter-1148820.jpg"
import insights_image_6 from "../../../images/pexels-negativespace-92904.jpg"
import Button from "../../Button/Button.tsx";

type props = {
    id: string
}

const InsightsContainer = ({id}: props) => {

    const [openMore, setOpenMore] = useState(true);

    const handleClick = () => {
        if (openMore!)
            window.location.hash = "insightsmorecontainer";
        else
            window.location.hash = id;
        setOpenMore(prevState => !prevState);
    }

    return (
        <div className="insights-container row" id={id}>
            <h1 className="order-1 col-md-6">Insights</h1>
            <div className="div-button-insights order-4 order-md-2 col-md-6">
                <a data-bs-toggle="collapse" href="/#insightsmorecontainer" role="button" aria-expanded="false"
                   aria-controls="insightsmorecontainer" onClick={handleClick}>
                    <Button size={3} color={true} expansive={true}>
                        <span>Ver todos os Insights</span>
                        <RxArrowRight className="header-icon-container-insights"/>
                    </Button>
                </a>
            </div>
            <div className="cards-container-insight row order-2 order-md-3">
                <div className="card-insight col-12 col-lg-4">
                    <img className="image-insight" src={insights_image_1} alt=""/>
                    <h1>Desenvolvimento de APIs RESTful com SpringBoot</h1>
                    <h2>Conhecimento na criação de APIs RESTful utilizando Spring Boot. Capacidade de definir endpoints,
                        implementar lógica de negócios e gerenciar bancos de dados. Familiaridade com conceitos de
                        segurança, autenticação e autorização de APIs.</h2>
                </div>
                <div className="card-insight col-12 col-lg-4">
                    <img className="image-insight" src={insights_image_2} alt=""/>
                    <h1>Programação em Java</h1>
                    <h2>Competência em programação Java, com experiência prática em projetos pessoais e acadêmicos.
                        Capacidade de utilizar frameworks como Spring e Hibernate, aplicando boas práticas de
                        programação orientada a objetos.</h2>
                </div>
                <div className="card-insight col-12 col-lg-4">
                    <img className="image-insight" src={insights_image_3} alt=""/>
                    <h1>Desenvolvimento Frontend com React e TypeScript</h1>
                    <h2>Experiência no desenvolvimento de aplicações frontend com React em projetos pessoais. Capacidade
                        de criar interfaces dinâmicas e responsivas, integrando-se com APIs e usando Redux para
                        gerenciamento de estado.</h2>
                </div>
            </div>
            <div id="insightsmorecontainer" className="collapse cards-container-insight row order-3 order-md-4">
                <div className="card-insight col-12 col-lg-4">
                    <img className="image-insight" src={insights_image_4} alt=""/>
                    <h1>Proficiente em Bancos de Dados</h1>
                    <h2> Familiaridade com bancos de dados relacionais e não relacionais. Experiência na criação e
                        gerenciamento de tabelas, execução de consultas SQL, e otimização de desempenho. Conhecimento
                        prático em sistemas como MySQL, PostgreSQL e MongoDB, adquirido através de estudos e projetos
                        pessoais.</h2>
                </div>
                <div className="card-insight col-12 col-lg-4">
                    <img className="image-insight" src={insights_image_5} alt=""/>
                    <h1>Integração de APIs</h1>
                    <h2>Experiência em consumir APIs de terceiros para integrar funcionalidades diversas em aplicações
                        web. Habilidade em utilizar bibliotecas como Axios e Fetch para realizar requisições HTTP e
                        manipular dados recebidos, aplicada em projetos de estudo e pessoais.</h2>
                </div>
                <div className="card-insight col-12 col-lg-4">
                    <img className="image-insight" src={insights_image_6} alt=""/>
                    <h1>Conhecimento em Python e C#</h1>
                    <h2>Conhecimento básico em Python e C#, adquirido através de estudos e pequenos projetos pessoais.
                        Familiaridade com a sintaxe de ambas as linguagens e compreensão de conceitos fundamentais, como
                        estruturas de dados e controle de fluxo.</h2>
                </div>
            </div>
        </div>
    )
}

export default InsightsContainer;
