import React, { useContext, } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../Hooks/AuthProvider';
import { getAuth, GoogleAuthProvider, signOut } from 'firebase/auth';
import Swal from 'sweetalert2';
import { HashLoader } from 'react-spinners';
import logo from '/user.png'


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


        <li className=' px-5'><NavLink to='/'>Home</NavLink></li>
        <li className=' px-5'><NavLink to='/about'>About</NavLink></li>
        <li className=' px-5'><NavLink to='/contact'>Contact</NavLink></li>
        <li className='  px-5'><NavLink to='/blog'>blog</NavLink></li>
        {
            user ? (
                <div className='flex gap-5'>
                    <li className=' px-5'><NavLink to='/update'>Update Profile</NavLink></li>
                    <li className=' px-5'><NavLink onClick={handleGoogleSignOut} to='/'>LogOut</NavLink></li>
                </div>
            ) : (
                <li className=' px-5'><NavLink to='/login'>Login</NavLink></li>
            )

        }
        {/* <Link to='/register'><li className='btn btn-success btn-outline px-6'>Register</li></Link> */}
    </>


    return (
        <div className="navbar fixed  z-10 bg-opacity-30 bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="custom menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost font-extrabold text-2xl">NovaNest</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="custom gap-5 menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className='navbar-end'>
                {
                    user ? (
                        <div className='flex justify-center items-center gap-2'>
                            <h1>{user.email}</h1>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img title={user?.displayName} src={user.photoURL ? user.photoURL : logo} />
                                </div>
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