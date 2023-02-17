import React from 'react';
import githubLogo from '../assets/github-mark.png'

function Footer() {
    return (
        <footer>
            <a href='https:/github.com/rarAndy'>
                <img className='github-logo' src={githubLogo} alt='Github Logo'></img>
            </a>  
        </footer>
    );
}

export default Footer;