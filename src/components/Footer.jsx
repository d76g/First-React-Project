import React from "react";
import {FaFacebook, FaTwitter, FaGithub, FaInstagram} from 'react-icons/fa'
function Footer(){
    return(
        <div className="footer">
            <div className="container">
                <div className="footer-section">
                    <div className="row justifyCenter">
                        <div className="footer-content">
                            <div className="footer-section-logo">
                                <img src="./react.svg" alt="" />
                            </div>
                            <ul className="footer-circles">
                                <li className="footer-icon"><FaFacebook/></li>
                                <li className="footer-icon"><FaInstagram/></li>
                                <li className="footer-icon"><FaTwitter/></li>
                                <li className="footer-icon"><FaGithub/></li>
                            </ul>
                            <div className="copy-right-content">
                                <p className="copy-right">Copyright {new Date().getFullYear()} @ React </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;