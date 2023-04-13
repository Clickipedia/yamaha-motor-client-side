import React from 'react';
// import Gallery from "react-photo-gallery";
// images
import leftArrow from '../../../../assets/All Images/left-arrow.png';
import rightArrow from '../../../../assets/All Images/right-arrow.png';


const photos = [
    {
        src: 'https://plus.unsplash.com/premium_photo-1675797367637-4cfc66ddbe22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80',
        width: 4,
        height: 3
    },
    {
        src: 'https://images.unsplash.com/photo-1674574124340-c00cc2dae99c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        width: 1,
        height: 1
    },
    {
        src: 'https://plus.unsplash.com/premium_photo-1680721444847-33e37f1bd4d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
        width: 4,
        height: 3
    },
    {
        src: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        width: 1,
        height: 1
    }
];


const GallerySection = () => {



    return (
        <div className='w-full py-10'>
            {/* Gallery heading start */}
            <div className='flex gap-3 mx-auto w-[13rem]'>
                <img src={leftArrow} alt="" />
                <h2 className='text-3xl uppercase font-semibold'>Gallary</h2>
                <img src={rightArrow} alt="" />
            </div>
            {/* Gallery heading end */}

            <div className='mt-16 w-3/4 mx-auto'>
            {/* <Gallery
             photos={photos}
             direction={"column"}
             /> */}
            </div>
        </div>
    );
};

export default GallerySection;