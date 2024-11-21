import React from "react";
import AdvantageBox from "./AdvantagesBox";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { Icons } from "../../icons";

const Advantages = () => {
  const translation = useSelector((state) => state.translations);
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  //   const { t } = useTranslation("global");

  return (
    <div className="flex flex-col justify-start items-start mt-[1rem] md:mt-[3rem] xl:mt-[4rem] 2xl:mt-[4rem]">
      <div className="font-interBold font-bold xs:text-[16px] sm:text-[24px] md:text-[26px] xl:text-[28px] 2xl:text-[28px] text-white xs:mb-[2vw] sm:mb-[2vw] mb-6 uppercase">
        {currentLanguage === "az"
          ? translation.vars.text5az
          : translation.vars.text5ru}
      </div>
      <div className="grid grid-cols-2 xs:gap-[0.2rem] gap-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 w-full  items-center">
        <AdvantageBox
          icon={
            <Icons.ExpIcon className="w-[25px] h-[25px] fill-primary-lightPurple  group-hover:fill-primary-black text-primary" />
          }
          title={
            currentLanguage === "az"
              ? translation.vars.text3az
              : translation.vars.text3ru
          }
          description={
            currentLanguage === "az"
              ? translation.vars.text4az
              : translation.vars.text4ru
          }
        />
        <AdvantageBox
          icon={
            <Icons.SafetyIcon className="w-[20px] h-[24px] fill-primary-lightPurple group-hover:fill-primary-black text-primary" />
          }
          title={
            currentLanguage === "az"
              ? translation.vars.text6az
              : translation.vars.text6ru
          }
          description={
            currentLanguage === "az"
              ? translation.vars.text7az
              : translation.vars.text7ru
          }
        />
        <AdvantageBox
          icon={
            <Icons.LocationIcon className="w-[18px] h-[28px] fill-primary-lightPurple group-hover:fill-primary-black text-primary" />
          }
          title={
            currentLanguage === "az"
              ? translation.vars.text8az
              : translation.vars.text8ru
          }
          description={
            currentLanguage === "az"
              ? translation.vars.text9az
              : translation.vars.text9ru
          }
        />
        <AdvantageBox
          icon={
            <Icons.PricesIcon className="w-[28px] h-[28px] fill-primary-lightPurple group-hover:fill-primary-black text-primary" />
          }
          title={
            currentLanguage === "az"
              ? translation.vars.text10az
              : translation.vars.text10ru
          }
          description={
            currentLanguage === "az"
              ? translation.vars.text11az
              : translation.vars.text11ru
          }
        />
      </div>
    </div>
  );
};

export default Advantages;
