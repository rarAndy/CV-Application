import React from "react";

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <div onClick={this.props.handleNavClick}>About</div>
                <div onClick={this.props.handleNavClick}>Education</div>
                <div onClick={this.props.handleNavClick}>Experience</div>
            </nav>
        )
    }
}

export default Nav;