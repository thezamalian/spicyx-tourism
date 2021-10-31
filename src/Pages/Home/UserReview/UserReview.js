import React from 'react';

const UserReview = () => {
    return (
        <div>
            <h2 className='mb-3 '>What Travellers Say About Us</h2>
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 pb-5 mx-3" >

                <div className="col">
                    <div className="card card-cover h-100 bg-warning overflow-hidden rounded-5 shadow-lg"  >
                        <div className="d-flex flex-column  h-100 p-3 pb-3  text-shadow-1">
                            <img width="80px" className='mx-auto' src="https://www.tourx-react.egenslab.com/static/media/reviewer-1.07859027.png" alt="" />
                            <h3>Destiny Yes</h3>
                            <h4 className='text-muted'>Traveller</h4>
                            <p>Apart from Scotland landmark, the Old Man of Stor, the Quiraing is a must for anyone who visits Isle of Skye; especially if you’re a travel photographer!</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card card-cover h-100 bg-warning overflow-hidden rounded-5 shadow-lg"  >
                        <div className="d-flex flex-column  h-100 p-3 pb-3  text-shadow-1">
                            <img width="80px" className='mx-auto rounded-pill' src="https://www.tourx-react.egenslab.com/static/media/reviewer-3.21d99f5c.png" alt="" />
                            <h3>David log</h3>
                            <h4 className='text-muted'>Traveller</h4>
                            <p>Apart from Scotlands landmark, the Old Man of Storr, the Quiraing is a must for anyone who visits Isle of Skye; especially if you’re a travel photographer!</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card card-cover h-100 bg-warning overflow-hidden rounded-5 shadow-lg"  >
                        <div className="d-flex flex-column  h-100 p-3 pb-3  text-shadow-1">
                            <img width="80px" className='mx-auto rounded-pill' src="https://www.tourx-react.egenslab.com/static/media/reviewer-2.52e03342.png" alt="" />
                            <h3>Kashem Mia</h3>
                            <h4 className='text-muted'>Traveller</h4>
                            <p>Apart from Scotlands landmark, the Old Man of Storr, the Quiraing is a must for anyone who visits Isle of Skye; especially if you’re a travel photographer!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserReview;