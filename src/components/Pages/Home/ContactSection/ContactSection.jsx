import React from 'react';

import landscape from '../../../../assets/All Images/contact-image.png';
import callIcon from '../../../../assets/All Images/call.png';

const ContactSection = () => {
    return (
        <div
            style={{
                backgroundImage: ` url('${landscape}')`
            }}
            className={`w-full h-[30rem] bg-no-repeat bg-bottom bg-cover overflow-hidden relative`} >

            <span className='w-full text-center absolute top-[7rem] left-[50%] -translate-x-[50%]'>
                <h1 style={{

                    fontFamily: 'Orbitron', fontWeight: '900'

                }} className='text-white uppercase text-6xl' >Call Us Now To Book A New Bike Ride. </h1>
                <div 
                
                style={{
                    boxShadow: ' inset 20px 28px 20px -12px rgba(0,0,0,0.75)'
                }}

                className='mx-auto mt-20 bg-white w-[35rem] py-3 rounded-[3rem]'>
                    <div className='flex justify-center gap-10'>
                    <img src={callIcon} className='mt-2 w-10 object-contain' alt="" />
                    <p 
                    style={{
                        fontFamily:'Oswald'
                    }}
                    className='font-bold text-6xl text-[#000099]'>+91 93047 17260</p>
                    </div>
                </div>
            </span>

        </div>
    );
};

export default ContactSection;