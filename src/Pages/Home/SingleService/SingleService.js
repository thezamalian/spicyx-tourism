import React from 'react';
import { Link } from 'react-router-dom';
// import burjKhalifa from '../../../images/burj-khalifa.jpg'
;

const SingleService = ({ service }) => {
    // showing a single service rendered by all-service & home compo
    const { _id, name, image, detail } = service;

    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={image} className="card-img-top " alt="..." style={{ height: '30vw' }} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{detail}</p>

                        <Link to={`/book-now/${_id}`}>
                            <button className='btn btn-primary w-100'>Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;