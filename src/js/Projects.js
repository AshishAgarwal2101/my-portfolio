import React from 'react';
import Util from '../util/Util';
import data from '../data/data.json';

const Projects = (props) => {
    const getProjectBox = () => {
        return(
            <>
                {data.projects.map((project, index) => getProjectSingleBox(project, (index%2==1), (index==data.projects.length-1)))}
            </>
        )
    };

    const getProjectSingleBox = (project, isProjectNumberEven, isLastproject) => {
        const bubbleClasses = "solid-circle-medium project-bubble " + (isProjectNumberEven ? "left-project-bubble" : "right-project-bubble");
        return(
            <div>
                {isProjectNumberEven ? <div className="project-vl">{Util.getVerticalLine("white", "275px", "5px")}</div> : ""}
                {isProjectNumberEven ? <div className="project-vl-even-dummy invisible">{Util.getVerticalLine("white", "275px", "5px")}</div> : ""}
                <div className="project-box" style={{float: isProjectNumberEven ? "right" : "left"}}>
                    <div>{project.name}</div>
                    <div>{project.description}</div>
                    {project.link ? <div><u><a href={project.link} target="_blank">View Project Demo</a></u></div> : ""}
                    {project.paperPublicationLink ? <div><u><a href={project.paperPublicationLink} target="_blank">View Paper Publication</a></u></div> : ""}
                </div>
                <div className={isProjectNumberEven ? "right-project-line" : "left-project-line"}>
                    <div className={bubbleClasses}></div>
                    <span>{Util.getDummyLine("white", "100%", "2px")}</span>
                </div>
                {!isProjectNumberEven ? <div className="project-vl">{Util.getVerticalLine("white", "275px", "5px")}</div> : ""}
                {!isProjectNumberEven ? <div className="project-vl-odd-dummy invisible">{Util.getVerticalLine("white", "275px", "5px")}</div> : ""}
                {(isProjectNumberEven && isLastproject) ?? <div style={{marginBottom: "150px"}}></div>}
            </div>
        )
    };

    return(
        <div className="page projects" id="projects">
            <div className="page-header">Projects</div>
            {Util.getDummyLine("white", "400px")}

            <div className="page-content projects-content">
                {getProjectBox()}
            </div>

            
        </div>
    )
};

export default Projects;