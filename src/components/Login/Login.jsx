import React, { useState } from 'react';
import Navbar from '../shared/Navbar/Navbar';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error =>{
            console.log( "Error", error.message);
        })
    }

    const handleGitHubSignIn = () =>{
        signInWithPopup(auth, githubProvider)
       .then(result =>{
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
        })
       .catch(error =>{
            console.log( "Error", error.message);
        })
    }


    const handleGoogleSignOut = () =>{
        signOut(auth, googleProvider)
        .then(result =>{
            console.log(result);
            setUser(null);
        })
        .catch(error =>{
            console.log( "Error", error.message);
        })
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

                    {
                        user? (
                            <button onClick={handleGoogleSignOut} className='btn btn-accent'>Logout</button>
                        ) : (
                            <div>
                                <button onClick={handleGoogleSignIn} className='btn btn-accent'>Google Login</button>
                                <button onClick={handleGitHubSignIn} className='btn btn-accent'>GitHub Login</button>
                            </div>
                        )
                    }
                </form>
            </div>
            
            {
                user && <div className='text-center'>
                    <h3>User : {user.displayName}</h3>
                    <p>Email : {user.email} </p>
                    <img src={user.photoURL} alt="" />
                </div>
            }

        </>

    );
};

export default Login;