import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import 'aos/dist/aos.css';


import ResiCard from './ResiCard';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';
import { Parallax, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Counter from '../Counter/Counter';


const Home = () => {
    const residen = useLoaderData()
    // console.log(residen);

    // const [residen, setResiden] = useState([]);

    // useEffect(() =>{
    //     fetch('residential.json')
    //     .then(response => response.json())
    //     .then(data => setResiden(data))
    // },[])



    return (
        <>
            <Helmet>
                <title>NovaNest | Home</title>
            </Helmet>
            <div>
                <Navbar></Navbar>
                <div>
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/Dr9QHdC/cover-1.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/x7ZTMpQ/cover-2.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/t3dKBw4/cover-3.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/K53CfLn/cover-4.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* How Its Work Section */}
                <section className='mt-12'>
                    <div >
                        <h1 className='text-3xl our text-green-500 uppercase text-center'>Our PROPERTIES</h1>
                        <p className='text-xl text-center'>Find the perfect place to
                            Live with your family</p>
                    </div>
                </section>





                <section data-aos="fade-up" className='mt-12 '>
                    <div className='grid grid-cols-3 gap-2 my-12 mx-5'>

                        {
                            residen.map(single => <ResiCard key={single.id} single={single} ></ResiCard>)
                        }
                        {/* <ResiCard></ResiCard> */}
                    </div>

                </section>

                <section>
                    <div>
                        <Parallax>
                            <div className='bg-[#475a6b] mt-12 p-12' >
                                <div className='flex justify-center items-center'>
                                    <div className='space-y-5'>
                                        <h1 className='text-5xl text-white font-extrabold'>News & Articles</h1>
                                        <p className='text-2xl text-[#a7c8e4]  w-2/4 '>
                                            Realar help you easily create a real estate trading website. With the function Register, Login, Post real estate news.
                                        </p>
                                    </div>
                                    <div>
                                        <Link to='/blog'>
                                            <button className="btn btn-xs btn-success btn-outline  sm:btn-sm md:btn-md lg:btn-lg card-title">Brows_All_Blog</button>
                                        </Link>
                                    </div>
                                </div>
                                <ParallaxBanner className='mt-8' style={{ aspectRatio: '2 / 1' }}>
                                    <ParallaxBannerLayer speed={-20} />
                                    <video className='rounded-xl' src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/hero-3-video.mp4"></video>
                                    <ParallaxBannerLayer>
                                        <div className='flex flex-wrap gap-5 p-8 justify-center items-center'>
                                            <div className="card flex-1 glass">
                                                <figure>
                                                    <img
                                                        src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/04/blog-s-1-3-600x343.png"
                                                        alt="car!" />
                                                </figure>
                                                <div className="card-body">
                                                    <h2 className="card-title">Enrich Your Mind Envision Your Future Education for Success University class starting soon while the lovely valley team work</h2>
                                                    <p>Dynamically simplify superior human capital Relar dedicated Enrich Your Mind Envision Your Future Education for Success</p>
                                                    <div className="card-actions justify-end">
                                                        <button className="btn btn-success text-white">Learn now!</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card flex-1 glass">
                                                <figure>
                                                    <img
                                                        src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/04/blog-s-1-2-600x343.png"
                                                        alt="car!" />
                                                </figure>
                                                <div className="card-body">
                                                    <h2 className="card-title">Enrich Your Mind Envision Your Future Education for Success University class starting soon while the lovely valley team work</h2>
                                                    <p>Dynamically simplify superior human capital Relar dedicated Enrich Your Mind Envision Your Future Education for Success</p>
                                                    <div className="card-actions justify-end">
                                                        <button className="btn btn-success text-white">Learn now!</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ParallaxBannerLayer>
                                </ParallaxBanner>
                            </div>
                        </Parallax>
                    </div>
                </section>

                <Counter></Counter>


                <Footer></Footer>
            </div>
        </>
    );
};

export default Home;