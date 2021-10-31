import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>

            <div class="container">
                <footer class="py-5">
                    <div class="row">
                        <div class="col-6">
                            <h2>SpicyX Tourism</h2>
                        </div>
                        <div class="col-6">
                            <ul class="nav flex">
                                <li class="nav-item mb-2 mx-2"><Link to="/" class="nav-link p-0 text-muted">Home </Link></li>
                                <li class="nav-item mb-2 mx-2"><Link to="/" class="nav-link p-0 text-muted">Packages </Link></li>
                                <li class="nav-item mb-2 mx-2"><Link to="/" class="nav-link p-0 text-muted">Pricing </Link></li>
                                <li class="nav-item mb-2 mx-2"><Link to="/" class="nav-link p-0 text-muted">FAQs </Link></li>
                                <li class="nav-item mb-2 mx-2"><Link to="/" class="nav-link p-0 text-muted">About</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div class="d-flex justify-content-center py-4 my-4 border-top">
                        <p>&copy; 2021 SpicyX, Inc. All rights reserved.</p>

                        {/* <ul class="list-unstyled d-flex">
                            <li class="ms-3"><Link class="link-dark" to="/"><svg class="bi" width="24" height="24">
                                <use xlink:href="#twitter" />
                            </svg></Link></li>
                            <li class="ms-3"><Link class="link-dark" to="/"><svg class="bi" width="24" height="24">
                                <use xlink:href="#instagram" />
                            </svg></Link></li>
                            <li class="ms-3"><Link class="link-dark" to="/"><svg class="bi" width="24" height="24">
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