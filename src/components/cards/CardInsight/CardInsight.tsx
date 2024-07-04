import './CardInsight.css'

type props = {
    image: string,
    title: string,
    description: string
}

const CardInsight = ({ image, title, description }:props) => {
    return (
        <div className="card-insight col-12 col-lg-4">
            <div className="image-insight" style={{ backgroundImage: `url(${"/public/" +image})` }}/>
            <h1>{title}</h1>
            <h2>{description}</h2>
        </div>
    )
}

export default CardInsight