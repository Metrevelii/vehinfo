import React from "react";

import { Icons } from "../../icons";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Benefits = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const translation = useSelector((state) => state.translations);

  const { t } = useTranslation("global");

  return (
    <div className="mx-auto max-w-full mt-[95px] mb-[120px] sm:mt-[120px] sm:mb-[120px] sm:max-w-[620px] md:max-w-[760px] px-0 sm:px-[15px] lg:max-w-[940px] xl:max-w-[1280px]  2xl:max-w-[1432px] w-full">
      <div className="w-full flex justify-between items-start flex-col lg:flex-row">
        <div className="w-full lg:w-[550px] xl:w-[712px] h-[477px] lg:h-[488px] bg-benefitsBgMob linearForBg md:bg-benefitsBg bg-no-repeat bg-contain bg-center lg:bg-top xl:bg-center shrink-0 relative">
          <h3 className="font-interBold text-[24px] lg:text-[32px] leading-[30px] lg:leading-[40px]  text-primary-white uppercase block sm:hidden absolute left-[10px] bottom-[20px] z-10">
            {translation && translation.vars
              ? currentLanguage === "az"
                ? translation.vars.text24az
                : translation.vars.text24ru
              : t("texts.text16")}
          </h3>

        </div>
        <div className="rounded-[12px] mx-auto  flex justify-start items-start flex-col ml-[0] lg:ml-[30px] px-[20px] lg:px-[0] mt-[20px] lg:mt-[0]">
          <h3 className="font-interBold text-[24px] md:text-[22px] lg:text-[24px] xl:text-[32px] leading-[30px] lg:leading-[28px] xl:leading-[40px]  text-black mb-[0.5rem] uppercase hidden sm:block">
            {translation && translation.vars
              ? currentLanguage === "az"
                ? translation.vars.text24az
                : translation.vars.text24ru
              : t("texts.text16")}
          </h3>
          <div className="w-full flex justify-center items-start flex-col mt-[20px] md:mt-[15px] xl:mt-[25px]">
            <div className="flex justify-start items-center">
              <Icons.RightArrow className="w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] shrink-0" />
              <p className="font-interBold  text-[16px] lg:text-[20px] text-[#000] ml-[10px]">
                {translation && translation.vars
                  ? currentLanguage === "az"
                    ? translation.vars.text25az
                    : translation.vars.text25ru
                  : t("texts.text17")}
              </p>
            </div>
            <div className="flex justify-start items-center mt-[20px] md:mt-[15px] xl:mt-[25px]">
              <Icons.RightArrow className="w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] shrink-0" />
              <p className="font-interBold  text-[16px] lg:text-[20px] text-[#000] ml-[10px]">
                {translation && translation.vars
                  ? currentLanguage === "az"
                    ? translation.vars.text26az
                    : translation.vars.text26ru
                  : t("texts.text18")}
              </p>
            </div>
            <div className="flex justify-start items-center mt-[20px] md:mt-[15px] xl:mt-[25px]">
              <Icons.RightArrow className="w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] shrink-0" />
              <p className="font-interBold  text-[16px] lg:text-[20px] text-[#000] ml-[10px]">
                {translation && translation.vars
                  ? currentLanguage === "az"
                    ? translation.vars.text27az
                    : translation.vars.text27ru
                  : t("texts.text19")}
              </p>
            </div>
            <div className="flex justify-start items-center mt-[20px] md:mt-[15px] xl:mt-[25px]">
              <Icons.RightArrow className="w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] shrink-0" />
              <p className="font-interBold  text-[16px] lg:text-[20px] text-[#000] ml-[10px]">
                {translation && translation.vars
                  ? currentLanguage === "az"
                    ? translation.vars.text28az
                    : translation.vars.text28ru
                  : t("texts.text20")}
              </p>
            </div>
            <div className="flex justify-start items-center mt-[20px] md:mt-[15px] xl:mt-[25px]">
              <Icons.RightArrow className="w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] shrink-0" />
              <p className="font-interBold  text-[16px] lg:text-[20px] text-[#000] ml-[10px]">
                {translation && translation.vars
                  ? currentLanguage === "az"
                    ? translation.vars.text29az
                    : translation.vars.text29ru
                  : t("texts.text21")}
              </p>
            </div>
            <div className="flex justify-start items-center mt-[20px] md:mt-[15px] xl:mt-[25px]">
              <Icons.RightArrow className="w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] shrink-0" />
              <p className="font-interBold  text-[16px] lg:text-[20px] text-[#000] ml-[10px]">
                {translation && translation.vars
                  ? currentLanguage === "az"
                    ? translation.vars.text30az
                    : translation.vars.text30ru
                  : t("texts.text22")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
