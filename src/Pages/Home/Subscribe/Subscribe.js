import React from 'react';

const Subscribe = () => {
    return (
        <div className='d-flex justify-content-center pt-4 mt-4 '>
            {/* <div className="col-12 offset-1">
                            <form className=''>
                                <h5>Subscribe to our newsletter about updated packages.</h5>

                                <div className="d-flex justify-content-center w-50 gap-2">
                                    <label for="newsletter1" className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                    <button className="btn btn-primary" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div> */}
            <form className='w-50 bg-info p-3 rounded'>

                <h1 className="h3 mb-3 fw-normal">To get Update packages</h1>

                <div className="form-floating my-2">
                    <input type="email" className="form-control" id="floatingInput" placeholder="Email" />
                    <label for="floatingInput">Email address</label>
                </div>
                {/* 
                <div className="form-floating my-2">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="" />
                    <label for="floatingPassword">Password</label>
                </div> */}

                <button className="w-100 btn btn-lg btn-warning my-2" type="submit">Subscribe</button>

            </form>
        </div>
    );
};

export default Subscribe;