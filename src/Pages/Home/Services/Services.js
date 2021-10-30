import React from 'react';
import SingleService from '../SingleService/SingleService';

const Services = () => {
    return (
        <div className='mt-5 mx-3'>
            <h2 className='mb-3 '>Best Packages for You</h2>

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">

                <SingleService></SingleService>
                <SingleService></SingleService>
                <SingleService></SingleService>

                <SingleService></SingleService>
                <SingleService></SingleService>
                <SingleService></SingleService>

            </div>
        </div>
    );
};

export default Services;