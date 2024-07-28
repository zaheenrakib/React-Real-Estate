import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <Helmet>
                <title>NovaNest | Error</title>
            </Helmet>
            <div>
                <h2 className='text-4xl text-red-500 mt-12 text-center'>Opps</h2>
                <Link className="btn" to='/'>Go Back Home</Link>
            </div>
        </div>
    );
};

export default Error;