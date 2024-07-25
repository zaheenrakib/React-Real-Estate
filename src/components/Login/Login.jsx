import React, { useState } from 'react';
import Navbar from '../shared/Navbar/Navbar';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();


    auth.onAuthStateChanged((user)=> {
        if(user){
            setUser(user);
        }
    })
    // console.log(user);

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "SuccessFully Login",
                    showConfirmButton: false,
                    timer: 1500
                });
                // navigate('/');
            })
            .catch(error => {
                console.log("Error", error.message);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!"
                });
            })
    }

    const handleGitHubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "SuccessFully Login",
                    showConfirmButton: false,
                    timer: 1500
                });
                // navigate('/');
            })
            .catch(error => {
                console.log("Error", error.message);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!"
                });
            })
    }


    const handleGoogleSignOut = () => {
        signOut(auth, googleProvider)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
                console.log("Error", error.message);
            })
    }
    return (
        <>
            <Navbar
            
            user={user}
            
            ></Navbar>



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
                        user ? (
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
                    <img className='rounded-2xl' src={user.photoURL} alt="" />
                </div>
            }

        </>

    );
};

export default Login;