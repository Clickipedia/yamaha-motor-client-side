import React from 'react';
// images
import leftArrow from '../../../../assets/All Images/left-arrow.png';
import rightArrow from '../../../../assets/All Images/right-arrow.png';
import colon from '../../../../assets/All Images/colon.png';
import client1 from '../../../../assets/All Images/client1.png';
import client2 from '../../../../assets/All Images/client2.png';
import stars from '../../../../assets/All Images/starts.png';

const ReviewSection = () => {


    const clientData = [
        {
            id:2,
            name: 'Kiran Pandey',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore sed dodo eiusmod temporempor incididunt ut labore et doloregravida.',
            photo: client1
        },
        {
            id:1,
            name: 'Punit Sarma',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore sed dodo eiusmod temporempor incididunt ut labore et doloregravida.',
            photo: client2
        },
    ]




    return (
        <div className='w-full py-10'>
            <div className='flex gap-3 mx-auto w-[30.7422rem]'>
                <img src={leftArrow} alt="" />
                <h2 className='text-3xl uppercase font-semibold'>Our Happy Customer's</h2>
                <img src={rightArrow} alt="" />
            </div>

            <div className=' flex justify-center gap-[35px] mt-16'>
                {
                    clientData.map(c=><ReviewCard key={c.id} client={c} />)
                }
            </div>

        </div>
    );
};


const ReviewCard = ({ client }) => {

    console.log(client);

    return (
        <div className='w-[490px] min-h-[380px] bg-gradient-to-l from-[#0e29a5] to-[#5d90f4] rounded-2xl overflow-hidden space-y-4 review-box'>

            <div className='space-y-3 h-[230px] text-white text-center pt-8 px-7'>
                <h1 className='text-3xl font-[500]' >{client.name}</h1>
                <div className=' text-sm'>
                    <img className='inline-block -mt-3 me-1' src={colon} alt="" />
                    <p className='inline'>{client.review}</p>
                </div>
            </div>

            <div className='flex h-[150px] justify-center p-2 bg-white relative'>
                <img src={client.photo} className='absolute object-cover -top-[70px] w-40 h-40 rounded-[50%] border-[10px] border-white' alt="" />
                <img className='w-40 mt-12' src={stars} alt="" />
            </div>
        </div>
    )
}



export default ReviewSection;