import React, { useContext, } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Hooks/AuthProvider';
import { getAuth, GoogleAuthProvider, signOut } from 'firebase/auth';
import Swal from 'sweetalert2';
import { HashLoader } from 'react-spinners';
import { Helmet } from 'react-helmet-async';

const Navbar = () => {
    const { user, loading, logOut } = useContext(UserContext);
    if (loading) {
        return <HashLoader className='container mx-auto'></HashLoader>
    }


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
                logOut()
                    .then(result => {
                        console.log("log out", result);
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
        <Helmet>
            <title></title>
        </Helmet>

        <Link to='/'><li className='btn btn-success btn-outline active:btn-ghost px-6 rounded-tl-3xl rounded-br-3xl'>Home</li></Link>
        <Link to='/about'><li className='btn btn-success btn-outline px-6 rounded-tl-3xl rounded-br-3xl'>About</li></Link>
        <Link to='/blog'><li className='btn btn-success btn-outline px-6 rounded-tl-3xl rounded-br-3xl'>Blog</li></Link>
        {
            user ? (
                <div className='flex gap-5'>
                    <Link to='/update'><li className='btn btn-success btn-outline px-6 rounded-tl-3xl rounded-br-3xl'>Update Profile</li></Link>
                    <Link onClick={handleGoogleSignOut} to='/'><li className='btn btn-success btn-outline px-6 rounded-tl-3xl rounded-br-3xl'>LogOut</li></Link>
                </div>
            ) : (
                <Link to='/login'><li className='btn btn-success btn-outline px-6 rounded-tl-3xl rounded-br-3xl'>Login</li></Link>
            )

        }
        {/* <Link to='/register'><li className='btn btn-success btn-outline px-6 rounded-tl-3xl rounded-br-3xl'>Register</li></Link> */}
    </>


    return (
        <div className="navbar bg-opacity-65 bg-base-100  z-10 ">
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
                    user ? (

                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img title={user?.displayName} src={user?.photoURL} />
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