import React from "react";

function Nav(props){
    return (
        <nav>
            <div className='nav-tab' onClick={props.handleNavClick}>About</div>
            <div className='nav-tab' onClick={props.handleNavClick}>Education</div>
            <div className='nav-tab' onClick={props.handleNavClick}>Experience</div>
        </nav>
    )
}

export default Nav;