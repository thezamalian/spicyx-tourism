import React from 'react';
import burjKhalifa from '../../../images/burj-khalifa.jpg'

const SingleService = () => {
    return (
        <div>
            <div class="col">
                <div class="card h-100">
                    <img src={burjKhalifa} class="card-img-top " alt="..." style={{ height: '30vw' }} />
                    <div class="card-body">
                        <h5 class="card-title">Service Name</h5>
                        <p class="card-text">Short Description :: This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <button className='btn btn-primary w-100'>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;