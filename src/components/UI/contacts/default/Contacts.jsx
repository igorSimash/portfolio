import React from 'react';
import './Contacts.css'
import {Flip} from "react-awesome-reveal";
const Contacts = () => {
    return (
        <ul className={'contacts-ul'}>
            <Flip left triggerOnce={true}>
                <li className={'contacts-li'}>
                    <a href="https://t.me/igoryancik" className={'contacts-href'}>
                        <i className="fa-brands fa-telegram telegram"></i>
                    </a>
                </li>
            </Flip>
            <Flip left triggerOnce={true}>
                <li className={'contacts-li'}>
                    <a href="https://github.com/igorSimash" className={'contacts-href'}>
                        <i className="fa-brands fa-github github"></i>
                    </a>
                </li>
            </Flip>
            <Flip left triggerOnce={true}>
                <li className={'contacts-li'}>
                    <a href="https://www.instagram.com/igor.simash/" className={'contacts-href'}>
                        <i className="fa-brands fa-instagram instagram"></i>
                    </a>
                </li>
            </Flip>
            <Flip left triggerOnce={true}>
                <li className={'contacts-li'}>
                    <a href="https://www.linkedin.com/in/ihor-simashko-a462aa244/" className={'contacts-href'}>
                        <i className="fa-brands fa-linkedin linkedin"></i>
                    </a>
                </li>
            </Flip>
        </ul>
    );
};

export default Contacts;