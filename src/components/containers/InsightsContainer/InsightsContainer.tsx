import './InsightsContainer.css'
import Button from "../../Button/Button.tsx";
import {RxArrowRight} from "react-icons/rx";
import CardInsight from "../../cards/CardInsight/CardInsight.tsx";
import {useState} from "react";

type props = {
    id: string
}

const InsightsContainer = ({ id }: props) => {

    const [openMore, setOpenMore] = useState(true);

    const handleClick = () => {
        if (openMore!)
            window.location.hash = "insightsmorecontainer";
        setOpenMore(prevState => !prevState);
    }

    return (
        <div className="insights-container row" id={id}>
            <h1 className="order-1 col-md-6">Insights</h1>
            <div className="div-button-insights order-4 order-md-2 col-md-6">
                <a data-bs-toggle="collapse" href="#insightsmorecontainer" role="button" aria-expanded="false" aria-controls="insightsmorecontainer" onClick={handleClick}>
                    <Button size={3} color={true} expansive={true}>
                        <span>Ver todos os Insights</span>
                        <RxArrowRight className="header-icon-container-insights"/>
                    </Button>
                </a>
            </div>
            <div className="cards-container-insight row order-2 order-md-3">
                <CardInsight
                    image="pexels-tranmautritam-326502.jpg"
                    title="Desenvolvimento de APIs RESTful com SpringBoot"
                    description="Conhecimento na criação de APIs RESTful utilizando Spring Boot. Capacidade de definir endpoints, implementar lógica de negócios e gerenciar bancos de dados. Familiaridade com conceitos de segurança, autenticação e autorização de APIs."
                />
                <CardInsight
                    image="pexels-pavel-danilyuk-5496463.jpg"
                    title="Programação em Java"
                    description="Competência em programação Java, com experiência prática em projetos pessoais e acadêmicos. Capacidade de utilizar frameworks como Spring e Hibernate, aplicando boas práticas de programação orientada a objetos."
                />
                <CardInsight
                    image="pexels-luis-gomes-166706-546819.jpg"
                    title="Desenvolvimento Frontend com React e TypeScript"
                    description="Experiência no desenvolvimento de aplicações frontend com React em projetos pessoais. Capacidade de criar interfaces dinâmicas e responsivas, integrando-se com APIs e usando Redux para gerenciamento de estado."
                />
            </div>
            <div id="insightsmorecontainer" className="collapse cards-container-insight row order-3 order-md-4">
                <CardInsight
                    image="pexels-goumbik-574077.jpg"
                    title="Desenvolvimento de Sites Responsivos"
                    description="Habilidade em criar websites que se adaptam a diferentes dispositivos e tamanhos de tela, garantindo uma boa experiência de usuário. Conhecimento em HTML, CSS, e frameworks como Bootstrap para design responsivo, aplicado em projetos pessoais."
                />
                <CardInsight
                    image="pexels-goumbik-574073.jpg"
                    title="Integração de APIs"
                    description="Experiência em consumir APIs de terceiros para integrar funcionalidades diversas em aplicações web. Habilidade em utilizar bibliotecas como Axios e Fetch para realizar requisições HTTP e manipular dados recebidos, aplicada em projetos de estudo e pessoais."
                />
                <div className="card-insight col-12 col-lg-4">
                    <div className="image-insight" style={{backgroundImage: `url("/public/pexels-cookiecutter-1148820.jpg")`}}/>
                    <h1>Conhecimento em Python e C#</h1>
                    <h2>Conhecimento básico em Python e C#, adquirido através de estudos e pequenos projetos pessoais. Familiaridade com a sintaxe de ambas as linguagens e compreensão de conceitos fundamentais, como estruturas de dados e controle de fluxo.</h2>
                </div>
                <CardInsight
                    image="pexels-cookiecutter-1148820.jpg"
                    title="Conhecimento em Python e C#"
                    description="Conhecimento básico em Python e C#, adquirido através de estudos e pequenos projetos pessoais. Familiaridade com a sintaxe de ambas as linguagens e compreensão de conceitos fundamentais, como estruturas de dados e controle de fluxo."
                />
            </div>
        </div>
    )
}

export default InsightsContainer;