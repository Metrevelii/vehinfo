import React from 'react';

const AdvantageBox = ({ icon, title, description, bgColor, textColor, paraColor }) => {
    return (
        <div className={`group w-[340px] h-[315px] flex flex-col justify-start items-start p-[3rem_1.5rem] rounded-[12px] ${bgColor} transition-all duration-300 ease-in-out hover:bg-primary-blue`}>
            <div className="group-hover:scale-110  w-[52px] h-[52px] rounded-full bg-white flex justify-center items-center shadow-custom">{icon}</div>
            <h3 className={`mt-[3rem] font-interBold text-[24px] ${textColor} mb-2 group-hover:text-primary-white`}>{title}</h3>
            <p className={`${paraColor} mt-[1.5rem] group-hover:text-primary-whiteSecond`}>{description}</p>
        </div>
    );
};

export default AdvantageBox;