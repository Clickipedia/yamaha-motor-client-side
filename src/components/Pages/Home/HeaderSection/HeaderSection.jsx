import React from 'react';

import bannerImage from '../../../../assets/All Images/home-banner-2.png';
const HeaderSection = () => {
    return (
        <div>
            <div className='w-full '>
                    <img className='object-cover object-bottom w-full h-[calc(100vh-4rem)]' src={bannerImage} alt="" />
                </div>
                <div className='absolute top-[calc(50%-6.5rem)] left-28'>
                    <h1 className='text-7xl uppercase font-extrabold font-[Oswald]'><span className='font-[Oswald] text-[#030db2]'>Lorem</span> Ipsum Dolor <br />
                        Sit Amet, Consectetur !</h1>
                </div>
        </div>
    );
};

export default HeaderSection;