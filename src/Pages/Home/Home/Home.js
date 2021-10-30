import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <div style={{ height: '200px' }}>
                <h2>Extra-1 :: (User-Review, Why-with-Us, -Accordion)</h2>
            </div>
            <div style={{ height: '200px' }}>
                <h2>Extra-2 :: (Latest-Blog, Stories, Gallery, Popular-Destinations)</h2>
            </div>
        </div>
    );
};

export default Home;