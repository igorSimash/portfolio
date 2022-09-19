import React from 'react';
import {Link} from "react-scroll";

const LinkNav = ({children, toId}) => {


    return (
        <span
            className={'mr-10 cursor-pointer hover:text-red-500 transition-all s:text-sm s:mr-7'}
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