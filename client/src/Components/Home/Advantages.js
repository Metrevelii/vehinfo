import React from 'react';
import AdvantageBox from './AdvantagesBox'; 
import { useTranslation } from "react-i18next";

import { Icons } from '../../icons';


const Advantages = () => {
    const { t } = useTranslation("global");


    return (
        <div className="flex flex-col justify-start items-start mt-[5rem]">
            <div className="font-interBold font-bold xs:text-[16px] sm:text-[24px] md:text-[26px] xl:text-[28px] 2xl:text-[28px] text-white xs:mb-[2vw] sm:mb-[2vw] mb-6 uppercase">{t("advantages.adv1")}</div>
            <div className="grid grid-cols-2 xs:gap-[0.2rem] gap-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 w-full  items-center">
                <AdvantageBox 
                    icon={<Icons.ExpIcon className="w-[25px] h-[25px] fill-primary-lightPurple text-primary" />} 
                    title={t("advantages.adv2")} 
                    description="Some random text1 Some random text Some random text Some random text" 
                    bgColor="bg-white"
                    textColor="text-primary-black"
                    paraColor="text-primary-blackSecond"
                />
                <AdvantageBox 
                    icon={<Icons.SafetyIcon className="w-[20px] h-[24px] fill-primary-lightPurple text-primary" />} 
                    title={t("advantages.adv3")} 
                    description="Some random text2 Some random text Some random text Some random text" 
                    bgColor="bg-white"
                    textColor="text-primary-black"
                    paraColor="text-primary-blackSecond"
                />
                <AdvantageBox 
                    icon={<Icons.LocationIcon className="w-[18px] h-[28px] fill-primary-lightPurple text-primary" />} 
                    title={t("advantages.adv4")} 
                    description="Some random text3 Some random text Some random text Some random text" 
                    bgColor="bg-white"
                    textColor="text-primary-black"
                    paraColor="text-primary-blackSecond"
                />
                <AdvantageBox 
                    icon={<Icons.PricesIcon className="w-[28px] h-[28px] fill-primary-lightPurple text-primary" />} 
                    title={t("advantages.adv5")} 
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