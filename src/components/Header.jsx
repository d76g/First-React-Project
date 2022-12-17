import React from "react";

function Header() {
    return(
       <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="header-content">
                        <div className="header-section">
                            <h2>Hello, I am</h2>
                            <h1>Alina Parker</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vero, omnis commodi totam unde vitae!</p>
                            <div className="header-button">
                                <a href="header" className="btn btn-outlined">
                                    Hire me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <img src="./images/header-image.png" alt="" className="image" />
                </div>
            </div>
        </div>
       </header>
    )
}
export default Header;