import { useEffect, useState } from "react";
import initializeAuth from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    // const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const handleGoogleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);


    };


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // if (user.displayName) {
                //     user.email = 'example';
                // }
                // if (user.email) {
                //     user.displayName = 'Example';
                // }
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => setUser({}))
            .finally(() => {
                setIsLoading(false);
            })
    };

    return {
        user,
        // error,
        isLoading,
        handleGoogleSignIn,
        logOut
    }
};

export default useFirebase;