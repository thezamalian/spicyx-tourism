import React from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { handleGoogleSignIn } = useFirebase();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleSignInWithGoogle = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className=' pb-5 my-5'
            style={{ height: '300px' }}
        >
            <form className='w-50 bg-light p-3 mx-auto rounded my-3'>

                <h1 class="h3 mb-3 fw-normal">Please Login</h1>

                <div class="form-floating ">
                    <input type="email" class="form-control mb-2 " id="floatingInput" placeholder="" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="" />
                    <label for="floatingPassword">Password</label>
                </div>

                <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button class="w-50 btn btn-lg btn-success " type="submit" disabled>Sign in</button>


            </form>
            <div className='w-50 mx-auto'>
                <button onClick={handleSignInWithGoogle} class="w-50 btn btn-lg btn-warning mx-auto" type="submit">Continue with Google</button>
            </div>

        </div>
    );
};

export default Login;