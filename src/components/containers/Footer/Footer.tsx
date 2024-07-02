import './Footer.css'

const Footer = () => {
    return (
        <div className="container-footer">
            <h1>portifólio.</h1>
            <h2>A stunning digital designer portfolio website template for you.</h2>
            <div className="row">
                <div className="div-buttons-footer col-5">
                    <button className="button-footer">GitHub</button>
                    <button className="button-footer">Linkedin</button>
                    <button className="button-footer">Instagram</button>
                </div>
                <div className="container-links-footer col-7">
                    <h3>Page list</h3>
                    <div className="div-page-list row">
                        <a href="" className="col-3">Home 1</a>
                        <a href="" className="col-3">Home 2</a>
                        <a href="" className="col-3">Home 3</a>
                        <a href="" className="col-3">About 1</a>
                        <a href="" className="col-3">About 2</a>
                        <a href="" className="col-3">About 3</a>
                        <a href="" className="col-3">Works 1</a>
                        <a href="" className="col-3">Works 2</a>
                        <a href="" className="col-3">Works 3</a>
                        <a href="" className="col-3">Insights</a>
                        <a href="" className="col-3">Contacts</a>
                    </div>
                </div>
                <h4>©2023 All Rights Reserved. Designed with 🤍</h4>
            </div>
        </div>
    )
}

export default Footer