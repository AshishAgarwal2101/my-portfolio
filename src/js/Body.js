import React from 'react';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';

const Body = (props) => {
    return(
        <div className="body">
            <About/>
            <Skills/>
            <Projects/>
            <Experience/>
        </div>
    )
};

export default Body;