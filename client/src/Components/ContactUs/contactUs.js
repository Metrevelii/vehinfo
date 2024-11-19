import React from "react";

import ContactForm from "../Footer/ContactForm";

import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Icons } from "../../icons";

const ContactUs = () => {
  const translation = useSelector((state) => state.translations);
  const site = useSelector((state) => state.site);
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const { t } = useTranslation("global");

  return (
    <div className="mx-auto md:max-w-[940px]  xl:max-w-[1200px]  2xl:max-w-[1432px] px-4 w-full">
      <div className="w-full h-auto lg:h-[488px]  xl:h-[488px]  2xl:h-[488px] shadow-default mx-auto mt-[3rem] lg:mt-[7rem] xl:mt-[7rem] 2xl:mt-[7rem] flex justify-between items-center flex-col lg:flex-row xl:flex-row 2xl:flex-row pl-[0px] lg:pl-[25px] xl:pl-[25px] 2xl:pl-[25px]">
        <div className="w-[90%] py-[2rem] h-full lg:w-[48%] xl:w-[48%] 2xl:w-[48%] flex justify-start items-start flex-col">
          <div className="font-interBold text-[20px] sm:text-[22px] md:text-[22px] xl:text-[22px] 2xl:text-[22px] text-black mb-[0.5rem] uppercase">
            {currentLanguage === "az"
              ? translation.vars.text16az
              : translation.vars.text16ru}
          </div>
          <div className="flex flex-col flex-start items-start">
            <div className="flex justify-center items-center mt-[20px] xl:mt-[30px] 2xl:mt-[30px]">
              <Icons.LocationIcon className="w-[18px] h-[28px] fill-primary-blue" />
              <p className="font-interRegular font-bold text-primary-black uppercase text-[16px] xl:text-[20px] 2xl:text-[20px] ml-[10px]">
                {t("footer.foot1")}
              </p>
            </div>
            <div className="flex justify-start items-start flex-col ml-[28px] mt-[10px] xl:mt-[20px] 2xl:mt-[20px]">
              <p className="font-interBold text-center text-[14px] md:text-[16px] lg:text-[16px] xl:text-[20px] text-[#707070]">
                {currentLanguage === "az"
                  ? site.vars.countryaz
                  : site.vars.countryru}
              </p>
              <p className="font-interRegular text-center text-[14px] md:text-[16px] lg:text-[16px] xl:text-[20px] text-[#707070] mt-[10px]">
                {currentLanguage === "az"
                  ? site.vars.addressaz
                  : site.vars.addressru}
              </p>
            </div>
            <div className="flex justify-center items-center mt-[30px]">
              <Icons.PhoneIcon className="w-[18px] h-[28px] fill-primary-blue" />
              <p className="font-interRegular font-bold text-primary-black uppercase text-[16px] xl:text-[20px] 2xl:text-[20px] ml-[10px]">
                {t("footer.foot2")}
              </p>
            </div>
            <div className="flex justify-start items-start flex-col ml-[28px] mt-[10px] xl:mt-[20px] 2xl:mt-[20px]">
              <p className="font-interBold text-center text-[14px] md:text-[16px] lg:text-[16px] xl:text-[20px] text-[#707070]">
                {site.vars.phone}
              </p>
             
            </div>
            <div className="flex justify-center items-center mt-[30px]">
              <Icons.MailIcon className="w-[18px] h-[28px] fill-primary-blue" />
              <p className="font-interRegular font-bold text-primary-black uppercase text-[16px] xl:text-[20px] 2xl:text-[20px] ml-[10px]">
                {t("footer.foot3")}
              </p>
            </div>
            <div className="flex justify-start items-start flex-col ml-[28px] mt-[10px] xl:mt-[20px] 2xl:mt-[20px]">
              <p className="font-interBold text-center text-[14px] md:text-[16px] lg:text-[16px] xl:text-[20px] text-[#707070]">
                {site.vars.email}
              </p>
             
            </div>
          </div>
        </div>
        <div className="h-[2px] lg:h-full xl:h-full 2xl:h-full w-full lg:w-[2px] xl:w-[2px] 2xl:w-[2px] bg-linear-gradient-gray"></div>
        <div className="w-full h-full lg:w-[48%] xl:w-[48%] 2xl:w-[48%] flex-justify-center items-center">
          <ContactForm
            mainClassName={
              "flex flex-col justify-start py-[2rem] items-center  w-full h-auto rounded-[12px] xs:px-[0.5rem] sm:px-[0.5rem] md:px-[1rem] lg:px-16 xl:px-16 2xl:px-16"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
