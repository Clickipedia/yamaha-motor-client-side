import React from 'react';

// images
import welcomTv from '../../../../assets/All Images/TV layout.png';
import welcomeArrow from '../../../../assets/All Images/Arrow shape.png';
import welcomeBackground from '../../../../assets/All Images/welcome-image.png';


const WelcomeSection = () => {
    return (
        <div className='grid grid-cols-2 items-center justify-center mx-auto w-2/3 gap-2'>
        <div className='welcome-image'>
            <img src={welcomTv} alt="" />
            <div style={{backgroundImage:`url('${welcomeBackground}')`}} className='mask-image z-10'>
                
            </div>
        </div>
        <div className='h-full' >
            <div className='h-full'>
                <h1 className='text-[5rem] font-bold text-[#3b3b3b] pt-3'>Welcome</h1>
                <div className='-mt-2'>
                    <p className=' text-[#232323]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.

                    </p>

                    <p className='pt-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                </div>
                <div className='pt-5'>
                    <img src={welcomeArrow} alt="" />
                </div>
            </div>
        </div>
    </div>
    );
};

export default WelcomeSection;