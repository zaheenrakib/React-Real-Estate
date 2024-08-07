import React, { useContext } from 'react';
import { UserContext } from '../Hooks/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(UserContext);
    const location = useLocation();
    if(loading){
        return <HashLoader className='container mx-auto'></HashLoader>
    }
    if(user) {
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace ></Navigate>
};

export default PrivateRoute;