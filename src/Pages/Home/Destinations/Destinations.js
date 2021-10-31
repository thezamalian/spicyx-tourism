import React from 'react';
import award from '../../../images/award.svg'
import des1 from '../../../images/nat-1-large.jpg'
import des2 from '../../../images/nat-2-large.jpg'
import des3 from '../../../images/nat-3-large.jpg'

const Destinations = () => {
    return (
        <div>

            <div className="container px-4 py-5" id="custom-cards">
                <h2 className="border-bottom">Popular Destinations</h2>

                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4  pt-3 pb-5">

                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
                            style={{ backgroundImage: `url(${des1})` }}>
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-warning">India for Everyone</h2>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <img src={award} alt="Bootstrap" width="32" height="32"
                                            className="rounded-circle bg-warning p-1" />
                                    </li>
                                    <li className="d-flex align-items-center me-3">

                                        <small>India</small>
                                    </li>
                                    <li className="d-flex align-items-center">

                                        <small>3d</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-cover h-100  text-white bg-dark rounded-5 shadow-lg"
                            style={{ backgroundImage: `url(${des2})` }}>
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-black">With All Hills and Nature to Enjoy the Life of Your Dream</h2>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <img src={award} alt="Bootstrap" width="32" height="32"
                                            className="rounded-circle bg-warning p-1" />
                                    </li>
                                    <li className="d-flex align-items-center me-3">

                                        <small>Pakistan</small>
                                    </li>
                                    <li className="d-flex align-items-center">

                                        <small>4d</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
                            style={{ backgroundImage: `url(${des3})` }}>
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-danger">Another Place with Nature and Modernism</h2>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <img src={award} alt="Bootstrap" width="32" height="32"
                                            className="rounded-circle  bg-warning p-1" />
                                    </li>
                                    <li className="d-flex align-items-center me-3">

                                        <small>California</small>
                                    </li>
                                    <li className="d-flex align-items-center">

                                        <small>5d</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destinations;