
import React, { useEffect } from 'react';
import bannerImage from '../../Assets/Image/front.png'
import bannerImage2 from '../../Assets/Image/front2.jpg'
import bannerImage3 from '../../Assets/Image/front3.jpg'
import Navbar from '../../Components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    return (
        <div class="pb-24 px-20" style={{ backgroundColor: '#F6F6F6' }}>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-2 md:gap-10">
                <div className='my-auto' data-aos="fade-right">
                    <h1 className='text-6xl text-primary font-bold leading-tight'>We Build <span className='block'>Your Dream</span></h1>
                    <p className='py-5'>Online Easte Agency, the mordern way to sell your own home, You can use Griffin Residential to market your property</p>
                    <button className='bg-primary px-10 py-2 mb-5 rounded text-base-100 text-sm'>Booking</button>
                </div>
                <div data-aos="fade-left">
                    <div
                        id="carouselDarkVariant"
                        class="carousel slide carousel-fade carousel-dark relative"
                        data-bs-ride="carousel"
                    >
                        <div class="carousel-inner relative w-full overflow-hidden">
                            <div class="carousel-item active relative float-left w-full">
                                <div data-aos="fade-left">
                                    <img className='w-full' style={{ height: '31.3rem' }} src={bannerImage} alt="" />
                                </div>
                            </div>
                            <div class="carousel-item relative float-left w-full">
                                <div data-aos="fade-left">
                                    <img className='w-full' style={{ height: '31.3rem' }} src={bannerImage2} alt="" />
                                </div>
                            </div>
                            <div class="carousel-item relative float-left w-full">
                                <div data-aos="fade-left">
                                    <img className='w-full' style={{ height: '31.3rem' }} src={bannerImage3} alt="" />
                                </div>
                            </div>
                        </div>
                        <button
                            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                            type="button"
                            data-bs-target="#carouselDarkVariant"
                            data-bs-slide="prev"
                        >
                            <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                            type="button"
                            data-bs-target="#carouselDarkVariant"
                            data-bs-slide="next"
                        >
                            <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;