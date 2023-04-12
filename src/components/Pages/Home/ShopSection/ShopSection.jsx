import React from 'react';

import './ShopSection.css';

// images
import leftArrow from '../../../../assets/All Images/left-arrow.png';
import rightArrow from '../../../../assets/All Images/right-arrow.png';
import BikeCard from './BikeCard/BikeCard';


const ShopSection = ({ loadData }) => {


    // console.log(loadData);

    return (
        <div className='w-full my-20'>
            {/* Shop heading start */}
            <div className='flex gap-3 mx-auto w-[13rem]'>
                <img src={leftArrow} alt="" />
                <h2 className='text-3xl uppercase font-semibold'>Shop</h2>
                <img src={rightArrow} alt="" />
            </div>
            {/* Shop heading end */}

            {/* Shop radio button start */}
            <div className='w-full mt-[50px] flex justify-center'>
                <div className="wrapper">
                    <input type="radio" name="select" id="option-1" checked />
                    <input type="radio" name="select" id="option-2" />
                    <label for="option-1" className="option option-1">
                        <span>MOTORCYCLES</span>
                    </label>
                    <label for="option-2" className="option option-2">
                        <span>SCOOTERS</span>
                    </label>
                </div>
            </div>
            {/* Shop radio button end */}

            {/* Shop show bikes section start */}
            <div className='grid grid-cols-3 gap-y-12 w-2/3 mt-[3.5rem] mx-auto'>
                {
                    loadData.map(bike => <BikeCard key={bike.id} bike={bike} /> )
                }
            </div>
            {/* Shop show bikes section end */}
        </div>
    );
};

export default ShopSection;