import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <Carousel>
                <div className=''>
                    <img src="https://i.ibb.co/K53CfLn/cover-4.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/t3dKBw4/cover-3.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/x7ZTMpQ/cover-2.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/Dr9QHdC/cover-1.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/Dr9QHdC/cover-1.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/t3dKBw4/cover-3.jpg" />
                </div>
        </Carousel>
    );
};

export default Banner;