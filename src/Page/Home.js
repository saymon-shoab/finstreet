import React from 'react';
import Movies from '../Components/Movies/Movies';

const Home = () => {
    return (
        <div>
            <div className='title-dev'>
                <h1 className='title'>Top Movies IN 2020</h1>
            </div>
            <Movies></Movies>
        </div>
    );
};

export default Home;