import React from 'react';
import './ContactsHome.css'
import {Flip} from "react-awesome-reveal";
const ContactsHome = () => {
    return (
        <ul className={'contacts-home-ul'}>
            <Flip left triggerOnce={true}>
                <li className={'contacts-home-li'}>
                    <a href="https://t.me/igoryancik" className={'contacts-home-href'}>
                        <i className="fa-brands fa-telegram telegram"></i>
                    </a>
                </li>
            </Flip>
            <Flip left triggerOnce={true}>
                <li className={'contacts-home-li'}>
                    <a href="https://github.com/igorSimash" className={'contacts-home-href'}>
                        <i className="fa-brands fa-github github"></i>
                    </a>
                </li>
            </Flip>
            <Flip left triggerOnce={true}>
                <li className={'contacts-home-li'}>
                    <a href="https://www.instagram.com/igor.simash/" className={'contacts-home-href'}>
                        <i className="fa-brands fa-instagram instagram"><i className="fa-brands fa-instagram instagram2"></i></i>
                    </a>
                </li>
            </Flip>
            <Flip left triggerOnce={true}>
                <li className={'contacts-home-li'}>
                    <a href="https://www.linkedin.com/in/ihor-simashko-a462aa244/" className={'contacts-home-href'}>
                        <i className="fa-brands fa-linkedin linkedin"></i>
                    </a>
                </li>
            </Flip>
        </ul>
    );
};

export default ContactsHome;