import React from 'react';

// images
import leftArrow from '../../../../assets/All Images/left-arrow.png';
import rightArrow from '../../../../assets/All Images/right-arrow.png';
import landscape from '../../../../assets/All Images/branch-landscape.png';
import locationIcon from '../../../../assets/All Images/location.png';

const BranchSection = () => {
    return (
        <div>
            {/* Branch heading start */}
            <div className='flex gap-3 mx-auto w-[13rem]'>
                <img src={leftArrow} alt="" />
                <h2 className='text-3xl uppercase font-semibold'>Branch</h2>
                <img src={rightArrow} alt="" />
            </div>
            {/* Branch heading end */}

            <div
                style={{
                    backgroundImage: ` url('${landscape}')`
                }}
                className={`w-full h-[32rem] bg-no-repeat bg-bottom bg-cover overflow-hidden relative mt-14`} >

                <div className='flex h-full justify-around w-[115rem] mx-auto text-white p-[8.75rem]'>

                <div className='flex gap-5 w-[43rem]'>
                        <img className='h-16' src={locationIcon} alt="" />
                        <div className='flex flex-col justify-between text-2xl'>
                            <p className=''>
                                <span className='font-bold uppercase'>2nd Branch : </span> Murraya Auto,Yamaha showroom,Rewa road, Near Bhagwanpur Golamber, opposite Shiv Mandir.
                            </p>
                            <p className=''>
                                <span className='font-bold uppercase'>Pin : </span> Murraya Auto,Yamaha showroom,Rewa road, Near Bhagwanpur Golamber, opposite Shiv Mandir.
                            </p>
                            <p className='font-bold uppercase'>
                                Sales: 9006358888 | Service: 7280041118
                            </p>
                        </div>
                    </div>
                    
                    <span className='h- border-2'></span>

                    <div className='flex gap-5 w-[43rem]'>
                        <img className='h-16' src={locationIcon} alt="" />
                        <div className='flex flex-col justify-between text-2xl'>
                            <p className=''>
                                <span className='font-bold uppercase'>2nd Branch : </span> Murraya Auto,Yamaha showroom,Rewa road, Near Bhagwanpur Golamber, opposite Shiv Mandir.
                            </p>
                            <p className=''>
                                <span className='font-bold uppercase'>Pin : </span> Murraya Auto,Yamaha showroom,Rewa road, Near Bhagwanpur Golamber, opposite Shiv Mandir.
                            </p>
                            <p className='font-bold uppercase'>
                                Sales: 9006358888 | Service: 7280041118
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default BranchSection;