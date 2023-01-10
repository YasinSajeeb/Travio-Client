import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Counter></Counter>
            <HomeServices></HomeServices>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;