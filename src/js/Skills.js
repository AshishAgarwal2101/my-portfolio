import React from 'react';
import Util from '../util/Util';
import data from '../data/data.json';

const Skills = (props) => {
    const skillContentList = data.skills.map((skillData) => {
        return(
            <>
                <div className="skill-name">
                    {skillData.name}
                    <div className="skill-bar">
                        <div style={{width: (skillData.percentage*0.85) + "%"}}></div>
                        <div className="skill-percentage">{(skillData.percentage) + "%"}</div>
                    </div>
                </div>
            </>
        );
    });

    return(
        <div className="page skills" id="skills">
            <div className="page-header">Technical Skills</div>
            {Util.getDummyLine("white", "600px")}

            <div className="page-content skills-content">
                <div className="skills-name-list">
                    {skillContentList}
                </div>
            </div>
        </div>
    )
};

export default Skills;