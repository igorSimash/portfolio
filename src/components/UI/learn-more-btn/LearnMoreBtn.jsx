import React from 'react';

const LearnMoreBtn = ({url}) => {
    return (
        <div className={`border-2 text-black border-coolRed hover:bg-coolRed hover:text-white transition-all
         w-fit h-fit flex justify-center m-0 py-1 sm:py-0.5`}>
            <a className={'m-0 px-2 w-full h-full uppercase cursor-pointer text-sm lg:text-xs md:text-xs sm:text-exSm s:text-xs'}
               href={url}>
                Learn more
            </a>
        </div>
    );
};

export default LearnMoreBtn;