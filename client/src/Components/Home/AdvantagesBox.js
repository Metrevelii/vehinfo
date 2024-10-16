import React from 'react';

const AdvantageBox = ({ icon, title, description }) => {
    return (
        <div className="w-[290px] h-[315px] flex flex-col justify-start items-start p-[40px_20px] bg-[#fff]">
            <div className="advantages__box-icon">{icon}</div>
            <h3 className="font-interBold text-[24px] text-black mb-2">{title}</h3>
            <p className="text-[#2c2c2c]">{description}</p>
        </div>
    );
};

export default AdvantageBox;