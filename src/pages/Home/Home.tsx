import './Home.css'
import ApresentationContainer from "../../components/containers/ApresentationContainer/ApresentationContainer.tsx";
import WorksContainer from "../../components/containers/WorksContainer/WorksContainer.tsx";
import CardWork from "../../components/cards/CardWork/CardWork.tsx";
import AboutMeContainer from "../../components/containers/AboutMeContainer/AboutMeContainer.tsx";
import EducationContainer from "../../components/containers/EducationContainer/EducationContainer.tsx";
import CardEducation from "../../components/cards/CardEducation/CardEducation.tsx";
import InsightsContainer from "../../components/containers/InsightsContainer/InsightsContainer.tsx";
import CardInsight from "../../components/cards/CardInsight/CardInsight.tsx";
import TellMeContainer from "../../components/containers/TellMeContainer/TellMeContainer.tsx";
import Footer from "../../components/containers/Footer/Footer.tsx";

const Home = () => {
    return (
        <div>
            <div className="container-home">
                <ApresentationContainer/>
                <WorksContainer>
                    <CardWork/>
                    <CardWork/>
                </WorksContainer>
                <AboutMeContainer/>
                <EducationContainer>
                    <CardEducation/>
                    <CardEducation/>
                    <CardEducation/>
                    <CardEducation/>
                </EducationContainer>
                <InsightsContainer>
                    <CardInsight/>
                    <CardInsight/>
                    <CardInsight/>
                    <CardInsight/>
                </InsightsContainer>
                <TellMeContainer/>
            </div>
            <Footer />
        </div>
    )
}

export default Home