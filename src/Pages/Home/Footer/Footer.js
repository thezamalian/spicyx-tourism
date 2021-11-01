import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    // a simple footer but it is not active as it should be
    return (
        <div>

            <div className="container">
                <footer className="py-5">
                    <div className="row">
                        <div className="col-6 ">
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <h2>SpicyX Tourism</h2>
                            </Link>
                        </div>

                        <div className="col-6">
                            <ul className="list-unstyled nav flex">
                                <li className="nav-item mb-2 mx-2"><Link to="/" className="nav-link p-0">Home </Link></li>
                                <li className="nav-item mb-2 mx-2"><Link to="/" className="nav-link p-0">Packages </Link></li>
                                <li className="nav-item mb-2 mx-2"><Link to="/" className="nav-link p-0">Pricing </Link></li>
                                <li className="nav-item mb-2 mx-2"><Link to="/" className="nav-link p-0">FAQs </Link></li>
                                <li className="nav-item mb-2 mx-2"><Link to="/" className="nav-link p-0">About</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center py-4 my-4 border-top">
                        <p>&copy; 2021 SpicyX, Inc. All rights reserved.</p>

                        {/* <ul className="list-unstyled d-flex">
                            <li className="ms-3"><Link className="link-dark" to="/"><svg className="bi" width="24" height="24">
                                <use xlink:href="#twitter" />
                            </svg></Link></li>
                            <li className="ms-3"><Link className="link-dark" to="/"><svg className="bi" width="24" height="24">
                                <use xlink:href="#instagram" />
                            </svg></Link></li>
                            <li className="ms-3"><Link className="link-dark" to="/"><svg className="bi" width="24" height="24">
                                <use xlink:href="#facebook" />
                            </svg></Link></li>
                        </ul> */}
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;