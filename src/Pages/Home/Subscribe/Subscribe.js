import React from 'react';

const Subscribe = () => {
    // jus an extra section for a nice UI
    return (
        <div className='d-flex justify-content-center pt-4 mt-4 '>

            <form className='w-50 bg-info p-3 rounded'>

                <h1 className="h3 mb-3 fw-normal">To get Update packages</h1>

                <div className="form-floating my-2">
                    <input type="email" className="form-control" id="floatingInput" placeholder="Email" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>

                <button className="w-100 btn btn-lg btn-warning my-2" type="submit">Subscribe</button>

            </form>
        </div>
    );
};

export default Subscribe;