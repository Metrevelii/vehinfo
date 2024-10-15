import React from "react";

import { useTranslation } from "react-i18next";


import "./button.css";

const LangBtn = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div className="language_switcher">
        <button
          onClick={() => handleChangeLanguage("en")}
          className="language-btn"
        >
          EN
        </button>
        <button
          onClick={() => handleChangeLanguage("ka")}
          className="language-btn"
        >
          KA
        </button>
      </div>
    </>
  );
};

export default LangBtn;
