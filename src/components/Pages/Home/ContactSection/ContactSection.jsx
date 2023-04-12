import React from 'react';

import landscape from '../../../../assets/All Images/contact-landscape-layout.png';
import coverImage from '../../../../assets/All Images/contact-landscape-image.png';

const ContactSection = () => {
    return (
        <div 
        style={{
            backgroundImage:` url('${coverImage}')`
        }} 
        
        className={`w-full h-[30rem] bg-no-repeat bg-bottom bg-cover overflow-hidden relative`} >

            <span className='absolute top-0 left-0'>

            </span>

        </div>
    );
};

export default ContactSection;