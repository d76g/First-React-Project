import React from 'react'
import {FaAlignJustify} from 'react-icons/fa'


function Navbar() {
    const [state, setState] = React.useState(true);

    return(
        <nav className="navbar">
            <div className="container">
                <div className="navbar-container">
                    <ul className="navbar-left">
                        <div className="navbar-left-logo">
                            <img src="./react.svg" alt="logo" />
                        </div>
                    </ul>
                    {state ? (
                        <ul className="navbar-right">
                            <li><a href="Home">Home</a></li>
                            <li><a href="Services">Services</a></li>
                            <li><a href="About">About</a></li>
                            <li><a href="Portfolio">Portfolio</a></li>
                            <li><a href="Skills">Skills</a></li>
                            <li><a href="Blog">Blog</a></li>
                            <li><a href="Contact">Contact</a></li>
                        </ul>
                    ) : (
                        "False"
                    )}
                </div>
            </div>
            <div className="toggle" onClick={() => setState(!state)}>
                <FaAlignJustify/>
                        
            </div>
        </nav>
    )
}
export default Navbar;