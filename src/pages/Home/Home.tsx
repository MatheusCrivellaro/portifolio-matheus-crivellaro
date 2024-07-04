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
                    <CardEducation title="Sistemas de Informação" description="2022 - FIAP" link=""/>
                    <CardEducation title="Formação Java e Spring Boot" description="2023 - Alura" link=""/>
                    <CardEducation title="RESTful APIs com Spring Boot 3, Java, Docker e AWS" description="2024 - Udemy" link=""/>
                    <CardEducation title="React JS com TypeScript" description="2024 - Udemy" link=""/>
                </EducationContainer>
                <InsightsContainer id="insights"/>
                <TellMeContainer id="tell-me"/>
            </div>
            <Footer id="footer"/>
        </div>
    )
}

export default Home