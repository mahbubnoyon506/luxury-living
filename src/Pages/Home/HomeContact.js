import { Input } from '@mui/material';
import React from 'react';

const HomeContact = () => {
    return (
        <div className='py-20' >
            <p className='text-primary text-center'>Service</p>
            <h2 className='text-center text-4xl font-bold text-primary leading-snug'>Let us handle your <br /> project, professionally.</h2>
           <div className='w-[45vw] mx-auto mt-10'>
            <form action="" className=''>
                <div className='md:grid grid-cols-2 gap-5'>
                <input type="text" placeholder='Your First Name' className='py-4 w-full bg-[#F6F6F6] focus:outline-none pl-5 mb-5' />
                <input type="text" placeholder='Your Last Name' className='py-4 w-full bg-[#F6F6F6] focus:outline-none pl-5 mb-5' />
                </div>
                <div className='md:grid grid-cols-2 gap-5'>
                <input type="text" placeholder='Your Email' className='py-4 w-full bg-[#F6F6F6] focus:outline-none pl-5 mb-5' />
                <input type="text" placeholder='Your Contact' className='py-4 w-full bg-[#F6F6F6] focus:outline-none pl-5 mb-5' />
                </div>
                <textarea name="text" placeholder='Your Message' id="" cols="30" rows="10" className='py-4 w-full bg-[#F6F6F6] focus:outline-none px-5'></textarea>
                <div className='flex justify-center'>
                <input type="submit" value="Send Message" className='bg-primary px-10 py-2 rounded text-base-100 text-sm cursor-pointer mt-5'/>
                </div>
            </form>
           </div>
        </div>
    );
};

export default HomeContact;