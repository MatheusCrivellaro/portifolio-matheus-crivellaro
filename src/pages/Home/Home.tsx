import './Home.css'
import ApresentationContainer from "../../components/containers/ApresentationContainer/ApresentationContainer.tsx";
import WorksContainer from "../../components/containers/WorksContainer/WorksContainer.tsx";
import CardWork from "../../components/cards/CardWork/CardWork.tsx";
import AboutMeContainer from "../../components/containers/AboutMeContainer/AboutMeContainer.tsx";
import EducationContainer from "../../components/containers/EducationContainer/EducationContainer.tsx";
import CardEducation from "../../components/cards/CardEducation/CardEducation.tsx";
import InsightsContainer from "../../components/containers/InsightsContainer/InsightsContainer.tsx";
import TellMeContainer from "../../components/containers/TellMeContainer/TellMeContainer.tsx";
import Footer from "../../components/containers/Footer/Footer.tsx";

const Home = () => {
    return (
        <div>
            <div className="container-home">
                <ApresentationContainer id="apresentation"/>
                <WorksContainer id="works">
                    <CardWork/>
                </WorksContainer>
                <AboutMeContainer id="about-me"/>
                <EducationContainer id="education">
                    <CardEducation title="Sistemas de Informação" description="2022 - FIAP" link="https://www.fiap.com.br/graduacao/bacharelado/sistemas-de-informacao/"/>
                    <CardEducation title="Formação Java e Spring Boot" description="2023 - Alura" link="https://cursos.alura.com.br/degree/certificate/5ed1452b-88a1-43c2-b7ec-bb2ec9d0deeb?lang=pt_BR"/>
                    <CardEducation title="RESTful APIs com Spring Boot 3, Java, Docker e AWS" description="2024 - Udemy" link="https://www.udemy.com/certificate/UC-a66bf113-9a94-4e0a-9f87-c7c3576256d4/"/>
                    <CardEducation title="React JS com TypeScript" description="2024 - Udemy" link="https://www.udemy.com/certificate/UC-f5c9d8a5-a363-41ab-ad68-98100b90c255/"/>
                    <CardEducation title="Java com Orientação a Objetos" description="2023 - Alura" link="https://cursos.alura.com.br/degree/certificate/3ab95cf2-90e1-4a8d-beff-0a774d79fe3f?lang=pt_BR"/>
                </EducationContainer>
                <InsightsContainer id="insights"/>
                <TellMeContainer id="tell-me"/>
            </div>
            <Footer id="footer"/>
        </div>
    )
}

export default Home