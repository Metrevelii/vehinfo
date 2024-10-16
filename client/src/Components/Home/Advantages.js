import React from 'react';
import AdvantageBox from './AdvantagesBox'; 


const Advantages = () => {
    return (
        <div className="flex flex-col justify-start items-start mt-[5rem]">
            <div className="font-interBold font-bold text-[32px] text-white mb-6">ADVANTAGES OF WORKING WITH US</div>
            <div className="flex justify-between w-full items-center mt-[1.5rem]">
                <AdvantageBox 
                    icon={<div className="icon-class" />} 
                    title="Experience" 
                    description="Some random text1 Some random text Some random text Some random text" 
                />
                <AdvantageBox 
                    icon={<div className="icon-class" />} 
                    title="Safety" 
                    description="Some random text2 Some random text Some random text Some random text" 
                />
                <AdvantageBox 
                    icon={<div className="icon-class" />} 
                    title="Office In Georgia" 
                    description="Some random text3 Some random text Some random text Some random text" 
                />
                <AdvantageBox 
                    icon={<div className="icon-class" />} 
                    title="Low Prices" 
                    description="Some random text4 Some random text Some random text Some random text" 
                />
            </div>
        </div>
    );
};

export default Advantages;