import React from 'react';
import Hexagon from "../../hexagon/Hexagon";
import {FaRegLightbulb} from "react-icons/fa";
import {SiSpeedtest} from "react-icons/si";
import {MdOutlineDevices} from "react-icons/md";
import {IoMdRocket} from "react-icons/io";
import CVimg from "../../../../assets/CV.png";
import {skills} from "../../../../assets/data/Skills";
import ProgressBar from "../../progress-bar/ProgressBar";
import {Fade, Flip, Zoom} from "react-awesome-reveal";

const AboutSection = () => {

    return (
        <section
            className={'bg-white font-raleway pb-32 relative z-10'}
            id={'about-section'}
        >
            <Fade triggerOnce={true}>

                <div className={'text-sectionName pt-24'}>
                    <div
                        className={'uppercase text-center bg-white text-4xl font-bold tracking-wide'}
                    >
                        About
                    </div>
                    <div className={'mt-6 mb-24 h-1 mx-auto w-14 bg-sectionName items-center'}>

                    </div>
                </div>

                <div className={`flex justify-between mx-36 font-raleway text-sectionName sm:grid
                 sm:grid-cols-2 sm:gap-2 sm:mx-0 max-w-full s:grid s:grid-cols-1 s:gap-4 s:mx-0`}>
                    <div className={'w-72 sm:w-full s:mx-auto'}>
                        <div className={'flex justify-center'}>
                            <Flip left triggerOnce={true}>
                                <Hexagon>
                                    <FaRegLightbulb className={'text-5xl sm:text-4xl'}/>
                                </Hexagon>
                            </Flip>
                        </div>
                        <div className={'text-center flex flex-col'}>
                                <span className={'font-bold text-xl sm:text-lg'}>
                                    Logic
                                </span>
                            <span className={'mx-2 sm:text-sm'}>
                                    Cool design with easy to understand logic, my highest priority.
                                </span>
                        </div>
                    </div>
                    <div className={'w-72 sm:w-full s:mx-auto'}>
                        <div className={'flex justify-center'}>
                            <Flip left triggerOnce={true}>
                                <Hexagon>
                                    <SiSpeedtest className={'text-5xl sm:text-4xl'}/>
                                </Hexagon>
                            </Flip>
                        </div>
                        <div className={'text-center flex flex-col'}>
                                <span className={'font-bold  text-xl sm:text-lg'}>
                                    Fast
                                </span>
                            <span className={'mx-2 sm:text-sm'}>
                                    Fast load without lags is really important for me.
                                </span>
                        </div>
                    </div>
                    <div className={'w-72 sm:w-full s:mx-auto'}>
                        <div className={'flex justify-center'}>
                            <Flip left triggerOnce={true}>
                                <Hexagon>
                                    <MdOutlineDevices className={'text-white text-5xl sm:text-4xl'}/>
                                </Hexagon>
                            </Flip>
                        </div>
                        <div className={'text-center flex flex-col'}>
                                <span className={'font-bold  text-xl sm:text-lg'}>
                                    Responsive
                                </span>
                            <span className={'mx-2 sm:text-sm'}>
                                    My layouts will work on any device, small or big.
                            </span>
                        </div>
                    </div>
                    <div className={'w-72 sm:w-full s:mx-auto'}>
                        <div className={'flex justify-center'}>
                            <Flip left triggerOnce={true}>
                                <Hexagon>
                                    <IoMdRocket className={'text-5xl sm:text-4xl'}/>
                                </Hexagon>
                            </Flip>
                        </div>
                        <div className={'text-center flex flex-col'}>
                                <span className={'font-bold  text-xl sm:text-lg'}>
                                    Dynamic
                                </span>
                            <span className={'mx-2 sm:text-sm'}>
                                    I don't like static websites, I prefer making them alive.
                                </span>
                        </div>
                    </div>
                </div>
                <div className={'mx-36 mt-16 flex md:flex-col md:items-center md:mx-0 sm:flex-col sm:items-center sm:mx-0 s:flex-col s:items-center s:mx-0'}>
                    <div className={'font-raleway text-sectionName w-2/5'}>
                        <div className={'flex justify-center'}>
                            <img className={'mask mask-hexagon-2 w-80'} src={CVimg} alt="face"/>
                        </div>
                        <div className={'text-center font-bold text-xl'}>
                            Who is this guy?
                        </div>
                        <div className={'text-center mx-3 s:-mx-10'}>
                            I'm Full Stack Developer from Rivne, Ukraine.
                            Experienced in working with teams to deliver high-quality products within deadlines.
                            Passionate about learning and staying up-to-date with the latest industry trends and
                            best practices
                        </div>
                    </div>
                    <div className={'w-3/5 ml-10 grid gap-0 md:gap-2 md:mt-12 sm:gap-2 sm:mt-12 sm:w-4/5 s:gap-2 s:mt-12 s:ml-0 s:w-10/12'}>
                        <Zoom triggerOnce={true}>
                            {skills.map((skill, index) =>
                                <ProgressBar key={index} percentage={skill.percentage} name={skill.skill}/>
                            )}
                        </Zoom>
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default AboutSection;
