import React from 'react';
import './ProjectItem.css'
import LearnMoreBtn from "../learn-more-btn/LearnMoreBtn";
import '../../../styles/projects.css'

const ProjectItem = ({img, isMobile, name, skills, description, site, github, githubServer}) => {
    return (
            <div className={`card hideSiblings s:mx-auto ${isMobile ? 'card-mobile' : null}`}>
                <div className={`image ${isMobile ? 'image-mobile' : null}`}>
                    <img
                        src={img} alt={''}/>
                </div>
                <div className="details">
                    <div className="center">
                        <h1>{name}<br/><span className={'leading-[0]'}>{skills}</span></h1>
                        <p>{description}</p>
                        <div className={'flex justify-center'}>
                            <LearnMoreBtn url={site}>{site.includes('github.com') ? 'GitHub (client)' : 'Site'}</LearnMoreBtn>
                            { github && <LearnMoreBtn url={github}>{site.includes('github.com') ? 'GitHub (server)' : 'GitHub'}</LearnMoreBtn>}
                            {githubServer && <LearnMoreBtn url={githubServer}>GitHub2</LearnMoreBtn>}
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ProjectItem;
