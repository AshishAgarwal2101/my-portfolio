import React from 'react';
import data from '../data/data.json';

const Header = (props) => {
    const headerStyles = {
        
    };
    return(
        <div className="header" style={{backgroundColor: data.header.backgroundColor, color: data.header.fontPrimaryColor}}>
            <div className="header-left">
                <div>{data.firstName}</div>
                <div>{data.lastName}</div>
            </div>

            <div className="header-right">
                <span><a href="#about">ABOUT ME</a></span>
                <span><a href="#skills">SKILLS</a></span>
                <span><a href="#projects">PROJECTS</a></span>
                <span><a href="/downloadable/resume.pdf" target="_blank">RESUME</a></span>
            </div>
        </div>
    )
};

export default Header;