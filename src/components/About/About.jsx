import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar/Navbar';
import AOS from 'aos';
import { Helmet } from 'react-helmet-async';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

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
            <Helmet>
                <title>Real State | About </title>
            </Helmet>
            <div>
                <Navbar></Navbar>
                <h2>This is About Pages</h2>

                <Swiper spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>
                    <SwiperSlide><div className='w-full h-96 bg-green-300' >
                    </div></SwiperSlide>
                    <SwiperSlide><div className='w-full h-96 bg-blue-300' >
                    </div></SwiperSlide>
                    <SwiperSlide><div className='w-full h-96 bg-yellow-300' >
                    </div></SwiperSlide>
                    <SwiperSlide><div className='w-full h-96 bg-orange-300'>
                    </div></SwiperSlide>
                    <SwiperSlide><div className='w-full h-96 bg-green-300' >
                    </div></SwiperSlide>
                    <SwiperSlide><div className='w-full h-96 bg-blue-300' >
                    </div></SwiperSlide>
                    <SwiperSlide><div className='w-full h-96 bg-yellow-300' >
                    </div></SwiperSlide>
                    <SwiperSlide><div className='w-full h-96 bg-orange-300'>
                    </div></SwiperSlide>
                    <SwiperSlide><div className='w-full h-96 bg-green-300' >
                    </div></SwiperSlide>
                    <SwiperSlide><div className='w-full h-96 bg-blue-300' >
                    </div></SwiperSlide>
                    <SwiperSlide><div className='w-full h-96 bg-yellow-300' >
                    </div></SwiperSlide>
                    <SwiperSlide><div className='w-full h-96 bg-orange-300'>
                    </div></SwiperSlide>
                </Swiper>

                

            </div>
        </>
    );
};

export default About;