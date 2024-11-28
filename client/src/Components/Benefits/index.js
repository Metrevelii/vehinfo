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
    <div className="mx-auto max-w-full my-[100px] sm:max-w-[620px] md:max-w-[760px] px-[15px] lg:max-w-[940px] xl:max-w-[1280px]  2xl:max-w-[1432px] w-full">
      <div className="w-full flex justify-center items-center">
        <div className="rounded-[12px] shadow-default mx-auto p-[15px] md:p-[50px] flex justify-start items-start flex-col mt-[30px]">
          <h3 className="font-interBold text-[18px] sm:text-[18px] md:text-[18px] xl:text-[18px] 2xl:text-[18px] text-black mb-[0.5rem] uppercase">
            {translation && translation.vars
              ? currentLanguage === "az"
                ? translation.vars.text24az
                : translation.vars.text24ru
              : t("texts.text16")}
          </h3>
          <div className="w-full flex justify-center items-start flex-col mt-[30px]">
            <div className="flex justify-start items-center">
              <Icons.RightArrow className="w-[20px] h-[20px] lg:w-[25px] lg:h-[25px] shrink-0" />
              <p className="font-interMedium  text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#000] ml-[10px]">
                {translation && translation.vars
                  ? currentLanguage === "az"
                    ? translation.vars.text25az
                    : translation.vars.text25ru
                  : t("texts.text17")}
              </p>
            </div>
            <div className="flex justify-start items-center mt-[15px]">
              <Icons.RightArrow className="w-[20px] h-[20px] lg:w-[25px] lg:h-[25px] shrink-0" />
              <p className="font-interMedium  text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#000] ml-[10px]">
                {translation && translation.vars
                  ? currentLanguage === "az"
                    ? translation.vars.text26az
                    : translation.vars.text26ru
                  : t("texts.text18")}
              </p>
            </div>
            <div className="flex justify-start items-center mt-[15px]">
              <Icons.RightArrow className="w-[20px] h-[20px] lg:w-[25px] lg:h-[25px] shrink-0" />
              <p className="font-interMedium  text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#000] ml-[10px]">
                {translation && translation.vars
                  ? currentLanguage === "az"
                    ? translation.vars.text27az
                    : translation.vars.text27ru
                  : t("texts.text19")}
              </p>
            </div>
            <div className="flex justify-start items-center mt-[15px]">
              <Icons.RightArrow className="w-[20px] h-[20px] lg:w-[25px] lg:h-[25px] shrink-0" />
              <p className="font-interMedium  text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#000] ml-[10px]">
                {translation && translation.vars
                  ? currentLanguage === "az"
                    ? translation.vars.text28az
                    : translation.vars.text28ru
                  : t("texts.text20")}
              </p>
            </div>
            <div className="flex justify-start items-center mt-[15px]">
              <Icons.RightArrow className="w-[20px] h-[20px] lg:w-[25px] lg:h-[25px] shrink-0" />
              <p className="font-interMedium  text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#000] ml-[10px]">
                {translation && translation.vars
                  ? currentLanguage === "az"
                    ? translation.vars.text29az
                    : translation.vars.text29ru
                  : t("texts.text21")}
              </p>
            </div>
            <div className="flex justify-start items-center mt-[15px]">
              <Icons.RightArrow className="w-[20px] h-[20px] lg:w-[25px] lg:h-[25px] shrink-0" />
              <p className="font-interMedium  text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#000] ml-[10px]">
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
