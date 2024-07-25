import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/user.png'

const Navbar = ({ user }) => {
    if(!user){
        // return <span className="loading loading-ring loading-lg"></span>
    }
    // const { displayName ,photoURL } = user;
    // console.log(user)
    const navLinks = <>
        <Link to='/'><li className='btn btn-success btn-outline px-6 rounded-tl-3xl rounded-br-3xl'>Home</li></Link>
        <Link to='/about'><li className='btn btn-success btn-outline px-6 rounded-tl-3xl rounded-br-3xl'>About</li></Link>
        <Link to='/blog'><li className='btn btn-success btn-outline px-6 rounded-tl-3xl rounded-br-3xl'>Blog</li></Link>
        <Link to='/update'><li className='btn btn-success btn-outline px-6 rounded-tl-3xl rounded-br-3xl'>Update Profile</li></Link>
        <Link to='/login'><li className='btn btn-success btn-outline px-6 rounded-tl-3xl rounded-br-3xl'>Login</li></Link>
        <Link to='/register'><li className='btn btn-success btn-outline px-6 rounded-tl-3xl rounded-br-3xl'>Register</li></Link>
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
            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        {/* <img title={displayName} src={photoURL} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;