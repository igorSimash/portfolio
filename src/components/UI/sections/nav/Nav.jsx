import React from 'react';
import {useState} from "react";
import './Nav.css'
import FixedNav from "./FixedNav";
import LinkNav from "./link-nav/LinkNav";

const Nav = () => {
    const [fixedNav, setFixedNav] = useState(false)

    const fixNav = () => {
        if ((window.innerHeight + 55) < window.scrollY) {
            setFixedNav(true)
        }
        else {
            setFixedNav(false)
        }
    }

    window.addEventListener('scroll', fixNav)

    const [inView, setInView] = useState(false)

    // const checkInView = () => {
    //     // console.log(document.querySelector('#' + toId).getBoundingClientRect());
    //     if (document.querySelector(toId).getBoundingClientRect().top < 0) {
    //         setInView(true)
    //     }
    //     else {
    //         setInView(false)
    //     }
    // }
    //
    // window.addEventListener('scroll', checkInView)

    return (
        <nav className={`w-full h-14 bg-nav border-b-4 border-lightBlue text-white uppercase relative`}>

            {
                fixedNav
                ?
                <FixedNav/>
                :
                null
            }

            <div className={'flex gap-10 s:gap-5 items-center h-full ml-36 sm:justify-center sm:ml-0 s:justify-center s:ml-0 font-raleway relative'}>
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

export default Nav;
