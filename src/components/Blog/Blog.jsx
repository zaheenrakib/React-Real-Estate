import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import Banner from '../shared/Banner/Banner';
import { Helmet } from 'react-helmet-async';
import Counter from '../shared/Counter/Counter';
import Footer from '../shared/Footer/Footer';
import { Parallax } from 'react-scroll-parallax';

const Blog = () => {
    return (
        <>
            <Helmet>
                <title>Real Estate | Blog</title>
            </Helmet>
            <div>
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
            <Parallax>
                <div className='bg-[#51687a] flex gap-5 mt-0 p-12'>
                    <div className="card text-white card-compact glass w-96 shadow-xl">
                        <figure>
                            <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="" />
                        </figure>
                        <div className="card-body">
                            <div className='flex gap-5 justify-center'>
                                <h1>Realar</h1>
                                <h1>April 17, 2024</h1>
                                <h1>Modern Houses</h1>
                            </div>
                            <h2 className="card-title">University class starting soon while the lovely valley team work</h2>
                            <p>Relar Residence promotes sustainable transportation options, with dedicated spaces. Welcome to Realar Residence, where sustainability meets comfort in every corner. In this blog post, we’ll explore the green innovations seamlessly integrated into the fabric of EcoLand, creating a unique</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card text-white card-compact glass w-96 shadow-xl">
                        <figure>
                            <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="" />
                        </figure>
                        <div className="card-body">
                            <div className='flex gap-5 justify-center'>
                                <h1>Realar</h1>
                                <h1>April 17, 2024</h1>
                                <h1>Modern Houses</h1>
                            </div>
                            <h2 className="card-title">University class starting soon while the lovely valley team work</h2>
                            <p>Relar Residence promotes sustainable transportation options, with dedicated spaces. Welcome to Realar Residence, where sustainability meets comfort in every corner. In this blog post, we’ll explore the green innovations seamlessly integrated into the fabric of EcoLand, creating a unique</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card text-white card-compact glass w-96 shadow-xl">
                        <figure>
                            <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="" />
                        </figure>
                        <div className="card-body">
                            <div className='flex gap-5 justify-center'>
                                <h1>Realar</h1>
                                <h1>April 17, 2024</h1>
                                <h1>Modern Houses</h1>
                            </div>
                            <h2 className="card-title">University class starting soon while the lovely valley team work</h2>
                            <p>Relar Residence promotes sustainable transportation options, with dedicated spaces. Welcome to Realar Residence, where sustainability meets comfort in every corner. In this blog post, we’ll explore the green innovations seamlessly integrated into the fabric of EcoLand, creating a unique</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </Parallax>

            <Counter></Counter>

            <Footer></Footer>
        </>
    );
};

export default Blog;