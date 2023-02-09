import React from "react";

function Nav(props){
    return (
        <nav>
            <div onClick={props.handleNavClick}>About</div>
            <div onClick={props.handleNavClick}>Education</div>
            <div onClick={props.handleNavClick}>Experience</div>
        </nav>
    )
}

export default Nav;