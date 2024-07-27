import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import { useLoaderData, useParams } from 'react-router-dom';

const CardDetails = () => {
    const cardResi = useLoaderData();
    const { cardId } = useParams();
    const idInt = parseInt(cardId);
    const cardItem = cardResi.find((card) => card.id == idInt);
    console.log(cardItem)
    return (
        <>
        <Navbar></Navbar>
            <div>
                <h1>{cardItem.id}</h1>
            </div>
        </>
    );
};

export default CardDetails;