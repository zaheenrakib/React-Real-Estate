import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar/Navbar';
import AOS from 'aos';
import { Helmet } from 'react-helmet-async';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Parallax, ParallaxBanner, ParallaxBannerLayer, useParallax } from 'react-scroll-parallax';
import Footer from '../shared/Footer/Footer';
import { FaQuoteRight } from 'react-icons/fa';
import Counter from '../shared/Counter/Counter';

AOS.init();


const About = () => {



    const [cardItem, setCardItem] = useState([]);

    useEffect(() => {
        fetch('/residential.json')
            .then(res => res.json())
            .then(data => {
                setCardItem(data)
                console.log(data)
            })
    }, [])

    console.log(cardItem)


    return (
        <>
            <Navbar></Navbar>
            <Helmet>
                <title>Real Estate | About </title>
            </Helmet>
            <div className='bg-[#a4b5ba]'>
                <Parallax speed={-5}>
                    <div>
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://wordpress.themeholy.com/realar/wp-content/uploads/2024/04/breadcumb-bg.png)' }}>
                            <div className="hero-overlay bg-opacity-0"></div>
                            <div className="hero-content text-neutral-content text-center">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">About Us</h1>
                                    <p className="mb-5">

                                    </p>
                                    <button className="btn btn-success text-white">Explore</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Parallax>

                <Parallax speed={-10}>
                    <div className="hero min-h-screen">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img
                                src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/about_3_2.png"
                                className="w-[500px] h-96  rounded-lg shadow-2xl" />
                            <div className='flex-1'>
                                <h1 className="text-5xl font-bold">Realar Vission & Mission</h1>
                                <p className="py-6 text-2xl">
                                    You are the center of our process. Your needs, your wants, and your goals. We actively listen, always keep it even keel — never rushing you or pushing something you don’t need.

                                    Full transparency is our goal. We stay connected while building your home, clearly outlining next steps and collaborating with you to select personal design details. From day one, your peace of mind is our highest priority.
                                </p>
                            </div>
                        </div>
                    </div>
                </Parallax>
                <Parallax speed={-10}>
                    <div className="hero min-h-screen">
                        <div className="hero-content flex-col lg:flex-row">
                            <img
                                src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/1-2.png"
                                className="w-[500px] h-96 rounded-lg shadow-2xl" />
                            <div className='flex-1'>
                                <p className="text-2xl">
                                    We design homes for how people live. Centered Design is our philosophy, our approach to creating spaces that energize and inspire.
                                    Our floor plan designs focus on three elements: natural light, color, and clean air all qualities that support your wellbeing and energy levels. When you walk into our homes, you’ll see design that puts people first, and more importantly, you’ll feel it.
                                </p>

                            </div>
                        </div>
                    </div>
                </Parallax>
            </div>

            <Parallax speed={10}>
                <div className='bg-[#314457] p-12 '>
                    <div className='mt-10'>
                        <h1 className='text-5xl text-white font-extrabold'>Why Choose Us?</h1>
                        <p className='text-xl text-[#acc6e0] w-2/4 '>We are a real estate firm with over 20 years of expertise, and our main goal is to provide amazing locations to our partners and clients. Within the luxury real estate market, our agency offers customized solutions.</p>
                    </div>
                    <div className='flex justify-evenly mt-8 flex-wrap spinner'>
                        <div className="card thumbsup   w-96 shadow-xl">
                            <div className="card-body">
                                <h2 className="text-5xl text-white">Property Valuation</h2>
                                <p className='text-[#acc6e0]'>All living, dining, kitchen and play areas were devised by attached to the home.</p>
                            </div>
                            <figure>
                                <img className='h-80'
                                    src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/property-s-1-1-416x360.png"
                                    alt="Shoes" />
                            </figure>
                        </div>
                        <div className="card clap w-96 shadow-xl">
                            <div className="card-body">
                                <h2 className="text-5xl text-white">Property Management</h2>
                                <p className='text-[#acc6e0]' >Generous amounts of south facing glazing maximize the solar gains for most of the year.</p>
                            </div>
                            <figure>
                                <img className='h-80'
                                    src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/1-3.png"
                                    alt="Shoes" />
                            </figure>
                        </div>
                        <div className="card handsup w-96 shadow-xl">
                            <div className="card-body">
                                <h2 className="text-5xl text-white">Invest Opportunities</h2>
                                <p className='text-[#acc6e0]'>All-inclusive real estate services to facilitate the easy management of your properties.</p>
                            </div>
                            <figure>
                                <img className='h-80'
                                    src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/1-2.png"
                                    alt="Shoes" />
                            </figure>
                        </div>
                    </div>
                </div>

            </Parallax>

            <Parallax>
                <div className='bg-[#475a6b] p-6' >
                    <div>
                        <h1 className='text-5xl text-white font-extrabold'>What Our Customers Says</h1>
                        <p className='text-2xl text-[#a7c8e4]  w-2/4 '>
                            Realar help you easily create a real estate trading website. With the function Register, Login, Post real estate news.
                        </p>
                    </div>
                    <ParallaxBanner style={{ aspectRatio: '2 / 1' }}>
                        <ParallaxBannerLayer image="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/property_inner_4.png" speed={-20} />
                        <ParallaxBannerLayer>
                            <div className='mt-24 p-5'>
                                <Swiper spaceBetween={50}
                                    slidesPerView={3}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}>

                                    <SwiperSlide>
                                        <div>
                                            <div className="card glass w-96">
                                                <div className="card-body">
                                                    <div className="rating rating-lg rating-half">
                                                        <input type="radio" name="rating-10" className="rating-hidden" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500"
                                                        />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" defaultChecked />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                                    </div>
                                                    <h2 className="card-title">Jhon Due</h2>
                                                    <p>"Home is where love resides, memories are created, and dreams are nurtured. I have found my sanctuary in this beautiful property. Finding the perfect that resonates with your own"</p>
                                                    <div className="divider divider-success divider-end"><FaQuoteRight /></div>
                                                    <div className="card-actions">
                                                        <div className="flex justify-center items-center gap-2">
                                                            <img className="w-16 h-16 rounded-full" src="https://images.pexels.com/photos/3775156/pexels-photo-3775156.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Profile Img" />
                                                            <h1>Jhon Due</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div>
                                            <div className="card glass w-96">
                                                <div className="card-body">
                                                    <div className="rating rating-lg rating-half">
                                                        <input type="radio" name="rating-10" className="rating-hidden" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500"
                                                        />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" defaultChecked />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                                    </div>
                                                    <h2 className="card-title">Jhon Due</h2>
                                                    <p>"Home is where love resides, memories are created, and dreams are nurtured. I have found my sanctuary in this beautiful property. Finding the perfect that resonates with your own"</p>
                                                    <div className="divider divider-success divider-end"><FaQuoteRight /></div>
                                                    <div className="card-actions">
                                                        <div className="flex justify-center items-center gap-2">
                                                            <img className="w-16 h-16 rounded-full" src="https://images.pexels.com/photos/3775156/pexels-photo-3775156.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Profile Img" />
                                                            <h1>Jhon Due</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div>
                                            <div className="card glass w-96">
                                                <div className="card-body">
                                                    <div className="rating rating-lg rating-half">
                                                        <input type="radio" name="rating-10" className="rating-hidden" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500"
                                                        />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" defaultChecked />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                                    </div>
                                                    <h2 className="card-title">Jhon Due</h2>
                                                    <p>"Home is where love resides, memories are created, and dreams are nurtured. I have found my sanctuary in this beautiful property. Finding the perfect that resonates with your own"</p>
                                                    <div className="divider divider-success divider-end"><FaQuoteRight /></div>
                                                    <div className="card-actions">
                                                        <div className="flex justify-center items-center gap-2">
                                                            <img className="w-16 h-16 rounded-full" src="https://images.pexels.com/photos/3775156/pexels-photo-3775156.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Profile Img" />
                                                            <h1>Jhon Due</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div>
                                            <div className="card glass w-96">
                                                <div className="card-body">
                                                    <div className="rating rating-lg rating-half">
                                                        <input type="radio" name="rating-10" className="rating-hidden" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500"
                                                        />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" defaultChecked />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                                    </div>
                                                    <h2 className="card-title">Jhon Due</h2>
                                                    <p>"Home is where love resides, memories are created, and dreams are nurtured. I have found my sanctuary in this beautiful property. Finding the perfect that resonates with your own"</p>
                                                    <div className="divider divider-success divider-end"><FaQuoteRight /></div>
                                                    <div className="card-actions">
                                                        <div className="flex justify-center items-center gap-2">
                                                            <img className="w-16 h-16 rounded-full" src="https://images.pexels.com/photos/3775156/pexels-photo-3775156.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Profile Img" />
                                                            <h1>Jhon Due</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div>
                                            <div className="card glass w-96">
                                                <div className="card-body">
                                                    <div className="rating rating-lg rating-half">
                                                        <input type="radio" name="rating-10" className="rating-hidden" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500"
                                                        />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" defaultChecked />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                                    </div>
                                                    <h2 className="card-title">Jhon Due</h2>
                                                    <p>"Home is where love resides, memories are created, and dreams are nurtured. I have found my sanctuary in this beautiful property. Finding the perfect that resonates with your own"</p>
                                                    <div className="divider divider-success divider-end"><FaQuoteRight /></div>
                                                    <div className="card-actions">
                                                        <div className="flex justify-center items-center gap-2">
                                                            <img className="w-16 h-16 rounded-full" src="https://images.pexels.com/photos/3775156/pexels-photo-3775156.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Profile Img" />
                                                            <h1>Jhon Due</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div>
                                            <div className="card glass w-96">
                                                <div className="card-body">
                                                    <div className="rating rating-lg rating-half">
                                                        <input type="radio" name="rating-10" className="rating-hidden" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500"
                                                        />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" defaultChecked />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                                    </div>
                                                    <h2 className="card-title">Jhon Due</h2>
                                                    <p>"Home is where love resides, memories are created, and dreams are nurtured. I have found my sanctuary in this beautiful property. Finding the perfect that resonates with your own"</p>
                                                    <div className="divider divider-success divider-end"><FaQuoteRight /></div>
                                                    <div className="card-actions">
                                                        <div className="flex justify-center items-center gap-2">
                                                            <img className="w-16 h-16 rounded-full" src="https://images.pexels.com/photos/3775156/pexels-photo-3775156.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Profile Img" />
                                                            <h1>Jhon Due</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </ParallaxBannerLayer>
                    </ParallaxBanner>

                </div>
            </Parallax>

            <Parallax>
                <div className='bg-[#475a6b] p-12'>
                    <h2 className='text-5xl text-white font-extrabold'>Meet The Awesome Team</h2>
                    <p className='text-2xl w-1/2 text-[#8fa9c0]'>Realar help you easily create a real estate trading website. With the function Register, Login, Post real estate news.</p>
                    <Swiper className='mt-12' spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}>
                        <SwiperSlide>
                            <div>
                                <img className='w-96 h-80 rounded-2xl shadow-xl' src="https://images.pexels.com/photos/3775156/pexels-photo-3775156.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <h1 className='text-center text-xl text-white'>Sarika</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div  >
                                <img className='w-96 h-80 rounded-2xl shadow-xl' src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <h1 className='text-center text-xl text-white'>Kabir</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div  >
                                <img className='w-96 h-80 rounded-2xl shadow-xl' src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <h1 className='text-center text-xl text-white'>Arif</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div  >
                                <img className='w-96 h-80 rounded-2xl shadow-xl' src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <h1 className='text-center text-xl text-white'>Sufiun</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div  >
                                <img className='w-96 h-80 rounded-2xl shadow-xl' src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <h1 className='text-center text-xl text-white'>Sumon</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div  >
                                <img className='w-96 h-80 rounded-2xl shadow-xl' src="https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <h1 className='text-center text-xl text-white'>Saizaea</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div  >
                                <img className='w-96 h-80 rounded-2xl shadow-xl' src="https://images.pexels.com/photos/2918513/pexels-photo-2918513.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <h1 className='text-center text-xl text-white'>Shamim</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div  >
                                <img className='w-96 h-80 rounded-2xl shadow-xl' src="https://images.pexels.com/photos/2340978/pexels-photo-2340978.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <h1 className='text-center text-xl text-white'>Joen Due</h1>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Parallax>



            <Counter></Counter>
            <Footer></Footer>

        </>
    );
};

export default About;