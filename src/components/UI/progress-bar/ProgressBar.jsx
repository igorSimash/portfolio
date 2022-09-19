import React from 'react';

const ProgressBar = ({percentage, name}) => {
    
    return (
        <div className={'h-7 w-full bg-bar flex font-raleway text-white'}>
            <div className={'bg-lightBlue text-md s:text-xs flex justify-center items-center w-1/4'}>
                {name}
            </div>
            <div className={'w-3/4'}>
                    <div className={'h-full bg-darkBlue flex items-center justify-end'} style={{width: `${percentage}%`}}>
                        <span className={'my-auto float-right z-10 text-white mr-2'}>
                            {percentage}%
                        </span>
                    </div>
            </div>

        </div>
    );
};

export default ProgressBar;