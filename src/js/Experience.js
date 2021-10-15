import React from 'react';
import Util from '../util/Util';
import data from '../data/data.json';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Experience = (props) => {
    const getExperienceBoxList = () => {
        return(
            <>
                {data.experience.map((singleExperience, index) => {
                    return(
                        getExperienceBox(singleExperience, (index%2==1), (index+1))
                    )
                })}
            </>
        )
    };
    const getExperienceBox = (singleExperience, isExperienceNumberEven, experienceNumber) => {
        const experienceNumberClasses = "experience-number " + (isExperienceNumberEven ? "right-experience-number" : "left-experience-number");
        return(
            <div className="single-experience" style={{float: isExperienceNumberEven ? "right" : "left"}}>
                <div className="single-experience-header" style={{marginBottom: "10px"}}>{singleExperience.name}</div>
                <div>({singleExperience.duration})</div>
                <div className="experience-detail">
                {singleExperience.details.map((experienceDetail) => {
                    return(
                        <div className="experience-detail-line">
                            <FiberManualRecordIcon fontSize="small"/>
                            <span>{experienceDetail}</span>
                        </div>
                    )
                })}
                </div>

                <div className={experienceNumberClasses}>{experienceNumber}</div>
            </div>
        )
    };

    return(
        <div className="page experience" id="experience">
            <div className="page-header">Experience</div>
            {Util.getDummyLine("white", "500px")}
            <div className="dummy-experience-div"></div>
            {getExperienceBoxList()}
            <div style={{clear: "both"}}></div>
        </div>
    )
};

export default Experience;