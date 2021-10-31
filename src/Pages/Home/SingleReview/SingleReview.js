import React from 'react';

const SingleReview = () => {
    return (
        <div>

            <div className="col">
                <div className="card card-cover h-100 bg-warning overflow-hidden rounded-5 shadow-lg"  >
                    <div className="d-flex flex-column  h-100 p-3 pb-3  text-shadow-1">
                        <img width="80px" className='mx-auto' src="https://www.tourx-react.egenslab.com/static/media/reviewer-1.07859027.png" alt="" />
                        <h3>Destiny Yes</h3>
                        <h4 className='text-muted'>Traveller</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid maxime aut ut voluptate dolorum nisi ducimus ratione</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;