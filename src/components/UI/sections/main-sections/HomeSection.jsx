import React from 'react';
import ParticleMain from "../../../../particles/ParticleMain";
import Scroll from "../../scroll/Scroll";
import {Bounce} from "react-awesome-reveal";
import ContactsHome from "../../contacts/home/ContactsHome";

const HomeSection = () => {
    return (<section className={'asd h-screen bg-darkBlue pt-20 z-50 scroll-smooth'}
                     id={'home-section'}
        >
            <ParticleMain/>
            <div
                className={'text-center font-raleway text-4xl text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '}>
            Hello, I'm
                <Bounce>
                    <span className={'text-coolRed font-semibold'}>
                    Ihor Simashko
                    </span>
                </Bounce>
            I'm a Front-End Developer
                <div className={'text-sm s:text-exSm sm:text-xs mt-6 flex flex justify-center items-center box-border'}>
                    <ContactsHome/>
                </div>
            </div>
            <div>
            </div>
            <Scroll/>
        </section>);
};

export default HomeSection;