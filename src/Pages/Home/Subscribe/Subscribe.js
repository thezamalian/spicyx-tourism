import React from 'react';

const Subscribe = () => {
    return (
        <div className='d-flex justify-content-center pt-4 mt-4 '>
            {/* <div class="col-12 offset-1">
                            <form className=''>
                                <h5>Subscribe to our newsletter about updated packages.</h5>

                                <div class="d-flex justify-content-center w-50 gap-2">
                                    <label for="newsletter1" class="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                                    <button class="btn btn-primary" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div> */}
            <form className='w-50 bg-info p-3 rounded'>

                <h1 class="h3 mb-3 fw-normal">To get Update packages</h1>

                <div class="form-floating my-2">
                    <input type="email" class="form-control" id="floatingInput" placeholder="Email" />
                    <label for="floatingInput">Email address</label>
                </div>
                {/* 
                <div class="form-floating my-2">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="" />
                    <label for="floatingPassword">Password</label>
                </div> */}

                <button class="w-100 btn btn-lg btn-warning my-2" type="submit">Subscribe</button>

            </form>
        </div>
    );
};

export default Subscribe;