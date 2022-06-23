import React from 'react';
import Footer from '../../Components/Footer';
import Banner from './Banner';
import HomeContact from './HomeContact';
import HomeProjects from './HomeProjects';
import HomeServices from './HomeServices';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeProjects></HomeProjects>
            <HomeServices></HomeServices>
            <Testimonial></Testimonial>
            <HomeContact></HomeContact>
            <Footer></Footer>
        </div>
    );
};

export default Home;