import React from 'react';
import { Link } from 'react-router-dom';
import burjKhalifa from '../../../images/burj-khalifa.jpg'
    ;
const SingleService = () => {
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={burjKhalifa} className="card-img-top " alt="..." style={{ height: '30vw' }} />
                    <div className="card-body">
                        <h5 className="card-title">Service Name</h5>
                        <p className="card-text">Short Description :: This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                        <Link to="/book-now">
                            <button className='btn btn-primary w-100'>Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;