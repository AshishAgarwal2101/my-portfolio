import React from 'react';
import data from '../data/data.json';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Util from '../util/Util';

const About = (props) => {
    const aboutBlock = () => {
        return(
            <div className="about-block">
                <div className="about-block-left">
                    <div className="about-block-left-text">
                        <div>{data.firstName}</div>
                        <div>{data.lastName}</div>
                    </div>

                    <span style={{position: "relative", top: "110px"}}>{Util.getDummyLine("#666666", "50px")}</span>
                    <div className="linked-in-github-icon">
                        <a href={data.linkedInUrl} target="_blank"><LinkedInIcon fontSize="large"/></a>
                        <a href={data.githubUrl} target="_blank"><GitHubIcon fontSize="large"/></a>
                    </div>

                    <div className="about-block-left-text about-block-left-role">
                        <div>{data.role}</div>
                    </div>
                </div>

                <div className="about-block-right">
                    <img src="/images/photo.jpg" className="profile-photo"/>
                    <div className="about-description" dangerouslySetInnerHTML={{ __html: data.aboutDescription }}></div>
                    {Util.getDummyLine("#cccccc", "50px")}
                </div>

                <div className="about-block-footer">
                    <div className="solid-circle-small" style={{backgroundColor: 'red', marginTop: '3px'}}></div>
                    <div className="solid-circle-small" style={{backgroundColor: 'green', marginTop: '3px'}}></div>
                    <div className="solid-circle-small" style={{backgroundColor: 'white', marginTop: '3px'}}></div>
                </div>
            </div>
        )
    };

    return(
        <div className="about" id="about">
            <div className="about-left-design"></div>
            {aboutBlock()}
            <div className="slanted slanted-right slant-to-left"></div>
        </div>
    )
};

export default About;