import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <Carousel>
            <div>
                <div className='hero min-h-screen' style={{
                    backgroundImage: "url(https://i.ibb.co/K53CfLn/cover-4.jpg)",
                }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Latest News</h1>
                            <p className="mb-5">
                            Rapidiously myocardinate cross-platform intellectual capital model. Appropriately create interactive infrastructures
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <div className='hero min-h-screen' style={{
                    backgroundImage: "url(https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=600)",
                }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Latest News</h1>
                            <p className="mb-5">
                            Rapidiously myocardinate cross-platform intellectual capital model. Appropriately create interactive infrastructures
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <div className='hero min-h-screen' style={{
                    backgroundImage: "url(https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=600)",
                }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Latest News</h1>
                            <p className="mb-5">
                            Rapidiously myocardinate cross-platform intellectual capital model. Appropriately create interactive infrastructures
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <div className='hero min-h-screen' style={{
                    backgroundImage: "url(https://images.pexels.com/photos/3288103/pexels-photo-3288103.png?auto=compress&cs=tinysrgb&w=600)",
                }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Latest News</h1>
                            <p className="mb-5">
                            Rapidiously myocardinate cross-platform intellectual capital model. Appropriately create interactive infrastructures
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <div className='hero min-h-screen' style={{
                    backgroundImage: "url(https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&w=600)",
                }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Latest News</h1>
                            <p className="mb-5">
                            Rapidiously myocardinate cross-platform intellectual capital model. Appropriately create interactive infrastructures
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <div className='hero min-h-screen' style={{
                    backgroundImage: "url(https://images.pexels.com/photos/3288100/pexels-photo-3288100.png?auto=compress&cs=tinysrgb&w=600)",
                }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Latest News</h1>
                            <p className="mb-5">
                            Rapidiously myocardinate cross-platform intellectual capital model. Appropriately create interactive infrastructures.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;