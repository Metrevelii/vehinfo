import React from 'react';
import AdvantageBox from './AdvantagesBox'; 
import { Icons } from '../../icons';


const Advantages = () => {
    return (
        <div className="flex flex-col justify-start items-start mt-[5rem]">
            <div className="font-interBold font-bold text-[32px] text-white mb-6">ADVANTAGES OF WORKING WITH US</div>
            <div className="flex justify-between w-full items-center mt-[1.5rem]">
                <AdvantageBox 
                    icon={<Icons.ExpIcon className="w-[25px] h-[25px] fill-primary-lightPurple text-primary" />} 
                    title="Experience" 
                    description="Some random text1 Some random text Some random text Some random text" 
                    bgColor="bg-white"
                    textColor="text-primary-black"
                    paraColor="text-primary-blackSecond"
                />
                <AdvantageBox 
                    icon={<Icons.SafetyIcon className="w-[20px] h-[24px] fill-primary-lightPurple text-primary" />} 
                    title="Safety" 
                    description="Some random text2 Some random text Some random text Some random text" 
                    bgColor="bg-white"
                    textColor="text-primary-black"
                    paraColor="text-primary-blackSecond"
                />
                <AdvantageBox 
                    icon={<Icons.LocationIcon className="w-[18px] h-[28px] fill-primary-lightPurple text-primary" />} 
                    title="Office In Georgia" 
                    description="Some random text3 Some random text Some random text Some random text" 
                    bgColor="bg-white"
                    textColor="text-primary-black"
                    paraColor="text-primary-blackSecond"
                />
                <AdvantageBox 
                    icon={<Icons.PricesIcon className="w-[28px] h-[28px] fill-primary-lightPurple text-primary" />} 
                    title="Low Prices" 
                    description="Some random text4 Some random text Some random text Some random text" 
                    bgColor="bg-white"
                    textColor="text-primary-black"
                    paraColor="text-primary-blackSecond"
                />
            </div>
        </div>
    );
};

export default Advantages;