import React from 'react';

const LearnMoreBtn = ({url, children, onClick}) => {
    return (
        <div className={`border-2 text-black border-coolRed hover:bg-coolRed hover:text-white transition-all
         w-fit h-fit flex justify-center m-0 py-0.5 sm:py-0.5 mr-1`}>
            <a className={'m-0 px-2 w-full h-full cursor-pointer lg:leading-3 sm:leading-[11px] s:s:leading-[11px] text-sm lg:text-xs md:text-xs sm:text-exSm s:text-xs'}
               href={url}>
                {children}
            </a>
        </div>
    );
};

export default LearnMoreBtn;