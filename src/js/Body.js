import React from 'react';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Skills from './Skills';

const Body = (props) => {
    return(
        <div className="body">
            <About/>
            <Skills/>
            <Projects/>
        </div>
    )
};

export default Body;