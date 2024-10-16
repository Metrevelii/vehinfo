import React from 'react';
import HeadlineBox from './HeadlineBox';
import Advantages from './Advantages';
import AboutUs from '../AboutUs/index';
import { Fragment } from 'react';

const Home = () => {
    return (
        <Fragment>   
            <div className="homepage">
                
                <div className="container mt-330">
                    <HeadlineBox />
                    <Advantages />
                </div>
            </div>
            <AboutUs />
            <div className="container">
                <h1 className="font-interBold font-bold text-[32px] text-black mb-4 uppercase">How you can contact us</h1>
            </div>
        </Fragment>
    )
}

export default Home;