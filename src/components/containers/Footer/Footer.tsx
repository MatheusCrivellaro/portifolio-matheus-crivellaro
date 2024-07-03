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
            <h1>portifólio.</h1>
            <h2>Me acompanhe nas demais redes!</h2>
            <div className="row">
                <div className="div-buttons-footer col-md-5 col-12">
                    <button className="button-footer col-6 col-md-12">
                        <IoLogoGithub className="icon-button-footer"/>
                        <a href="https://github.com/MatheusCrivellaro">GitHub</a>
                    </button>
                    <button className="button-footer col-6 col-md-12">
                        <FaLinkedin className="icon-button-footer"/>
                        <a href="https://www.linkedin.com/in/matheus-crivellaro/">Linkedin</a>
                    </button>
                    <button className="button-footer col-6 col-md-12">
                        <FaInstagram className="icon-button-footer"/>
                        <a href="https://www.instagram.com/matcriv_">Instagram</a>
                    </button>
                    <p className="button-footer col-6 col-md-12">
                        <MdOutlineAlternateEmail className="icon-button-footer"/>
                        <span>matheuscriv@gmail.com</span>
                    </p>
                </div>
                <div className="container-links-footer col-md-7 col-12">
                    <h3>Page list</h3>
                    <div className="div-page-list row">
                        <div className="col-md-3 col-6 group-link-footer">
                            <a href="" >Home 1</a>
                            <a href="" >Home 2</a>
                            <a href="" >Home 3</a>
                        </div>
                        <div className="col-md-3 col-6 group-link-footer">
                            <a href="" >About 1</a>
                            <a href="" >About 2</a>
                            <a href="" >About 3</a>
                        </div>
                        <div className="col-md-3 col-6 group-link-footer">
                            <a href="" >Works 1</a>
                            <a href="" >Works 2</a>
                            <a href="" >Works 3</a>
                        </div>
                        <div className="col-md-3 col-6 group-link-footer">
                            <a href="" >Insights</a>
                            <a href="" >Contacts</a>
                        </div>
                    </div>
                </div>
                <h4>©2023 All Rights Reserved.</h4>
            </div>
        </div>
    )
}

export default Footer