
import React from 'react';
import bannerImage from '../../Assets/Image/front.png'
import Navbar from '../../Components/Navbar';

const Banner = () => {
    return (
        <div >
            
            <div
                id="carouselExampleCrossfade"
                class="carousel slide carousel-fade relative pb-24"
                data-bs-ride="carousel"
                style={{backgroundColor: '#F6F6F6'}}
            >
                <Navbar></Navbar>
                <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCrossfade"
                        data-bs-slide-to="0"
                        class=" active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCrossfade"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCrossfade"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div class="carousel-inner relative w-full overflow-hidden ">
                
                    <div class="carousel-item active float-left w-full">
                        <div className="grid grid-cols-2 lg:gap-10">
                            <div className='my-auto'>
                                <h1 className='text-6xl text-primary font-bold leading-tight'>We Build <span className='block'>Your Dream</span></h1>
                                <p className='py-5'>Online Easte Agency, the mordern way to sell your own home, You can use Griffin Residential to market your property</p>
                                <button className='bg-primary px-10 py-2 rounded text-base-100 text-sm'>Booking</button>
                            </div>
                            <div>
                                <img className='w-full' style={{height: '31.3rem'}} src={bannerImage} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item float-left w-full">
                    <div className="grid grid-cols-2 lg:gap-10">
                            <div className='my-auto'>
                                <h1 className='text-6xl text-primary font-bold leading-tight'>We Build <span className='block'>Your Dream</span></h1>
                                <p className='py-5'>Online Easte Agency, the mordern way to sell your own home, You can use Griffin Residential to market your property</p>
                                <button className='bg-primary px-10 py-2 rounded text-base-100 text-sm'>Booking</button>
                            </div>
                            <div>
                                <img className='w-full' style={{height: '31.3rem'}} src={bannerImage} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item float-left w-full">
                    <div className="grid grid-cols-2 lg:gap-10">
                            <div className='my-auto'>
                                <h1 className='text-6xl text-primary font-bold leading-tight'>We Build <span className='block'>Your Dream</span></h1>
                                <p className='py-5'>Online Easte Agency, the mordern way to sell your own home, You can use Griffin Residential to market your property</p>
                                <button className='bg-primary px-10 py-2 rounded text-base-100 text-sm'>Booking</button>
                            </div>
                            <div>
                                <img className='w-full' style={{height: '31.3rem'}} src={bannerImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCrossfade"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCrossfade"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;