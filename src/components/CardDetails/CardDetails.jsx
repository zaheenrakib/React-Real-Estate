import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import { useLoaderData, useParams } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';
import Footer from '../shared/Footer/Footer';
import { MdLocationPin } from 'react-icons/md';
import { Helmet } from 'react-helmet-async';

const CardDetails = () => {
    const cardResi = useLoaderData();
    const { cardId } = useParams();
    const idInt = parseInt(cardId);
    const cardItem = cardResi.find((card) => card.id == idInt);
    console.log(cardItem)
    return (
        <>
        <Helmet>
            <title>Real | Card Details</title>
        </Helmet>

            <Navbar></Navbar>
            <div className='bg-[#A4B5BA]'>
                <Parallax style={{ background: 'blue' }} speed={-5}>
                    <div>
                        <div className="hero min-h-screen" style={{ backgroundImage: `url(${cardItem.image})` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-neutral-content text-center">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">{cardItem.estate_title}</h1>
                                    <p className="mb-5">
                                        {cardItem.description}
                                    </p>
                                    <button className="btn btn-success text-white">Explore</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Parallax>
                <div>
                    <div className="hero min-h-screen">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="card  w-full max-w-sm shrink-1 shadow-2xl">
                                <form className="card-body">
                                    <h1 className='font-bold text-black'>Contact the listing owner</h1>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="Email" className="input input-bordered" required />

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Message</span>
                                        </label>
                                        <textarea className="textarea" placeholder="Message..."></textarea>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-success text-white">Send</button>
                                    </div>
                                </form>
                            </div>
                            <Parallax speed={10}>
                                <div>
                                    <h1 className="text-5xl font-bold">About This Property</h1>
                                    <p className="py-6 text-2xl">
                                        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur

                                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                                    </p>
                                    <button className="btn btn-success text-white">Get Started</button>
                                </div>
                            </Parallax>
                        </div>
                    </div>
                </div>
                <Parallax speed={10}>
                    <div className=''>
                        <div className='flex justify-center gap-3'>
                            <h1 className='text-5xl font-bold flex '>Features & </h1>
                            <h1 className='text-5xl font-bold flex '> Aamenities</h1>
                        </div>
                        <div className='flex gap-5 mt-8'>
                            <div className="flex-1">
                                <table className="table">
                                    {/* head */}
                                    <tbody>
                                        {/* row 1 */}
                                        <tr className="hover">
                                            <th>1</th>
                                            <td>Quality Control Specialist</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr className="hover">
                                            <th>2</th>
                                            <td>Hart Hagerty</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr className="hover">
                                            <th>3</th>
                                            <td>Brice Swyre</td>
                                        </tr>
                                        <tr className="hover">
                                            <th>4</th>
                                            <td>Brice Swyre</td>
                                        </tr>
                                        <tr className="hover">
                                            <th>4</th>
                                            <td>Brice Swyre</td>
                                        </tr>
                                        <tr className="hover">
                                            <th>5</th>
                                            <td>Brice Swyre</td>
                                        </tr>
                                        <tr className="hover">
                                            <th>6</th>
                                            <td>Brice Swyre</td>
                                        </tr>
                                        <tr className="hover">
                                            <th>7</th>
                                            <td>Brice Swyre</td>
                                        </tr>
                                        <tr className="hover">
                                            <th>8</th>
                                            <td>Brice Swyre</td>
                                        </tr>
                                        <tr className="hover">
                                            <th>9</th>
                                            <td>Brice Swyre</td>
                                        </tr>
                                        <tr className="hover">
                                            <th>10</th>
                                            <td>Brice Swyre</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="overflow-x-auto flex-1">
                                <table className="table">
                                    {/* head */}
                                    <tbody>
                                        {/* row 1 */}
                                        <tr className="hover">
                                            <th>1</th>
                                            <td>Quality Control Specialist</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr className="hover">
                                            <th>2</th>
                                            <td>Hart Hagerty</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr className="hover">
                                            <th>3</th>
                                            <td>Brice Swyre</td>
                                        </tr>
                                        <tr className="hover">
                                            <th>4</th>
                                            <td>Brice Swyre</td>
                                        </tr>
                                        <tr className="hover">
                                            <th>4</th>
                                            <td>Brice Swyre</td>
                                        </tr>
                                        <tr className="hover">
                                            <th>5</th>
                                            <td>Brice Swyre</td>
                                        </tr>
                                        <tr className="hover">
                                            <th>6</th>
                                            <td>Brice Swyre</td>
                                        </tr>
                                        <tr className="hover">
                                            <th>7</th>
                                            <td>Brice Swyre</td>
                                        </tr>
                                        <tr className="hover">
                                            <th>8</th>
                                            <td>Brice Swyre</td>
                                        </tr>
                                        <tr className="hover">
                                            <th>9</th>
                                            <td>Brice Swyre</td>
                                        </tr>
                                        <tr className="hover">
                                            <th>10</th>
                                            <td>Brice Swyre</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </Parallax>
                <Parallax className='ml-10' speed={10}>
                    <div>
                        <h1 className='text-5xl font-bold'>Property Video</h1>
                    </div>
                    <div className='flex gap-5' >
                        <iframe className='rounded-xl mt-6' width="853" height="480" src="https://www.youtube.com/embed/VjNsgIaTPgk" title="Touring an Architectural Modern Masterpiece in Marbella | The Hills" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <div className="card  w-full max-w-sm shrink-1 shadow-2xl">
                            <form className="card-body ">
                               <div className='space-y-5'>
                               <h1 className='font-bold text-black text-lg'>Author Info</h1>
                                <h1 className='card-title text-xl'>Name: {cardItem.owner_name}</h1>
                                <h1 className='card-title text-xl'>Segment: {cardItem.segment_name}</h1>
                                
                                <h1 className='card-title text-xl'>Price: {cardItem.price}</h1>
                                <h1 className='card-title text-xl'>Status: {cardItem.status}</h1>
                                <h1 className='card-title'>Area: {cardItem.area}</h1>
                                <h1 className='card-title flex gap-2 items-center'>
                                    <MdLocationPin />
                                    <span>{cardItem.location} 
                                    </span></h1>
                                <h1 className='card-title space-y-2'>Desc: {cardItem.description}</h1>
                               </div>
                            </form>
                        </div>
                    </div>
                </Parallax>
            </div>
            <Footer></Footer>
        </>
    );
};

export default CardDetails;