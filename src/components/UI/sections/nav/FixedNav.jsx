import React from 'react';
import LinkNav from "./link-nav/LinkNav";

const FixedNav = () => {
    return (
        <nav className={'fixed w-full h-14 bg-nav border-b-4 border-lightBlue text-white uppercase top-0 z-50 smooth-nav'}>
            <div className={'flex gap-10 s:gap-5 items-center h-full ml-36 font-raleway sm:justify-center sm:ml-0 s:justify-center s:ml-0'}>
                <LinkNav toId={'home-section'}>
                    Home
                </LinkNav>
                <LinkNav toId={'about-section'}>
                    About
                </LinkNav>
                <LinkNav toId={'portfolio-section'}>
                    Projects
                </LinkNav>
                <LinkNav toId={'contacts-section'}>
                    Contacts
                </LinkNav>
            </div>
        </nav>
    );
};

export default FixedNav;
