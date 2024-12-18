import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const AboutUs = ({ marginY }) => {
  const translation = useSelector((state) => state.translations);
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  //   const { t } = useTranslation("global");

  return (
    <>
      <div className={`pb-[110vw] pt-[35vw] sm:pb-[12rem] sm:pt-[2rem] md:pb-[10rem] md:pt-8 xl:pb-8 xl:pt-8 2xl:pb-8 2xl:pt-8 pointer-events-none ${marginY}`}>
        <div className="mx-auto md:max-w-[940px]  xl:max-w-[1200px]  2xl:max-w-[1432px] px-4 w-full">
          <div className="w-full h-full flex justify-between items-center relative">
            <div className="flex flex-col justify-start items-start xs:rounded-[12px] sm:rounded-[12px] md:rounded-[12px] backdrop-blur-custom-19 xl:backdrop-blur-0 2xl:backdrop-blur-0 bg-linear-gradient-white xl:transparent 2xl:transparent p-[15px] 2xl:p-0 xl:p-0 w-[100%] h-[auto] xl:h-auto 2xl:h-auto xl:w-1/2 2xl:w-1/2 top-[165%] sm:top-[100%] md:top-[100%] xl:top-0 2xl:top-0 transform xl:transform-none 2xl:transform-none -translate-x-1/2 -translate-y-1/2 left-[50%] z-10 absolute sm:absolute md:absolute xl:static 2xl:static">
              <h3 className="font-interBold font-bold  text-[20px] md:text-[26px] xl:text-[30px] 2xl:text-[32px] text-black mb-4 uppercase">
                {currentLanguage === "az"
                  ? translation.vars.text18az
                  : translation.vars.text18ru}
              </h3>
              <div className="2xl:mt-[3rem]  w-full">
                <span className="font-interBold  text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#000] ">
                  
                  {currentLanguage === "az"
                    ? translation.vars.text20az
                    : translation.vars.text20ru}
                </span>
                <span className="font-interBold  text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#000] "> - </span>
                <span className="font-interMedium text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#535353] ">
                  {currentLanguage === "az"
                    ? translation.vars.text19az
                    : translation.vars.text19ru}
                </span>
              </div>
            </div>
            <div className="aboutus__image"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
