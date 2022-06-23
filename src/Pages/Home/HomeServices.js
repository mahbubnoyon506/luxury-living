import React from 'react';
import serviceIcon from '../../Assets/Icon/affordable 1.png'
import serviceIcon2 from '../../Assets/Icon/apartment 1.png'
import serviceIcon3 from '../../Assets/Icon/lessee 1.png'

const HomeServices = () => {
    return (
        <div className='py-20' >
            <p className='text-primary text-center'>Service</p>
            <h2 className='text-center text-4xl font-bold text-primary leading-snug'>We're an agency tailored to all <br /> clients' needs that always delivers</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 pt-20'>
                <div class="flex justify-center">
                    <div class="rounded-lg hover:shadow-2xl hover:bg-base-100 max-w-sm pt-10">
                        <a href="#!">
                            <img class="rounded-t-lg w-20 mx-auto" src={serviceIcon2} alt="" />
                        </a>
                        <div class="p-6">
                            <h5 class="text-accent text-xl font-semibold text-center ">Card title</h5>
                            <h6 class="text-primary text- font-semibold text-center ">$99</h6>
                            <p class="text-secondary text-base text-center">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                            </p>               
                        </div>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="rounded-lg hover:shadow-2xl hover:bg-base-100 max-w-sm pt-10">
                        <a href="#!">
                            <img class="rounded-t-lg w-20 mx-auto" src={serviceIcon} alt="" />
                        </a>
                        <div class="p-6">
                            <h5 class="text-accent text-xl font-semibold text-center ">Card title</h5>
                            <h6 class="text-primary text- font-semibold text-center ">$99</h6>
                            <p class="text-secondary text-base text-center">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                            </p>               
                        </div>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="rounded-lg hover:shadow-2xl hover:bg-base-100 max-w-sm pt-10">
                        <a href="#!">
                            <img class="rounded-t-lg w-20 mx-auto" src={serviceIcon3} alt="" />
                        </a>
                        <div class="p-6">
                            <h5 class="text-accent text-xl font-semibold text-center ">Card title</h5>
                            <h6 class="text-primary text- font-semibold text-center ">$99</h6>
                            <p class="text-secondary text-base text-center">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                            </p>               
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center pt-10'>
            <button className='bg-primary px-10 py-2 rounded text-base-100 text-sm'>Explore More</button>
            </div>
        </div>
    );
};

export default HomeServices;