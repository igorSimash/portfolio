import React from 'react';
import './ProjectItem.css'
import LearnMoreBtn from "../learn-more-btn/LearnMoreBtn";

const ProjectItem = ({img, isMobile, name, skills, description, url}) => {
    return (
            <div className={`card s:mx-auto ${isMobile ? 'card-mobile' : null}`}>
                <div className={`image ${isMobile ? 'image-mobile' : null}`}>
                    <img
                        src={img} alt={''}/>
                </div>
                <div className="details">
                    <div className="center">
                        <h1>{name}<br/><span>{skills}</span></h1>
                        <p>{description}</p>
                        <div className={'flex justify-center'}>
                            <LearnMoreBtn url={url}/>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ProjectItem;