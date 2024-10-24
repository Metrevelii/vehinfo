import React from 'react';

const AboutUs = () => {
     return (
        <>
        <div className="py-8">
            <div className="mx-auto max-w-[1432px] px-4 w-full">
                <div className="w-full h-full flex justify-between items-center">

                <div className="flex flex-col justify-start items-start w-1/2">
                    <h3 className="font-interBold font-bold text-[32px] text-black mb-4 uppercase">SHORTLY ABOUT US</h3>
                    <p className="font-interMedium text-[20px] text-[#535353] mt-[3rem]">lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="aboutus__image"></div>
                </div>
            </div>
        </div>
        
        </>
     )
}

export default AboutUs;