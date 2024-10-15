import React from "react";

import { useTranslation } from "react-i18next";
import Button from "../Shared/button";
import LangBtn from "../Shared/langbtn";
import { Link } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation("global");

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__inner">
            <div className="header__logo">
              <Link to="/" className="w-100 h-100 centered">
                {/* <Logo /> */}
              </Link>
            </div>
            <div className="header__menu">
              <div className="header__menu-item">
                <Link to="/about_us" className="w-100 h-100 centered">
                  <Button title={t("header.aboutus")} className="header_btn" />
                </Link>
              </div>
              <div className="header__menu-item">
                <Link to="/faq" className="w-100 h-100 centered">
                  <Button title={t("header.faq")} className="header_btn" />
                </Link>
              </div>
              <div className="header__menu-item">
                <Link to="/delivery_calc" className="w-100 h-100 centered">
                  <Button title={t("header.calc")} className="header_btn" />
                </Link>
              </div>
              <div className="header__menu-item">
                <Link to="/contacts" className="w-100 h-100 centered">
                  <Button title={t("header.contact")} className="header_btn" />
                </Link>
              </div>
            </div>
            <div className="haeder__switcher">
              <LangBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
