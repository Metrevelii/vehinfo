import React from 'react';

const AdvantageBox = ({ icon, title, description, bgColor, description2 }) => {
    return (
        <div className={`group bg-primary-whiteOpacity sm:bg-primary-whiteOpacity  md:bg-primary-whiteOpacity lg:bg-primary-whiteOpacity xl:bg-primary-whiteOpacity 2xl:bg-primary-whiteOpacity xs:w-full xs:h-[55vw] w-full h-[40vw] md:w-full md:h-[250px] lg:w-full lg:h-[250px] xl:w-full xl:h-[295px] 2xl:w-[340px] 2xl:h-[315px] flex flex-col justify-start items-start xs:p-[2vw_2vw] md:p-[2rem_1.5rem] p-[3rem_1.5rem] rounded-[12px] ${bgColor} transition-all duration-300 ease-in-out hover:bg-linear-gradient-orange backdrop-blur-custom-19 shadow-custom`}>
            <div className="group-hover:scale-110 shrink-0  xs:w-[9.5vw] xs:h-[9.5vw] sm:w-[38px] sm:h-[38px] w-[52px] h-[52px] rounded-full bg-white flex justify-center items-center shadow-custom">{icon}</div>
            <h3 className={`mb-[3px] md:mb-[10px] xs:mt-[1vw] sm:mt[0.7rem] md:mt-[1rem] xl:mt-[1rem] 2xl:mt-[1rem] font-interBold xs:text-[14px] sm:text-[3.8vw] md:text-[20px] text-[24px] text-primary-black font-bold leading-[18px] md:leading-[24px]`}>{title}</h3>
            {description2 && <p className={`text-primary-black font-interBold leading-[14px] sm:leading-[16px] md:leading-[16px] xl:leading-[18px] 2xl:leading-[18px] xs:text-[3vw] sm:text-[14px] md:text-[16px] text-18px shrink-0 mb-[5px]`}>{description2}</p>}
            <p className={`text-primary-black font-interRegular leading-[14px] sm:leading-[16px] md:leading-[16px] xl:leading-[18px] 2xl:leading-[18px]  xs:text-[3vw] sm:text-[14px] md:text-[16px] text-18px shrink-0`}>{description}</p>
        </div>
    );
};

export default AdvantageBox;