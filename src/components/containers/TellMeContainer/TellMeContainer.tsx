import './TellMeContainer.css'

type props = {
    id: string
}

const TellMeContainer = ({ id }:props) => {
    return (
        <div className="container-tellme" id={id}>
            <div className="div-title-tellme">
                <h2>Have an idea?</h2>
                <h1>Let’s rock <span>with me</span></h1>
            </div>
            <div className="links-tellme">
                <div className="sub-links-tellme col-md-4 col-9">
                    <a href="/#about-me">ABOUT ME</a>
                    <a href="/#works">WORKS</a>
                    <a href="/#insights">INSIGHTS</a>
                </div>
            </div>
        </div>
    )
}

export default TellMeContainer;