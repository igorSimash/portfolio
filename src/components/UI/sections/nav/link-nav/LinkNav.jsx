import React from 'react';
import {Link} from "react-scroll";

const LinkNav = ({children, toId}) => {


    return (
        <span
            className={'cursor-pointer hover:text-red-500 transition-all s:text-xs'}
        >
            <Link
                to={toId}
                spy={true}
                smooth={true}
                duration={500}
            >
                    {children}
            </Link>
        </span>
    );
};

export default LinkNav;
