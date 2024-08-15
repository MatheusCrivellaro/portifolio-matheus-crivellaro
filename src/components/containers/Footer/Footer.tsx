import './Footer.css'
import {IoLogoGithub} from "react-icons/io";
import {FaInstagram, FaLinkedin} from "react-icons/fa";
import {MdOutlineAlternateEmail} from "react-icons/md";

type props = {
    id: string
}

const Footer = ({ id }:props) => {
    return (
        <div className="container-footer" id={id}>
            <h1><img src="../../../../public/Ativo%202.png" alt="" className="logo-footer"/> portifólio.</h1>
            <h2>Me acompanhe nas demais redes!</h2>
            <div className="row">
                <div className="div-buttons-footer col-md-5 col-12">
                    <a className="button-footer col-6 col-md-12" href="https://github.com/MatheusCrivellaro" target="_blank">
                        <IoLogoGithub className="icon-button-footer"/>
                        <span>GitHub</span>
                    </a>
                    <a className="button-footer col-6 col-md-12"  href="https://www.linkedin.com/in/matheus-crivellaro/" target="_blank">
                        <FaLinkedin className="icon-button-footer"/>
                        <span>Linkedin</span>
                    </a>
                    <a className="button-footer col-6 col-md-12"  href="https://www.instagram.com/matcriv_" target="_blank">
                        <FaInstagram className="icon-button-footer"/>
                        <span>Instagram</span>
                    </a>
                    <p className="button-footer col-6 col-md-12">
                        <MdOutlineAlternateEmail className="icon-button-footer"/>
                        <span>matheuscriv@gmail.com</span>
                    </p>
                </div>
                <div className="container-links-footer col-md-7 col-12">
                    <h3>Page list</h3>
                    <div className="div-page-list row">
                        <div className="col-md-3 col-6 group-link-footer">
                            <a href="/#apresentation">Home</a>
                            <a href="/#about-me">Sobre mim</a>
                            <a href="/#insights">Insights</a>
                        </div>
                        <div className="col-md-3 col-6 group-link-footer">
                            <a href="" >Works 1</a>
                            <a href="" >Works 2</a>
                            <a href="" >Works 3</a>
                        </div>
                        <div className="col-md-3 col-6 group-link-footer">
                            <a href="/#footer" >Contacts</a>
                        </div>
                    </div>
                </div>
                <h4>©2023 All Rights Reserved.</h4>
            </div>
        </div>
    )
}

export default Footer
