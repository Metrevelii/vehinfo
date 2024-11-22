import React from 'react';

const AdvantageBox = ({ icon, title, description, bgColor, textColor, paraColor }) => {
    return (
        <div className={`group bg-primary-whiteOpacity sm:bg-primary-white  md:bg-primary-white lg:bg-primary-white xl:bg-primary-white 2xl:bg-primary-white xs:w-full xs:h-[55vw] w-full h-[40vw] md:w-full md:h-[250px] lg:w-full lg:h-[250px] xl:w-full xl:h-[295px] 2xl:w-[340px] 2xl:h-[315px] flex flex-col justify-start items-start xs:p-[2vw_2vw] md:p-[2rem_1.5rem] p-[3rem_1.5rem] rounded-[12px] ${bgColor} transition-all duration-300 ease-in-out hover:bg-linear-gradient-orange backdrop-blur-custom-25 shadow-custom`}>
            <div className="group-hover:scale-110 shrink-0  xs:w-[9.5vw] xs:h-[9.5vw] sm:w-[38px] sm:h-[38px] w-[52px] h-[52px] rounded-full bg-white flex justify-center items-center shadow-custom">{icon}</div>
            <h3 className={`xs:mt-[1vw] sm:mt[0.7rem] md:mt-[1rem] xl:mt-[1rem] 2xl:mt-[1rem] font-interBold xs:text-[14px] sm:text-[3.8vw] md:text-[20px] text-[24px] text-primary-black font-bold mb-[0] `}>{title}</h3>
            <p className={`text-primary-black font-interRegular xs:mt-[1vw] sm:mt-[0.7rem]  leading-[14px] sm:leading-[16px] md:leading-[16px] xl:leading-[18px] 2xl:leading-[18px] md:mt-[1rem] mt-[1.5rem] xs:text-[3vw] sm:text-[14px] md:text-[16px] text-18px`}>{description}</p>
        </div>
    );
};

export default AdvantageBox;