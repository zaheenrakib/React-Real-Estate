import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import 'aos/dist/aos.css';


import ResiCard from './ResiCard';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

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
                <title>Real Estate | Home</title>
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





                <section data-aos="" className='mt-12'>
                    <div className='grid grid-cols-3 gap-2 my-12 mx-5'>

                        {
                            residen.map(single => <ResiCard key={single.id} single={single} ></ResiCard>    )
                        }
                        {/* <ResiCard></ResiCard> */}
                    </div>
                
                </section>

                <section>
                    <div>
                        
                    </div>
                </section>


                <Footer></Footer>
            </div>
        </>
    );
};

export default Home;