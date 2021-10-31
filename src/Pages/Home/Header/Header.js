import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light"
                style={{ backgroundColor: '#e3f2fd' }}
            >
                <div class="container-fluid px-5">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <NavLink class="navbar-brand" to="/"><h1 className=' fw-bolder lh-1 '>SpicyX Tourism</h1></NavLink>
                    <div class="collapse navbar-collapse " id="navbarTogglerDemo03">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0" style={{ textDecoration: 'none' }}>
                            <li class="nav-item">
                                <NavLink class="nav-link active" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" to="/my-orders">My Orders</NavLink>
                            </li>
                            <li class="nav-item ">
                                <NavLink class="nav-link" to="/login">Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;