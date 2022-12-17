import React from "react";

function About() {
    return(
        <div className="about">
            <div className="container">
                <div className="common">
                    <h1 className="about-title">About Me</h1>
                    <div className="underline-boarder">

                    </div>
                </div>
                <div className="row h-650 alignCenter">
                    <div className="col-6">
                        <div className="about-img">
                            <img src="./images/about.png" alt="" />
                        </div>
                    </div>
                
                <div className="col-6">
                    <div className="about-info">
                        <h1>Creative UI & UX Design <br /> based in New York, USA</h1>
                            <div className="about-info">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error libero ad itaque dicta porro tenetur, repudiandae modi dolorum sunt sit doloremque commodi mollitia, assumenda suscipit natus fugit. Unde deleniti nesciunt iusto consectetur nemo impedit expedita doloribus, veniam blanditiis soluta tempora ullam facilis officia perferendis natus nostrum totam! Asperiores, quaerat!</p>
                                <div className="about-buttons">
                                    <a href="#about" className="btn about-btn-outlined">
                                        Downlaod CV
                                    </a>
                                </div>
                            </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About;