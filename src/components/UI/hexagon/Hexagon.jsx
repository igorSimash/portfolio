import React from 'react';
const Hexagon = ({children}) => {
    return (
        <div className="mask mask-hexagon-2 w-28 h-28 sm:w-20 sm:h-20 bg-lightBlue flex justify-center items-center text-white">
            {children}
        </div>
    );
};

export default Hexagon;