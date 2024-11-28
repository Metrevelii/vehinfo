import React from "react";
import { useTranslation } from "react-i18next";
import useBreakpoint from "../../hooks/useBreakpoint";

const LangBtn = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const { isMobile } = useBreakpoint();

  return (
    <>
      {
        !isMobile ? 
        <div className="w-[130px] lg:w-44 h-12 rounded-[12px] bg-white shadow-md p-1">
          <div className="w-full h-full flex justify-center items-center">
            <div
              className={`w-1/2 h-full rounded-[12px] flex justify-center items-center cursor-pointer ${
                currentLanguage === "ru" ? "bg-primary-orange border border-primary-orangeBorder" : ""
              }`}
              onClick={() => handleChangeLanguage("ru")}
            >
              <div className="w-6 h-6 rounded-[12px] bg-ruFlag bg-repeat bg-contain bg-center border border-white"></div>
              <div
                className={`ml-1 font-interMedium text-[14px] lg:text-[18px] ${
                  currentLanguage === "ru" ? "text-white" : "text-black"
                }`}
              >
                Rus
              </div>
            </div>
            <div
              className={`w-1/2 h-full rounded-[12px] flex justify-center items-center cursor-pointer ${
                currentLanguage === "az" ? "bg-primary-orange border border-primary-orangeBorder" : ""
              }`}
              onClick={() => handleChangeLanguage("az")}
            >
              <div className="w-6 h-6 rounded-[12px] bg-azFlag bg-repeat bg-contain bg-center border border-white"></div>
              <div
                className={`ml-1 font-interMedium text-[14px] lg:text-[18px] ${
                  currentLanguage === "az" ? "text-white" : "text-black"
                }`}
              >
                Azr
              </div>
            </div>
          </div>
        </div>
        : 
        <div className="w-[63px] h-[75px] rounded-[12px] bg-white shadow-md p-[2px]">
            <div className="w-full h-full flex justify-between items-center flex-col">
              <div
                className={`w-[60px] h-[32px] rounded-[12px] flex justify-center items-center cursor-pointer ${
                  currentLanguage === "ru" ? "bg-primary-orange border border-primary-orangeBorder" : ""
                }`}
                onClick={() => handleChangeLanguage("ru")}
              >
                <div className="w-[22px] h-[22px] rounded-[12px] bg-ruFlag bg-repeat bg-contain bg-center border border-white"></div>
                <div
                  className={`ml-1 font-[12px] text-base font-interMedium ${
                    currentLanguage === "ru" ? "text-white" : "text-black"
                  }`}
                >
                  Rus
                </div>
              </div>
              <div
                className={`w-[60px] h-[32px] rounded-[12px] flex justify-center items-center cursor-pointer ${
                  currentLanguage === "az" ? "bg-primary-orange border border-primary-orangeBorder" : ""
                }`}
                onClick={() => handleChangeLanguage("az")}
              >
                <div className="w-[22px] h-[22px] rounded-[12px] bg-azFlag bg-repeat bg-contain bg-center border border-white"></div>
                <div
                  className={`ml-1 font-[12px] text-base font-interMedium ${
                    currentLanguage === "az" ? "text-white" : "text-black"
                  }`}
                >
                  Azr
                </div>
              </div>
            </div>
        </div>
      }
    
    </>
  );
};

export default LangBtn;