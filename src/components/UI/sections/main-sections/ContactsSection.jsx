import React from 'react';
import Contacts from "../../contacts/default/Contacts";
import {FaDownload} from "react-icons/fa";
import {Bounce, Fade} from "react-awesome-reveal";

const ContactsSection = () => {
    return (
        <section
            className={'bg-[#252934] font-raleway pb-16 relative z-10'}
            id={"contacts-section"}
        >
                <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" className="svgcolor-light">
                    <path d="M0 0 L50 100 L100 0 Z" fill="#f5f5f5" stroke="#f5f5f5"></path>
                </svg>
            <Fade triggerOnce={true}>
                <div className={'text-[#f5f5f5] py-24'}>
                    <div className={'uppercase text-center text-4xl font-bold tracking-wide'}>
                        Contacts
                    </div>
                    <div className={'mt-6 h-1 mx-auto w-14 bg-[#f5f5f5] items-center'}>
                    </div>
                </div>

                <div className={'grid justify-center gap-4 text-[#f5f5f5] pb-24'}>
                    <a href={'https://drive.google.com/file/d/1-Ub26apL1IBPQni1BjAME9jtOuMc9MbM/view?usp=sharing'}>
                        <div className={'flex flex-col justify-center text-6xl s:text-5xl cursor-pointer'}>
                            <span className={'text-4xl font-bold text-center mb-8'}>
                            CV
                            </span>
                            <FaDownload className={'hover:text-coolRed transition-all animate-bounce'}/>
                        </div>
                    </a>
                </div>
                <div className={'flex justify-center items-center box-border'}>
                    <Bounce>
                        <Contacts/>
                    </Bounce>
                </div>
            </Fade>
        </section>
    );
};

export default ContactsSection;
