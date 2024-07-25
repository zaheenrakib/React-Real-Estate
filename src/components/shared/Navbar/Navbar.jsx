
import React, { useContext, } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Hooks/AuthProvider';
import { getAuth, GoogleAuthProvider, signOut } from 'firebase/auth';
import app from '../../../firebase/firebase.config';
import Swal from 'sweetalert2';
import { HashLoader } from 'react-spinners';

const Navbar = () => {
    const { currentUser, loading } = useContext(UserContext);
    if(loading){
        return <HashLoader className='container mx-auto'></HashLoader>
    }
    console.log(currentUser)
    console.log(loading)

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignOut = () => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Log Out"
        }).then((result) => {
            if (result.isConfirmed) {
                signOut(auth, googleProvider)
                    .then(result => {
                        console.log(result);
                    })

                    .catch(error => {
                        console.log("Error", error.message);
                    })
                Swal.fire({
                    title: "Logged Out!",
                    text: "Your Loging Out Now.",
                    icon: "success"
                });
            }
        });

    }

    const navLinks = <>
        <Link to='/'><li className='btn btn-success btn-outline px-6 rounded-tl-3xl rounded-br-3xl'>Home</li></Link>
        <Link to='/about'><li className='btn btn-success btn-outline px-6 rounded-tl-3xl rounded-br-3xl'>About</li></Link>
        <Link to='/blog'><li className='btn btn-success btn-outline px-6 rounded-tl-3xl rounded-br-3xl'>Blog</li></Link>
        <Link to='/update'><li className='btn btn-success btn-outline px-6 rounded-tl-3xl rounded-br-3xl'>Update Profile</li></Link>
        {
            currentUser ? (
                <Link onClick={handleGoogleSignOut} to='/'><li className='btn btn-success btn-outline px-6 rounded-tl-3xl rounded-br-3xl'>LogOut</li></Link>
            ) : (
                <Link to='/login'><li className='btn btn-success btn-outline px-6 rounded-tl-3xl rounded-br-3xl'>Login</li></Link>
            )

        }
        {/* <Link to='/register'><li className='btn btn-success btn-outline px-6 rounded-tl-3xl rounded-br-3xl'>Register</li></Link> */}
    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost font-extrabold text-2xl">Real Estate</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu gap-5 menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className='navbar-end'>
                {
                    currentUser ? (

                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img title={currentUser?.displayName} src={currentUser?.photoURL} />
                            </div>
                        </div>
                    ) : (
                        <div>

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;