import React from "react";

import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const HeadlineBox = () => {
  const translation = useSelector((state) => state.translations);
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const { t } = useTranslation("global");

  return (
    <>
      <div className=" md:w-[600px]  h-auto px-[20px] xl:w-[750px]   2xl:w-[892px]  bg-black/30 backdrop-blur-custom-25">
        <div className="w-full h-full flex flex-col justify-start items-start p-[15px] md:p-[20px] lg:p-[25px] xl:p-[35px] 2xl:p-[35px]">
          {translation && translation.vars ? (
            <>
              <h1 className="font-interBold font-bold text-[3vw] sm:text-[3.2vw] md:text-[20px] xl:text-[24px] 2xl:text-[32px] text-white uppercase">
                {currentLanguage === "az"
                  ? translation.vars.text1az
                  : translation.vars.text1ru}
              </h1>

              <p className="font-interLight text-[12px] sm:text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[20px] text-white/80  mt-[15px] lg:mt-[30px] xl:mt-[30px] 2xl:mt-[30px]">
                {currentLanguage === "az"
                  ? translation.vars.text2az
                  : translation.vars.text2ru}
              </p>
            </>
          ) : (
            <>
              <h1 className="font-interBold font-bold text-[3vw] sm:text-[3.2vw] md:text-[20px] xl:text-[24px] 2xl:text-[32px] text-white">
                {t("texts.text1")}
              </h1>

              <p className="font-interLight text-[12px] sm:text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[20px] text-white/80 mt-[15px] lg:mt-[30px] xl:mt-[30px] 2xl:mt-[30px]">
                {t("texts.text2")}
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default HeadlineBox;
