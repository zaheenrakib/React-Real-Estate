import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const ResiCard = ({aResi}) => {

    const {id , estate_title} = aResi;

    console.log(estate_title);

    return (
        <div>
            {
                <h2>{estate_title}</h2>
            }

            
        </div>
    );
};

export default ResiCard;