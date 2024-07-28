import { useEffect, useState } from "react";
import { MdLocationPin } from "react-icons/md";
import AOS from 'aos';
import { Link } from "react-router-dom";
import gif from '/gig.webp'

AOS.init();



const ResiCard = ({ single }) => {
    // console.log(single)
    // const [cardItem, setCardItem] = useState([]);

    // useEffect(() => {
    //     fetch('/residential.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             setCardItem(data)
    //             console.log(data)
    //         })
    // }, [])
    // console.log(cardItem)

    // const [loading,setLoading] = useState(flase);



    const { id, estate_title, description, owner_name, owner_profile_pic, facilities, price, status, area, location, image, segment_name } = single;

    return (
        <>
            <div key={id} className="card cursor-default bg-base-100 shadow-xl">
                <figure><img data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000" className="hover:opacity-65 hover:ease-in cursor-pointer" src={image ? image : gif } alt={estate_title} /></figure>
                <div className="card-body ">
                    <h2 className="card-title text-2xl">{estate_title}</h2>
                    <div className="flex justify-center items-center gap-2">
                        <MdLocationPin />
                        <p className="opacity-65 cursor-default hover:opacity-100">{location}</p>
                    </div>
                    <div className="flex">
                        <p>Price: {price}</p>
                        <p>For: {status}</p>

                    </div>
                    <div>
                        <ul className="flex gap-2 justify-between">
                            {facilities.map((facility, index) => (
                                <li key={index}>{facility}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="divider divider-success"></div>
                    <div className="card-end">
                        <div className="flex justify-between items-center">
                            <div className="flex justify-center items-center gap-2">
                                <img className="w-16 h-16 rounded-full" src={owner_profile_pic} alt="Profile Img" />
                                <h1>{owner_name}</h1>
                            </div>

                            <Link to={`/carddetails/${id}`}>
                                <button className="btn btn-success btn-outline hover:text-white text-white">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ResiCard;