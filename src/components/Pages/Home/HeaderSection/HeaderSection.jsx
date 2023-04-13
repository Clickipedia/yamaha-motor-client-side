
import React, { useState } from 'react';
import bannerImage from '../../../../assets/All Images/home-banner.png';

import './HeaderSection.css';




const HeaderSection = () => {

    const [images, setImages] = useState([
        'https://wallpaperaccess.com/full/526697.jpg',
        'https://wallpaperaccess.com/full/46854.jpg',
        'https://wallpapers.com/images/hd/mv-agusta-f4-rr-black-motor-bike-aq7qtvjmorpmmcm6.jpg',
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);


    const handlePrevClick = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    const handleNextClick = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    // setInterval(handleNextClick,2000)


    return (
        <div>
            <div className='w-full '>


                <img className='object-cover object-top w-full h-[calc(100vh-0rem)]' src={bannerImage} alt="" />

                {/* <div className="image-carousel h-screen">
                    <img className='object-cover object-top w-full h-[calc(100vh-5rem)]' src={images[currentIndex]} alt="carousel-image" />
                    <button onClick={handlePrevClick}>Previous</button>
                    <button onClick={handleNextClick}>Next</button>
                </div> */}

            </div>
            <div className='absolute top-[calc(50%-4rem)] left-28'>
                <h1 className='text-7xl uppercase font-extrabold font-[Oswald]'><span className='font-[Oswald] text-[#030db2]'>Lorem</span> Ipsum Dolor <br />
                    Sit Amet, Consectetur !</h1>
            </div>
        </div>
    );
};

export default HeaderSection;


