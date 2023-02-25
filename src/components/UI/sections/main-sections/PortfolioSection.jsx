import React from 'react';
import {projects} from "../../../../assets/data/Projects";
import ProjectItem from "../../project-item/ProjectItem";
import {Fade, Zoom} from "react-awesome-reveal";
import '../../../../styles/projects.css'

const PortfolioSection = () => {
    return (

        <section
            className={'bg-[#f5f5f5] font-raleway pb-32 relative z-10'}
            id={'portfolio-section'}
        >
            <Fade triggerOnce={true}>
                <div className={'text-sectionName py-24'}>
                    <div className={'uppercase text-center text-4xl font-bold tracking-wide'}>
                        Projects
                    </div>
                    <div className={'mt-6 h-1 mx-auto w-14 bg-sectionName items-center'}>

                    </div>
                </div>

                <div>
                    <Zoom triggerOnce={true}>
                        <div
                            className={'projectContainer grid grid-cols-3 md:grid-cols-2 s:grid-cols-1 sm:grid-cols-2 px-10 gap-2 gap-y-10 justify-items-center items-center'}>
                            {/*<ProjectItem />*/}
                            {projects.map((project, index) =>
                                <ProjectItem key={index} img={project.img} site={project.site} github={project.github}
                                             description={project.description}
                                             isMobile={project.mobile}
                                             name={project.name} skills={project.skills}/>
                            )}
                        </div>
                    </Zoom>
                </div>
            </Fade>
        </section>
    );
};

export default PortfolioSection;