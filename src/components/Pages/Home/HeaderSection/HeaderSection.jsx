import React from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import bannerImage from '../../../../assets/All Images/home-banner.png';
const HeaderSection = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div>
            <div className='w-full '>

                    
                    <img className='object-cover object-top w-full h-[calc(100vh-0rem)]' src={bannerImage} alt="" />
                {/* <Carousel> */}
                    {/* <img src='https://wallpaperaccess.com/full/526697.jpg' alt="" />
                    <img src='https://wallpaperaccess.com/full/526697.jpg' alt="" />
                    <img src='https://wallpaperaccess.com/full/526697.jpg' alt="" />
                    <img src='https://wallpaperaccess.com/full/526697.jpg' alt="" />
                    <img src='https://wallpaperaccess.com/full/526697.jpg' alt="" /> */}
                    {/* <p>Item 1</p>
                    <p>Item 2</p>
                    <p>Item 3</p>
                    <p>Item 4</p>
                </Carousel>; */}

            </div>
            <div className='absolute top-[calc(50%-4rem)] left-28'>
                <h1 className='text-7xl uppercase font-extrabold font-[Oswald]'><span className='font-[Oswald] text-[#030db2]'>Lorem</span> Ipsum Dolor <br />
                    Sit Amet, Consectetur !</h1>
            </div>
        </div>
    );
};

export default HeaderSection;