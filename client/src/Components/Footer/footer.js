import React from "react";
import ContactForm from "./ContactForm";

import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Icons } from "../../icons";

const Footer = () => {
  const site = useSelector((state) => state.site);
  const translation = useSelector((state) => state.translations);
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const { t } = useTranslation("global");

  return (
    <footer className="footer_bg_img ">
      <div className="  mx-auto md:max-w-[940px]  xl:max-w-[1200px]  2xl:max-w-[1432px] px-4 w-full h-full">
        <div className="flex justify-center items-center flex-col w-full h-full">
          <div className="flex w-full sm:justify-start xs:justify-start items-center lg:items-start xl:items-start 2xl:items-start pt-[0px] lg:pt-[50px] xl:pt-[50px] 2xl:pt-[50px] flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row h-full">
            {site && site.vars ? (
              <div className="flex flex-col justify-center items-center w-full xl:w-1/2 2xl:w-1/2 py-[1rem] xl:py-0 2xl:py-0 h-auto xl:h-full2xl:h-full">
                <div className="flex flex-col justify-start items-start w-full">
                  <div className="flex sm:flex-col xs:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-col justify-start items-start w-full">
                    <div className="w-[75%] mx-auto lg:mx-0 xl:mx-0 2xl:mx-0 sm:w-[60%] lg:w-auto xl:w-auto 2xl:w-auto flex  items-start sm:items-start md:items-center lg:items-start xl:items-start 2xl:items-start flex-col">
                      <div className="flex justify-center items-center">
                        <Icons.LocationIcon className="w-[18px] h-[28px] fill-primary-white text-primary" />
                        <h4 className="font-interBold  text-[14px] md:text-[16px] lg:text-[16px] xl:text-[20px] 2xl:text-[20px] uppercase text-primary-whiteTransparent ml-[10px]">
                          {t("footer.foot1")}
                        </h4>
                      </div>
                      <div className="mt-[0.5rem] xl:mt-4 2xl:mt-4 flex flex-col justify-start items-start">
                        <div className="flex justify-start items-start md:items-center lg:items-start xl:items-start 2xl:items-start xs:flex-col md:flex-row flex-row  lg:flex-col xl:flex-col 2xl:flex-col">
                          <p className="font-interBold text-center text-[14px] md:text-[16px] lg:text-[16px] xl:text-[20px] text-primary-whiteTransparent">
                            {currentLanguage === "az"
                              ? site.vars.countryaz
                              : site.vars.countryru}
                          </p>
                          <p className="font-interRegular text-center text-[14px] md:text-[16px] lg:text-[16px] xl:text-[20px] text-primary-whiteTransparent mt-0 lg:mt-[10px] xl:mt-[10px] 2xl:mt-[10px] xs:ml-[0px] sm:ml-[0px] md:ml-[5px] ml-[0px]">
                            {currentLanguage === "az"
                              ? site.vars.addressaz
                              : site.vars.addressru}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full xl:w-auto 2xl:w-auto flex xs:flex-row sm:flex-row md:flex-col lg:flex-col xl:flex-col 2xl:flex-col">
                      <div className="mt-[0.5rem] sm:mt-[0.5rem] md:mt-[0.5rem] lg:mt-[1.5rem]   xl:mt-12 2xl:mt-12 w-full flex justify-center flex-col sm:items-center md:items-center lg:items-start xl:items-start 2xl:items-start items-center">
                        <div className="flex justify-center items-center">
                          <Icons.PhoneIcon className="w-[20px] h-[28px] fill-primary-white text-primary" />
                          <h4 className="font-interBold  text-[14px] md:text-[16px] lg:text-[16px] xl:text-[20px] uppercase text-primary-whiteTransparent ml-[10px]">
                            {t("footer.foot2")}
                          </h4>
                        </div>
                        <p className="mt-[0.5rem] xl:mt-4 2xl:mt-4 text-[14px] md:text-[16px] lg:text-[16px] xl:text-[20px] text-primary-whiteTransparent font-interRegular ">
                          {site.vars.phone}
                        </p>
                      </div>
                      <div className="mt-[0.5rem] sm:mt-[0.5rem] md:mt-[0.5rem] lg:mt-[1.5rem]  xl:mt-12 2xl:mt-12 w-full flex justify-center flex-col sm:items-center md:items-center lg:items-start xl:items-start 2xl:items-start items-center">
                        <div className="flex justify-center items-center">
                          <Icons.MailIcon className="w-[20px] h-[28px] fill-primary-white text-primary" />
                          <h4 className="font-interBold  text-[14px] md:text-[16px] lg:text-[16px] xl:text-[20px] uppercase text-primary-whiteTransparent ml-[10px]">
                            {t("footer.foot3")}
                          </h4>
                        </div>
                        <p className="mt-[0.5rem] xl:mt-4 2xl:mt-4 text-[14px] md:text-[16px] lg:text-[16px] xl:text-[20px] text-primary-whiteTransparent font-interRegular ">
                          {site.vars.email}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            <ContactForm
              mainClassName={
                "flex flex-col justify-start py-[1rem]  lg:py-[2rem]  xl:py-[2rem] 2xl:py-[2rem] items-center  w-full h-auto    md:w-[600px] xl:w-[700px]    2xl:w-[700px]  rounded-[12px] xs:px-[0.5rem] sm:px-[0.5rem] md:px-[1rem] lg:px-16 xl:px-16 2xl:px-16 bg-white bg-contactBg bg-cover bg-center bg-no-repeat"
              }
            />
          </div>
          <div className="flex justify-between sm:justify-between md:justify-center lg:justify-center  xl:justify-center 2xl:justify-center items-center py-[20px] relative borderTop w-full">
            <p className="font-interMedium text-primary-lightGray text-[12px] static sm:static  md:absolute  lg:absolute  xl:absolute  2xl:absolute left-[0px]">
              {currentLanguage === "az"
                ? translation.vars.text21az
                : translation.vars.text21ru}
            </p>
            <div className="w-[143px] h-[32px] logo-white"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
