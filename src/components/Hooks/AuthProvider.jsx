import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, updateProfile, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateEmail } from 'firebase/auth';

export const UserContext = createContext(null);




export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const profileUpdate = (displayName , photoURL) => {
        return updateProfile(auth , displayName , photoURL);
    }
    const emailUpdate = (user , email) => {
        return updateEmail(auth,user,email)
    }
    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (user === undefined) {
                setLoading(true);
            } else {
                setLoading(false);
            }
            console.log( "login user" ,currentUser)
            setUser(currentUser);
        });
        return () => {
            unSubscribe();
        }
    }, []);

    const logOut = () => {
        return signOut(auth);
    }


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        profileUpdate,
        emailUpdate
    }

    return <UserContext.Provider value={authInfo} >{children}</UserContext.Provider>
};
