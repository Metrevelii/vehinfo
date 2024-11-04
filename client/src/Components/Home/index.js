import React from 'react';
import HeadlineBox from './HeadlineBox';
import Advantages from './Advantages';
import AboutUs from '../AboutUs/index';
import { Fragment } from 'react';

const Home = () => {
    return (
        <Fragment>   
            <div className="homepage">
                
                <div className="mx-auto max-w-[1432px] xs:px-[0.5rem] px-4 w-full xs:mt-[80vw] lg:mt-[20rem] xl:mt-[30rem] 2xl:mt-[30rem]">
                    <HeadlineBox />
                    <Advantages />
                </div>
            </div>
            <AboutUs />
            <div className="mx-auto max-w-[1432px] px-4 w-full hidden xl:block 2xl:block">
                <h1 className="font-interBold font-bold text-[32px] text-black mb-4 uppercase">How you can contact us</h1>
            </div>
        </Fragment>
    )
}

export default Home;