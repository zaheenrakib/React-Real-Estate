import React, { useState } from 'react';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import Counter from '../shared/Counter/Counter';
import { MdEmail, MdLocationPin } from 'react-icons/md';
import { FaPhone, FaPhoneAlt } from 'react-icons/fa';
import { Parallax } from 'react-scroll-parallax';


const Contact = () => {

    return (
        <>
            <Navbar></Navbar>

            <Parallax>
                <div  style={{
                    backgroundImage: "url(https://i.ibb.co/x7ZTMpQ/cover-2.jpg)",
                }} className="hero min-h-screen">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content  flex-col lg:flex-row">
                        <div className="text-center lg:text-left space-y-5">
                            <h1 className="text-5xl text-white  font-bold">Contact Us</h1>
                            <p className="py-6 text-[#c4eee5] text-4xl w-3/4">
                            All-inclusive real estate services to facilitate the easy and confident purchase, sale, and management of your properties.
                            </p>
                        </div>
                        <div className="card glass w-full  max-w-sm shrink-0 shadow-2xl">
                            <form className="card-body text-white">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-black text-lg">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label ">
                                        <span className="label-text text-black text-lg">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt  link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-success text-white">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Parallax>

            <div className='bg-[#6a8092] min-h-96 flex flex-col justify-center items-center'>
                <div>
                    <h1 className='text-5xl font-extrabold text-center'>Our Contact Information</h1>
                    <div className='flex gap-5'>
                        <div className="card mt-6 glass text-white w-96 shadow-xl">
                            <div className="card-body">
                                <h2 className="text-5xl font-extrabold text-black">Our Address</h2>
                                <div className='flex justify-start items-center gap-2'>
                                    <MdLocationPin className="text-5xl" />
                                    <div>
                                        <h1>2690 Hiltona Street Victoria</h1>
                                        <h1>Road, New York, Canada</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mt-6 glass text-white w-96 shadow-xl">
                            <div className="card-body">
                                <h2 className="text-5xl font-extrabold text-black">Phone Number</h2>
                                <div className='flex justify-start items-center gap-2'>
                                    <FaPhoneAlt className="text-5xl" />
                                    <div>
                                        <h1>+01 234 567 890</h1>
                                        <h1>+09 876 543 210</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mt-6 glass text-white w-96 shadow-xl">
                            <div className="card-body">
                                <h2 className="text-5xl font-extrabold text-black"> Email Address</h2>
                                <div className='flex justify-start items-center gap-2 '>
                                    <MdEmail className="text-5xl" />
                                    <div>
                                        <h1>mailinfo00@realar.com</h1>
                                        <h1>support24@realar.com</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Counter></Counter>
            <Footer></Footer>
        </>
    );
};

export default Contact;