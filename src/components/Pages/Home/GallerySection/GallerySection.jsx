import React from 'react';
// images
import leftArrow from '../../../../assets/All Images/left-arrow.png';
import rightArrow from '../../../../assets/All Images/right-arrow.png';

const GallerySection = () => {
    return (
        <div className='w-full my-20'>
            {/* Gallery heading start */}
            <div className='flex gap-3 mx-auto w-[13rem]'>
                <img src={leftArrow} alt="" />
                <h2 className='text-3xl uppercase font-semibold'>Gallery</h2>
                <img src={rightArrow} alt="" />
            </div>
            {/* Gallery heading end */}
        </div>
    );
};

export default GallerySection;