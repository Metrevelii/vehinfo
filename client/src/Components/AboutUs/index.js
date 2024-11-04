import React from 'react';

const AboutUs = () => {
     return (
        <>
        <div className="pb-[75vw] pt-[2rem] sm:pb-[12rem] sm:pt-[2rem] md:pb-[10rem] md:pt-8 xl:pb-8 xl:pt-8 2xl:pb-8 2xl:pt-8">
            <div className="mx-auto max-w-[1432px] px-4 w-full">
                <div className="w-full h-full flex justify-between items-center relative">

                <div className="flex flex-col justify-start items-start xs:rounded-[12px] sm:rounded-[12px] md:rounded-[12px] backdrop-blur-custom-19 xl:backdrop-blur-0 2xl:backdrop-blur-0 bg-linear-gradient-white xl:transparent 2xl:transparent p-[15px] 2xl:p-0 xl:p-0 w-[90%] h-[auto] xl:h-auto 2xl:h-auto xl:w-1/2 2xl:w-1/2 top-[140%] sm:top-[100%] md:top-[100%] xl:top-0 2xl:top-0 transform xl:transform-none 2xl:transform-none -translate-x-1/2 -translate-y-1/2 left-[50%] z-10 absolute sm:absolute md:absolute xl:static 2xl:static">
                    <h3 className="font-interBold font-bold  text-[20px] md:text-[26px] xl:text-[30px] 2xl:text-[32px] text-black mb-4 uppercase">SHORTLY ABOUT US</h3>
                    <p className="font-interMedium text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#535353] mt-[3rem]">lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="aboutus__image"></div>
                </div>
            </div>
        </div>
        
        </>
     )
}

export default AboutUs;