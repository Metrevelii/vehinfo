import React from "react";
import ContactForm from "./ContactForm";
import Social from './social';

import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const site = useSelector(state => state.site);
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
 
  const { t } = useTranslation("global");

  return (
    <footer className="footer_bg_img ">
      <div className="mx-auto max-w-[1432px] px-4 w-full h-full">
        <div className="flex sm:justify-start xs:justify-start justify-center items-center flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row h-full">
          { site && site.vars ? 
          
          <div className="flex flex-col justify-center items-center w-full xl:w-1/2 2xl:w-1/2 py-[1rem] xl:py-0 2xl:py-0 h-auto xl:h-full2xl:h-full">
            <div className="flex flex-col justify-start items-start w-full">
              <div className="flex sm:flex-col xs:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-col justify-start items-start w-full">
                <div className="w-full xl:w-auto 2xl:w-auto flex sm:items-center md:items-center lg:items-start xl:items-start 2xl:items-start items-center flex-col">

                  <h4 className="font-interBold  text-[14px] md:text-[16px] lg:text-[16px] xl:text-[20px] 2xl:text-[20px] uppercase text-primary-whiteTransparent">
                    {t("footer.foot1")} 
                  </h4>
                  <div className="mt-[0.5rem] xl:mt-4 2xl:mt-4 flex flex-col justify-start items-start">
                    <p className="font-interRegular text-center text-[14px] md:text-[16px] lg:text-[16px] xl:text-[20px] text-primary-whiteTransparent">
                      {currentLanguage === 'az' ? site.vars.addressaz : site.vars.addressru}
                    </p>
                  
                  </div>
                </div>
                <div className="w-full xl:w-auto 2xl:w-auto flex xs:flex-row sm:flex-row md:flex-col lg:flex-col xl:flex-col 2xl:flex-col">

                <div className="mt-[2.5rem] sm:mt-[2.5rem] md:mt-[2rem] lg:mt-[1.5rem]   xl:mt-12 2xl:mt-12 w-full flex justify-center flex-col sm:items-center md:items-center lg:items-start xl:items-start 2xl:items-start items-center">
                  <h4 className="font-interBold  text-[14px] md:text-[16px] lg:text-[16px] xl:text-[20px] uppercase text-primary-whiteTransparent">
                    {t("footer.foot2")} 
                  </h4>
                  <p className="mt-[0.5rem] xl:mt-4 2xl:mt-4 text-[14px] md:text-[16px] lg:text-[16px] xl:text-[20px] text-primary-whiteTransparent font-interRegular ">
                  {site.vars.phone}
                  </p>
                </div>
                <div className="mt-[2.5rem] sm:mt-[2.5rem] md:mt-[2rem] lg:mt-[1.5rem]  xl:mt-12 2xl:mt-12 w-full flex justify-center flex-col sm:items-center md:items-center lg:items-start xl:items-start 2xl:items-start items-center">
                  <h4 className="font-interBold  text-[14px] md:text-[16px] lg:text-[16px] xl:text-[20px] uppercase text-primary-whiteTransparent">
                    {t("footer.foot3")} 
                  </h4>
                  <p className="mt-[0.5rem] xl:mt-4 2xl:mt-4 text-[14px] md:text-[16px] lg:text-[16px] xl:text-[20px] text-primary-whiteTransparent font-interRegular ">
                  {site.vars.email}
                  </p>
                </div>
                </div>
              </div>
            </div>
          </div>
          :

           null
          }
          
          <div className="flex flex-col justify-start py-[2rem] items-center  w-full h-auto     xl:w-[700px]    2xl:w-[700px]  rounded-[12px] xs:px-[0.5rem] sm:px-[0.5rem] md:px-[1rem] lg:px-16 xl:px-16 2xl:px-16 bg-white bg-contactBg bg-cover bg-center bg-no-repeat">
            <div className="font-interBold text-[20px] sm:text-[22px] md:text-[28px] xl:text-[32px] 2xl:text-[32px] text-black mb-[0.5rem] uppercase">
              {t("forall.reqquote")} 
            </div>
            <ContactForm />
            <Social facebook={site.vars.facebook} instagram={site.vars.instagram} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
