import React from 'react';

import './Home.css';

import HeaderSection from './HeaderSection/HeaderSection';
import WelcomeSection from './WelcomeSection/WelcomeSection';
import ShopSection from './ShopSection/ShopSection';
import { useLoaderData } from 'react-router-dom';
import GallerySection from './GallerySection/GallerySection';
import ContactSection from './ContactSection/ContactSection';
import BranchSection from './BranchSection/BranchSection';


const Home = () => {

    const loadData = useLoaderData();
    // console.log(loadData);


    return (
        <div>
            {/* Main header start */}
            <section className='relative'>
                <HeaderSection />
            </section>
            {/* Main header end */}

            {/* welcome section start */}
            <section className='w-full my-20'>
                <WelcomeSection />
            </section>
            {/* welcome section end */}
            
            {/* shop section start */}
            <section>
                <ShopSection loadData={loadData} />
            </section>
            {/* shop section end */}

            {/* Gallery section start */}
            <section>
                <GallerySection/>
            </section>
            {/* Gallery section end */}
            
            {/* conatct section start */}
            <section className=''>
                <ContactSection/>
            </section>
            {/* contact section end */}
            
            {/* branch section start */}
            <section className='my-20'>
                <BranchSection/>
            </section>
            {/* branch section end */}


        </div>
    );
};

export default Home;