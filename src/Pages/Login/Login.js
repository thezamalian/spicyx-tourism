import React from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { handleGoogleSignIn } = useFirebase();

    // getting location & history by React-Router-Dom
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleSignInWithGoogle = () => {
        handleGoogleSignIn()
            .then(result => {
                // redirecting to the wanted page
                history.push(redirect_uri);
            })
    }

    return (
        <div className=' pb-5 my-5'
            style={{ height: '300px' }}
        >
            {/* A simple form for login but it is Disabled 
                - just to remove extra hassle of redirection system
             */}
            <form className='w-50 bg-light p-3 mx-auto rounded my-3'>

                <h1 className="h3 mb-3 fw-normal">Please Login</h1>

                <div className="form-floating ">
                    <input type="email" className="form-control mb-2 " id="floatingInput" placeholder="" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="w-50 btn btn-lg btn-success " type="submit" disabled>Sign in</button>


            </form>

            {/* Google login method is enabled for its simplicity */}
            <div className='w-50 mx-auto'>
                <button onClick={handleSignInWithGoogle} className="w-50 btn btn-lg btn-warning mx-auto" type="submit">Continue with Google</button>
            </div>

        </div>
    );
};

export default Login;