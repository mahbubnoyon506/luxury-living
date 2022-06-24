import React, { useEffect } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import projectImage from '../../Assets/Image/bernard.png'
import projectImage2 from '../../Assets/Image/Mask Group.png'
import projectImage3 from '../../Assets/Image/Mask Group-1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const HomeProjects = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    return (
        <div className='p-20'>
            <p className='text-primary text-center'>Projects</p>
            <h2 className='text-center text-4xl font-bold text-primary leading-snug'>Discover the latest Interior Design <br /> available today</h2>
            <div className='grid  lg:grid-cols-3 md:grid-cols-2 pt-20'>
                <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm" data-aos="fade-right">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
                            <img class=" max-w-xs hover:scale-110 transition duration-300 ease-in-out" style={{ height: '25rem' }} src={projectImage} alt="" />
                        </div>
                        <div class="p-6">
                            <h5 class="text-primary text-xl font-semibold text-center mb-2">Villa on Washington Avenue</h5>
                            <p class="text-primary text-base text-center">
                                <LocationOnIcon></LocationOnIcon> <span className='text-secondary'>Dhaka, Bangladesh</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center sm:my-10 md:my-0">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm" data-aos="zoom-in">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
                            <img class=" max-w-xs hover:scale-110 transition duration-300 ease-in-out" style={{ height: '25rem' }} src={projectImage2} alt="" />
                        </div>
                        <div class="p-6">
                            <h5 class="text-primary text-xl font-semibold text-center mb-2">Luxury villa in Rego Park</h5>
                            <p class="text-primary text-base text-center">
                                <LocationOnIcon></LocationOnIcon> <span className='text-secondary'>Dhaka, Bangladesh</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm" data-aos="fade-left">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
                            <img class=" max-w-xs hover:scale-110 transition duration-300 ease-in-out" style={{ height: '25rem' }} src={projectImage3} alt="" />
                        </div>
                        <div class="p-6">
                            <h5 class="text-primary text-xl font-semibold text-center mb-2">Gorgeous house</h5>
                            <p class="text-primary text-base text-center">
                                <LocationOnIcon></LocationOnIcon> <span className='text-secondary'>Dhaka, Bangladesh</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProjects;