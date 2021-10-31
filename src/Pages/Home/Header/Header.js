import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const { user, logOut } = useFirebase();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light"
                style={{ backgroundColor: '#e3f2fd' }}
            >
                <div className="container-fluid px-5">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <NavLink className="navbar-brand" to="/"><h1 className=' fw-bolder lh-1 '>SpicyX Tourism</h1></NavLink>
                    <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ textDecoration: 'none' }}>

                            <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>

                            {
                                user?.displayName ?
                                    <div className='d-flex'>
                                        <NavLink className="nav-link" to="/my-packages">My Packages</NavLink>
                                        <NavLink className="nav-link" to="/manage-packages">Manage All Packages</NavLink>
                                        <NavLink className="nav-link" to="/add-package">Add Package</NavLink>
                                        <h5 className='mx-3'> {user?.displayName} </h5>
                                        {
                                            user?.photoURL ?
                                                <img width="50px" className='rounded-circle me-1' src={user?.photoURL} alt="" />
                                                :
                                                <img width="50px" className='rounded-circle me-1' src="https://image.flaticon.com/icons/png/512/1100/1100503.png" alt="" />
                                        }
                                        <button onClick={(event) => { event.preventDefault(); logOut(); }} className='btn btn-danger' type="button" value="Log Out" >Log Out</button>
                                    </div> :
                                    <NavLink className="nav-link" to="/login">Login</NavLink>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;