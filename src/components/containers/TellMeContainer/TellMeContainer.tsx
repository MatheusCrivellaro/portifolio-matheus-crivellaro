import './TellMeContainer.css'

type props = {
    id: string
}

const TellMeContainer = ({ id }:props) => {
    return (
        <div className="container-tellme" id={id}>
            <div className="div-title-tellme">
                <h2>Tem uma ideia?</h2>
                <h1>Vamos fazer isso acontecer <span>juntos</span>!</h1>
            </div>
            <div className="links-tellme">
                <div className="sub-links-tellme col-md-4 col-9">
                    <a href="/#about-me">Sobre mim</a>
                    <a href="/#works">Projetos</a>
                    <a href="/#insights">Conhecimentos</a>
                </div>
            </div>
        </div>
    )
}

export default TellMeContainer;