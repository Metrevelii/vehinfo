import React, { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";
import LangBtn from "../Shared/langbtn";
import { Link, useLocation } from "react-router-dom";
import NavLink from "./NavLink";
import useBreakpoint from "../../hooks/useBreakpoint";
import { Icons } from "../../icons";

import { useSelector } from "react-redux";

const Header = ({ users }) => {
  const { t } = useTranslation("global");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const translation = useSelector((state) => state.translations);
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const { isMobile } = useBreakpoint();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isHomePage = location.pathname === "/";

  return (
    <>
      {!isMobile ? (
        <header
          className={`${
            isHomePage
              ? isScrolled
                ? "fixed bg-primary-blue"
                : "absolute bg-transparent"
              : "relative bg-primary-blue"
          } w-full flex justify-center items-center h-[72px] z-30 top-0 left-0 right-0 mx-auto transition-colors duration-300`}
        >
          <div className=" mx-auto md:max-w-[940px]  xl:max-w-[1200px]  2xl:max-w-[1432px] px-4 w-full w-full">
            <div
              className={`flex justify-between items-center h-full`}
            >
              <div className="header__logo">
                <Link
                  to="/"
                  className="w-full h-full flex justify-center items-center"
                >
                  {/* <Logo /> */}
                </Link>
              </div>
              <nav className="max-w-[300px] sm:max-w-[380px] md:max-w-[480px] xl:max-w-[570px] 2xl:max-w-[670px] h-full flex justify-around items-center">
                {translation && translation.vars ? (
                  <>
                    <NavLink
                      to="/about-us"
                      title={
                        currentLanguage === "az"
                          ? translation.vars.text17az
                          : translation.vars.text17ru
                      }
                    />
                    <NavLink
                      to="/"
                      title={
                        currentLanguage === "az"
                          ? translation.vars.text16az
                          : translation.vars.text16ru
                      }
                    />
                  </>
                ) : (
                  <>
                    <NavLink to="/about-us" title={t("header.aboutus")} />
                    <NavLink to="/" title={t("header.contact")} />
                  </>
                )}
              </nav>

              <div className="flex justify-center items-center">
                {users.auth ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="w-[112px] h-[48px] rounded-[12px] bg-primary-white shadow-custom flex justify-between px-[12px] items-center mr-[20px]"
                    >
                      <Icons.HeaderUserIcon className="w-[32px] h-[32px] shrink-0" />
                      <p className="font-interMedium text-[16px] text-primary-black">
                        {t("header.dashboard")}
                      </p>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/sign-in"
                      className="w-[112px] h-[48px] rounded-[12px] bg-primary-white shadow-custom flex justify-between px-[12px] items-center mr-[20px]"
                    >
                      <Icons.HeaderUserIcon className="w-[32px] h-[32px]" />
                      <p className="font-interMedium text-[16px] text-primary-black">
                        {t("header.signIn")}
                      </p>
                    </Link>
                  </>
                )}

                <LangBtn />
              </div>
            </div>
          </div>
        </header>
      ) : (
        <header
          className={`${
            isHomePage
              ? isScrolled
                ? "fixed bg-primary-white"
                : "absolute bg-transparent"
              : "relative bg-primary-white"
          } w-full flex justify-around items-center h-auto py-[10px] fixed z-40`}
        >
          <div className="">
            <label className="burger" htmlFor="burger">
              <input
                type="checkbox"
                id="burger"
                checked={isMenuOpen}
                onChange={toggleMenu}
              />
              <span
                className={`${
                  isHomePage
                    ? isScrolled
                      ? " bg-primary-black"
                      : "bg-primary-white"
                    : "bg-primary-black"
                }`}
              ></span>
              <span
                className={`${
                  isHomePage
                    ? isScrolled
                      ? " bg-primary-black"
                      : "bg-primary-white"
                    : "bg-primary-black"
                }`}
              ></span>
              <span
                className={`${
                  isHomePage
                    ? isScrolled
                      ? " bg-primary-black"
                      : "bg-primary-white"
                    : "bg-primary-black"
                }`}
              ></span>
            </label>
            {isMenuOpen && (
              <div className="absolute z-50 top-[95px] left-[0px] right-[0px] mx-auto w-full h-[auto] py-[10px] bg-primary-white">
                <div className="w-full h-full flex justify-start items-center flex-col">
                  {translation && translation.vars ? (
                    <>
                      <div className="w-[60%] h-auto p-[10px] flex justify-center items-center border-b-[1px] border-primary-blackSecond">
                        <Link
                          to="/about-us"
                          className="w-full  font-interMedium text-[15px] text-primary-blackSecond flex justify-center items-center"
                        >
                          {currentLanguage === "az"
                            ? translation.vars.text17az
                            : translation.vars.text17ru}
                        </Link>
                      </div>

                      <div className="w-[60%] h-auto p-[10px] flex justify-center items-center border-b-[1px] border-primary-blackSecond">
                        <Link
                          to="/"
                          className="w-full  font-interMedium text-[15px] text-primary-blackSecond flex justify-center items-center "
                        >
                          {currentLanguage === "az"
                            ? translation.vars.text16az
                            : translation.vars.text16ru}
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-[60%] h-auto p-[10px] flex justify-center items-center border-b-[1px] border-primary-blackSecond">
                        <Link
                          to="/"
                          className="w-full  font-interMedium text-[15px] text-primary-blackSecond flex justify-center items-center"
                        >
                          {t("header.aboutus")}
                        </Link>
                      </div>

                      <div className="w-[60%] h-auto p-[10px] flex justify-center items-center border-b-[1px] border-primary-blackSecond">
                        <Link
                          to="/"
                          className="w-full  font-interMedium text-[15px] text-primary-blackSecond flex justify-center items-center "
                        >
                          {t("header.contact")}
                        </Link>
                      </div>
                    </>
                  )}
                  {users.auth ? (
                    <>
                      <div className="w-full h-auto p-[10px] flex justify-center items-center">
                        <Link
                          to="/dashboard"
                          className="w-full  font-interMedium text-[15px] text-primary-blackSecond flex justify-center items-center "
                        >
                          {t("header.dashboard")}
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-full h-auto p-[10px] flex justify-center items-center">
                        <Link
                          to="/sign-in"
                          className="w-full  font-interMedium text-[15px] text-primary-blackSecond flex justify-center items-center "
                        >
                          {t("header.signIn")}
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
          {/*  */}
          {/* LOGO */}
          <div className="w-[60px] h-[23px">
            <Link
              to="/"
              className=" text-[24px] font-InterBold text-primary-black"
            >
              LOGO
            </Link>
          </div>
          <div className="">
            <LangBtn />
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
