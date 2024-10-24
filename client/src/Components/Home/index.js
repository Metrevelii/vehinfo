import React from 'react';
import HeadlineBox from './HeadlineBox';
import Advantages from './Advantages';
import AboutUs from '../AboutUs/index';
import { Fragment } from 'react';

const Home = () => {
    return (
        <Fragment>   
            <div className="homepage">
                
                <div className="mx-auto max-w-[1432px] px-4 w-full mt-[30rem]">
                    <HeadlineBox />
                    <Advantages />
                </div>
            </div>
            <AboutUs />
            <div className="mx-auto max-w-[1432px] px-4 w-full">
                <h1 className="font-interBold font-bold text-[32px] text-black mb-4 uppercase">How you can contact us</h1>
            </div>
        </Fragment>
    )
}

export default Home;