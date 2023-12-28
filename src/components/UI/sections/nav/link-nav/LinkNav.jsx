import React from 'react';
import {Link} from "react-scroll";
import './LinkNav.css';
const LinkNav = ({children, toId}) => {


    return (
        <span
            className={'link-nav-span cursor-pointer hover:text-red-500 transition-all s:text-xs'}
        >
            <Link
                to={toId}
                href={`#${toId}`}
                spy={true}
                smooth={true}
                duration={500}
                class={'active:text-red-500'}
            >
                    {children}
            </Link>
        </span>
    );
};

export default LinkNav;
