import React from 'react';
import Banner from '../Banner/Banner';
import Destinations from '../Destinations/Destinations';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';
import UserReview from '../UserReview/UserReview';

const Home = () => {
    // Home component is organized with all of its sections
    return (
        <div>
            <Banner></Banner>
            <Services></Services>

            <Destinations></Destinations>
            <UserReview></UserReview>

            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;