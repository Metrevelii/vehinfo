import React from "react";
import { useTranslation } from "react-i18next";

const LangBtn = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="w-44 h-12 rounded-lg bg-white shadow-md p-1">
      <div className="w-full h-full flex justify-center items-center">
        <div
          className={`w-1/2 h-full rounded-md flex justify-center items-center cursor-pointer ${
            currentLanguage === "ka" ? "bg-blue-700 border border-blue-800" : ""
          }`}
          onClick={() => handleChangeLanguage("ka")}
        >
          <div className="w-6 h-6 rounded-full bg-ruFlag bg-repeat bg-contain bg-center border border-white"></div>
          <div
            className={`ml-1 font-medium text-base ${
              currentLanguage === "ka" ? "text-white" : "text-black"
            }`}
          >
            Rus
          </div>
        </div>
        <div
          className={`w-1/2 h-full rounded-md flex justify-center items-center cursor-pointer ${
            currentLanguage === "en" ? "bg-blue-700 border border-blue-800" : ""
          }`}
          onClick={() => handleChangeLanguage("en")}
        >
          <div className="w-6 h-6 rounded-full bg-azFlag bg-repeat bg-contain bg-center border border-white"></div>
          <div
            className={`ml-1 font-medium text-base ${
              currentLanguage === "en" ? "text-white" : "text-black"
            }`}
          >
            Azr
          </div>
        </div>
      </div>
    </div>
  );
};

export default LangBtn;