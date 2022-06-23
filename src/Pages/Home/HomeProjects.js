import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import projectImage from '../../Assets/Image/bernard.png'
import projectImage2 from '../../Assets/Image/Mask Group.png'
import projectImage3 from '../../Assets/Image/Mask Group-1.png'

const HomeProjects = () => {
    return (
        <div className='py-20'>
            <p className='text-primary text-center'>Projects</p>
            <h2 className='text-center text-4xl font-bold text-primary leading-snug'>Discover the latest Interior Design <br /> available today</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 pt-20'>
                <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!">
                            <img class="rounded-t-lg" src={projectImage} alt="" />
                        </a>
                        <div class="p-6">
                            <h5 class="text-primary text-xl font-semibold text-center mb-2">Card title</h5>
                            <p class="text-primary text-base text-center">
                                <LocationOnIcon></LocationOnIcon> <span className='text-secondary'>Dhaka, Bangladesh</span>
                            </p>               
                        </div>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!">
                            <img class="rounded-t-lg" src={projectImage2} alt="" />
                        </a>
                        <div class="p-6">
                            <h5 class="text-primary text-xl font-semibold text-center mb-2">Card title</h5>
                            <p class="text-primary text-base text-center">
                                <LocationOnIcon></LocationOnIcon> <span className='text-secondary'>Dhaka, Bangladesh</span>
                            </p>               
                        </div>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!">
                            <img class="rounded-t-lg" src={projectImage3} alt="" />
                        </a>
                        <div class="p-6">
                            <h5 class="text-primary text-xl font-semibold text-center mb-2">Card title</h5>
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