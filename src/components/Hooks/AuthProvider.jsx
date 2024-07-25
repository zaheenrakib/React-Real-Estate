import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth } from 'firebase/auth';

export const UserContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading , setLoading] = useState(true);
    const auth = getAuth(app)


    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user===undefined){
                setLoading(true);
            } else {
                setLoading(false);
            }
            setCurrentUser(user);
        });
    }, []);

    const values = {currentUser, loading}

    return <UserContext.Provider value={values} >{children}</UserContext.Provider>
};
