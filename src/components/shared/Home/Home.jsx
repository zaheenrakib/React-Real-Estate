import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import { useLoaderData } from 'react-router-dom';
import ResiCard from './ResiCard';

const Home = () => {

    const resi = useLoaderData();
   

    return (
        <div>
            <Navbar></Navbar>
            {
                resi.map( aResi => <ResiCard
                key={aResi.id}
                aResi = {aResi}
                ></ResiCard>

                )
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;