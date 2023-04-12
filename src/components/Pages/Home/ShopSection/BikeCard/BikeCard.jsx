import React from 'react';
import './BikeCard.css';

import BT from '../../../../../assets/All Images/bluetooth-small-logo.png';
import yamahaLogo from '../../../../../assets/All Images/yamaha-small-logo.png';
import nextIcon from '../../../../../assets/All Images/small-next-icon.png';
import shareIcon from '../../../../../assets/All Images/share-icon.png';


const BikeCard = ({ bike }) => {
    
    const { id, name, desc, image, bg, bluetooth } = bike;

    return (
        <div className='mx-auto min-h-[35rem] w-[23.75rem] relative overflow-hidden rounded-[3rem] shadow-2xl'>
            <div className='absolute z-30 top-6 left-6'>
                <button>
                    <img src={shareIcon} alt="" />
                </button>
            </div>
            <div className={`h-[18.75rem]`} >
                <img className='absolute z-10 w-[32rem] scale-125' src={bg} alt="" />
                <img className='absolute z-20 top-10 left-3 hover:scale-105 duration-500' src={image} alt="" />
            </div>
            <div className='mt-8'>
                <div className='flex justify-center items-center gap-3'>
                    <img src={yamahaLogo} alt="" />
                    <h1 className='text-xl font-bold' >{name}</h1>
                    {
                        bluetooth ? <img src={BT} /> : ''
                    }
                </div>
                <div className='px-5 pt-3 bike-card-para'>
                    <p className=''>{desc}</p>
                </div>
                <div className='flex justify-around mt-5 mb-8 font-bold text-[#000099]'>
                    <button className='hover:bg-[#0a59f2] hover:text-white border-2 shadow-xl px-6 py-2 rounded-[2rem]'>
                        Explore
                        <img className='ms-3 h-3 inline' src={nextIcon} alt="" />
                    </button>
                    <button className='hover:bg-[#0a59f2] hover:text-white border-2 shadow-xl px-6 py-2 rounded-[2rem]'>
                    Book Now
                        <img className='ms-3 h-3 inline' src={nextIcon} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BikeCard;