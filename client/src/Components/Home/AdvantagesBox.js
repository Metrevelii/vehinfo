import React from 'react';

const AdvantageBox = ({ icon, title, description, bgColor, textColor, paraColor }) => {
    return (
        <div className={`group xs:w-full xs:h-[55vw] w-full h-[40vw] md:w-full md:h-[250px] lg:w-full lg:h-[250px] xl:w-full xl:h-[295px] 2xl:w-[340px] 2xl:h-[315px] flex flex-col justify-start items-start xs:p-[2vw_2vw] md:p-[2rem_1.5rem] p-[3rem_1.5rem] rounded-[12px] ${bgColor} transition-all duration-300 ease-in-out hover:bg-primary-blue border-solid   md:border-none lg:border-none xl:border-none 2xl:border-none xs:border-primary-purpleMoreLight xs:border`}>
            <div className="group-hover:scale-110 shrink-0  xs:w-[9.5vw] xs:h-[9.5vw] sm:w-[38px] sm:h-[38px] w-[52px] h-[52px] rounded-full bg-white flex justify-center items-center shadow-custom">{icon}</div>
            <h3 className={`xs:mt-[1vw] sm:mt[0.7rem] md:mt-[1.5rem] mt-[3rem] font-interBold xs:text-[16px] sm:text-[3.8vw] md:text-[20px] text-[24px] ${textColor} mb-[0] group-hover:text-primary-white`}>{title}</h3>
            <p className={`${paraColor} font-interRegular xs:mt-[2vw] sm:mt-[0.7rem]  leading-[14px] sm:leading-[16px] md:leading-[16px] xl:leading-[20px] 2xl:leading-[20px] md:mt-[1rem] mt-[1.5rem] xs:text-[3vw] sm:text-[14px] md:text-[16px] text-18px group-hover:text-primary-whiteSecond`}>{description}</p>
        </div>
    );
};

export default AdvantageBox;