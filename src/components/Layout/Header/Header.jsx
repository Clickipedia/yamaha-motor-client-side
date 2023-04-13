import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosMail } from 'react-icons/io';

// Images
import navLogo from '../../../assets/logos/yamaha-moto-logor.png';

const Header = () => {


    return (
        <div>
            {/* Upper Header Start */}
            <div className='fixed z-[99] top-0 w-full'>
                <div className='flex justify-between px-16 py-3 bg-[#000099] text-white'>
                    <div className='flex gap-3'>
                        <span className='text-2xl mt-[1px]'><IoIosMail /></span>
                        <p>yamaha-motor@gmail.com</p>
                    </div>
                    <div>
                        <p>
                            Sales No: +91-9006358888
                            <span className='mx-3'> | </span>
                            Service No: +91-7280041118, 8877382222
                        </p>
                    </div>
                </div>
            </div>
            {/* Upper Header End */}
            {/* Main Navbar start */}
            <nav className={`w-full mt-10 absolute z-10`}>
                <div className='flex justify-between w-full ps-[3.75rem] pe-[4.2rem] pt-[3.44rem] text-lg'>
                    <div>
                        <img src={navLogo} alt="" />
                    </div>
                    <div className='space-x-8 font-[600]'>
                        <Link className=' hover:text-[#030db2] hover:text-[1.02em]' to='/' >Home</Link>
                        <Link className=' hover:text-[#030db2] hover:text-[1.02em]' to='/about' >About Us</Link>
                        <Link className=' hover:text-[#030db2] hover:text-[1.02em]' to='#' >Motorcycles</Link>
                        <Link className=' hover:text-[#030db2] hover:text-[1.02em]' to='#' >Scooters</Link>
                        <Link className=' hover:text-[#030db2] hover:text-[1.02em]' to='#' >Services</Link>
                        <Link className=' hover:text-[#030db2] hover:text-[1.02em]' to='#' >Offer</Link>
                        <Link className=' hover:text-[#030db2] hover:text-[1.02em]' to='#' >Testinomial</Link>
                        <Link className=' hover:text-[#030db2] hover:text-[1.02em]' to='/contact' >Contact Us</Link>
                    </div>
                </div>
            </nav>
            {/* Main Navbar end */}


        </div>
    );
};

export default Header;