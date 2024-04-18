import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        console.log('Google Mama Is comming');
    }

    console.log(app);
    return (
        <>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <button onClick={handleGoogleSignIn} className='btn btn-accent'>Google Login</button>
                </form>
                
            </div>
            

        </>

    );
};

export default Login;