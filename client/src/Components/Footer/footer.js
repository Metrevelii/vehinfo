import React from "react";
import ContactForm from "./ContactForm";
import Social from './social';

import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const site = useSelector(state => state.site);
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
 


  return (
    <footer className="footer_bg_img ">
      <div className="mx-auto max-w-[1432px] px-4 w-full h-full">
        <div className="flex justify-center items-center flex-col xl:flex-row 2xl:flex-row h-full">
          { site && site.vars ? 
          
          <div className="flex flex-col justify-center items-center w-full xl:w-1/2 2xl:w-1/2 py-[1rem] xl:py-0 2xl:py-0 h-auto xl:h-full2xl:h-full">
            <div className="flex flex-col justify-start items-start w-full">
              <div className="flex flex-col justify-start items-start">
                <div className="w-full xl:w-auto 2xl:w-auto">

                  <h4 className="font-interBold text-[20px] uppercase text-primary-whiteTransparent">
                    LOCATION
                  </h4>
                  <div className="mt-[0.5rem] xl:mt-4 2xl:mt-4 flex flex-col justify-start items-start">
                    <p className="font-interRegular text-[20px] text-primary-whiteTransparent">
                      {currentLanguage === 'az' ? site.vars.addressaz : site.vars.addressru}
                    </p>
                  
                  </div>
                </div>
                <div className="w-full xl:w-auto 2xl:w-auto flex flex-row xl:flex-col 2xl:flex-col ">

                <div className="mt-[0.5rem] xl:mt-12 2xl:mt-12  w-[50%] xl:w-auto 2xl:w-auto">
                  <h4 className="font-interBold  text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] uppercase text-primary-whiteTransparent">
                    Phone
                  </h4>
                  <p className="mt-[0.5rem] xl:mt-4 2xl:mt-4 text-[20px] text-primary-whiteTransparent">
                  {site.vars.phone}
                  </p>
                </div>
                <div className="mt-[0.5rem] xl:mt-12 2xl:mt-12 w-[50%] xl:w-auto 2xl:w-auto">
                  <h4 className="font-interBold  text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] uppercase text-primary-whiteTransparent">
                    Mail
                  </h4>
                  <p className="mt-[0.5rem] xl:mt-4 2xl:mt-4 text-[20px] text-primary-whiteTransparent">
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
          
          <div className="flex flex-col justify-start pt-[0.5rem] lg:pt-[2rem] xl:pt-[2rem] 2xl:pt-[2rem] items-center  w-full h-[505px] md:h-[405px] xl:w-[700px] xl:h-[505px]  2xl:w-[700px] 2xl:h-[505px] rounded-[12px] px-16 bg-white bg-contactBg bg-cover bg-center bg-no-repeat">
            <div className="font-interBold text-[20px] sm:text-[22px] md:text-[28px] xl:text-[32px] 2xl:text-[32px] text-black mb-[0.5rem] uppercase">
              REQUEST A QUOTE
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
