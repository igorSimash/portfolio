import React from 'react';
import ContactsSection from "./UI/sections/main-sections/ContactsSection";
import PortfolioSection from "./UI/sections/main-sections/PortfolioSection";
import AboutSection from "./UI/sections/main-sections/AboutSection";
import Nav from "./UI/sections/nav/Nav";
import HomeSection from "./UI/sections/main-sections/HomeSection";


const About = () => {
    return (
        <div>
            <HomeSection/>
            <Nav/>
            <AboutSection/>
            <PortfolioSection/>
            <ContactsSection/>
        </div>
    );
};

export default About;