import React from 'react';
import HeadlineBox from './HeadlineBox';
import Advantages from './Advantages';
import AboutUs from '../AboutUs/index';

const Home = () => {
    return (
        <>   
            <div className="homepage">
                
                <div className="container mt-330">
                    <HeadlineBox />
                    <Advantages />
                </div>
            </div>
            <AboutUs />
        </>
    )
}

export default Home;