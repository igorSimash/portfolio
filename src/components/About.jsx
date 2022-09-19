import React, {useState} from 'react';
import ContactsSection from "./UI/sections/main-sections/ContactsSection";
import PortfolioSection from "./UI/sections/main-sections/PortfolioSection";
import AboutSection from "./UI/sections/main-sections/AboutSection";
import Nav from "./UI/sections/nav/Nav";
import HomeSection from "./UI/sections/main-sections/HomeSection";


const About = ({menuOpened}) => {
    const [fixedNav, setFixedNav] = useState(false)
    const fixNav = () => {
        if ((window.innerHeight + 56) < window.scrollY) {
            setFixedNav(true)
        }
        else {
            setFixedNav(false)
        }
    }

    window.addEventListener('scroll', fixNav)

    return (
        <div className={`transition-all ${menuOpened ? 'opacity-0' : 'opacity-100'}`}>
            <HomeSection/>
            <Nav/>
            <AboutSection/>
            <PortfolioSection/>
            <ContactsSection/>

        </div>
    );
};

export default About;