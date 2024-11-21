import React from "react";
import HeadlineBox from "./HeadlineBox";
import Advantages from "./Advantages";
import AboutUs from "../AboutUs/index";
import { Fragment } from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Home = () => {
  const translation = useSelector((state) => state.translations);
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <Fragment>
      <div className="homepage">
        <div className="mx-auto md:max-w-[940px]  xl:max-w-[1200px]  2xl:max-w-[1432px] px-4 w-full mt-[18rem] sm:mt-[25rem] md:mt-[32rem] lg:mt-[27rem] xl:mt-[42rem] 2xl:mt-[42rem]">
          <HeadlineBox />
          <Advantages />
        </div>
      </div>
      <AboutUs />
      <div className="mx-auto md:max-w-[940px]  xl:max-w-[1200px]  2xl:max-w-[1432px] px-4 w-full hidden xl:block 2xl:block">
        <h1 className="font-interBold font-bold text-[32px] text-black mb-4 uppercase">
          {currentLanguage === "az"
            ? translation.vars.text14az
            : translation.vars.text14ru}
        </h1>
          
      </div>
    </Fragment>
  );
};

export default Home;
