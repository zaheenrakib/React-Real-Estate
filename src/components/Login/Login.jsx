import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../shared/Navbar/Navbar';
import { useForm } from 'react-hook-form';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { UserContext } from '../Hooks/AuthProvider';


const Login = () => {
    const { register, handleSubmit } = useForm();
    const { signIn } = useContext(UserContext);
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const onSubmit = (data) => {
        signIn(data.email, data.password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "SuccessFully Login With Email",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
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
                navigate(from, { replace: true });
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
                navigate('/');
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


    // const handleGoogleSignOut = () => {
    //     signOut(auth, googleProvider)
    //         .then(result => {
    //             console.log(result);
    //             setUser(null);
    //         })
    //         .catch(error => {
    //             console.log("Error", error.message);
    //         })
    // }
    // console.log(user)


    return (
        <>
            <Navbar></Navbar>

            <div className="hero min-h-screen bg-base-200">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: true })} name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className='btn btn-success text-white' type="submit" value="Login" />
                    </div>
                    <div>
                        <h1 className='text-center'>Don`t Have Account <Link to="/register" className='font-bold'> Sign In</Link> </h1>
                    </div>
                    <div className=' flex gap-5'>
                        <button onClick={handleGoogleSignIn} className='btn btn-accent'>Google Login</button>
                        <button onClick={handleGitHubSignIn} className='btn btn-accent'>GitHub Login</button>
                    </div>
                </form>
            </div>

            {/* {

                user && <div className='text-center'>
                    <h3>User : {user.displayName}</h3>
                    <p>Email : {user.email} </p>
                    <img className='rounded-2xl' src={user.photoURL} alt="" />
                </div>
            } */}

        </>

    );
};

export default Login;