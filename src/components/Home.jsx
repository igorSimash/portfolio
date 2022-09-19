import React from 'react';
import ParticleBackground from "../particles/ParticleBackground";

const Home = ({menuOpened}) => {
    return (
        <div>
            <ParticleBackground/>
            {
                <div
                    className={`absolute top-1/2 left-1/2 grid gap-2 z-10 text-white tracking-widest -translate-x-1/2 -translate-y-1/2 transition-all
                     ${menuOpened ? 'opacity-0' : 'opacity-100'}`}
                >
                    <span className={'text-6xl text-center font-semibold'}>
                        Ihor Simashko
                    </span>
                    <span className={'text-2xl text-center'}>
                        Front-End Developer
                    </span>
                </div>
            }

        </div>
    );
};

export default Home;