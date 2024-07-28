import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import Banner from '../shared/Banner/Banner';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    return (
        <>
            <Helmet>
                <title>Real Estate | Blog</title>
            </Helmet>
            <div>
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
        </>
    );
};

export default Blog;