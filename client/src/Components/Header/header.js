import React, { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";
import LangBtn from "../Shared/langbtn";
import { Link, useLocation } from "react-router-dom";
import NavLink from "./NavLink";
import useBreakpoint from "../../hooks/useBreakpoint";
import { Icons } from "../../icons";

import Social from "../Footer/social";

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
                ? "fixed bg-primary-orangeHeader"
                : "absolute bg-transparent"
              : "fixed bg-primary-orangeHeader"
          } w-full flex justify-center items-center h-[72px] z-30 top-0 left-0 right-0 mx-auto transition-colors duration-300`}
        >
          <div className=" mx-auto md:max-w-[940px]  xl:max-w-[1200px]  2xl:max-w-[1432px] px-4 w-full">
            <div className={`flex justify-between items-center h-full`}>
              <div
                className={`${
                  isHomePage
                    ? isScrolled
                      ? "logo-black"
                      : "logo-white"
                    : "logo-black"
                } w-[150px] md:w-[155px] lg:w-[170px] xl:w-[186px] 2xl:w-[186px] h-[41px]`}
              >
                <Link
                  to="/"
                  className="w-full h-full flex justify-center items-center"
                ></Link>
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
                      isHomePage={isHomePage}
                      isScrolled={isScrolled}
                    />
                    <NavLink
                      to="/contact-us"
                      title={
                        currentLanguage === "az"
                          ? translation.vars.text16az
                          : translation.vars.text16ru
                      }
                      isHomePage={isHomePage}
                      isScrolled={isScrolled}
                    />
                    <NavLink
                      to="/benefits"
                      title={
                        currentLanguage === "az"
                          ? translation.vars.text23az
                          : translation.vars.text23ru
                      }
                      isHomePage={isHomePage}
                      isScrolled={isScrolled}
                    />
                  </>
                ) : (
                  <>
                    <NavLink
                      to="/about-us"
                      title={t("header.aboutus")}
                      isHomePage={isHomePage}
                      isScrolled={isScrolled}
                    />
                    <NavLink
                      to="/contact-us"
                      title={t("header.contact")}
                      isHomePage={isHomePage}
                      isScrolled={isScrolled}
                    />
                    <NavLink
                      to="/contact-us"
                      title={t("header.benefits")}
                      isHomePage={isHomePage}
                      isScrolled={isScrolled}
                    />
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
                      <Icons.HeaderUserIcon
                        className={`${
                          isHomePage
                            ? isScrolled
                              ? "fill-[#525252]"
                              : "fill-primary-orange"
                            : "fill-[#525252]"
                        } w-[32px] h-[32px] shrink-0`}
                      />
                      <p className="font-interMedium text-[16px] text-primary-black">
                        {t("header.dashboard")}
                      </p>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/sign-in"
                      className={`${
                        isHomePage
                          ? isScrolled
                            ? " bg-primary-white"
                            : " bg-primary-white"
                          : " bg-primary-white"
                      } w-[90px] h-[48px] lg:w-[112px] lg:h-[48px] rounded-[12px] shadow-custom flex justify-between px-[12px] items-center mr-[20px]`}
                    >
                      <Icons.HeaderUserIcon
                        className={`${
                          isHomePage
                            ? isScrolled
                              ? "fill-[#525252]"
                              : " fill-primary-orange"
                            : "fill-[#525252]"
                        } w-[25px] h-[25px] lg:w-[32px] lg:h-[32px] shrink-0`}
                      />
                      <p
                        className={`${
                          isHomePage
                            ? isScrolled
                              ? "text-primary-black"
                              : " text-primary-black"
                            : "text-primary-black"
                        } font-interMedium text-[12px] lg:text-[16px]`}
                      >
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
              ? isScrolled || isMenuOpen
                ? "fixed bg-primary-white"
                : "absolute bg-transparent"
              : isMenuOpen
              ? "fixed bg-primary-white"
              : "fixed bg-primary-white"
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
                  isMenuOpen
                    ? "bg-primary-black"
                    : isHomePage
                    ? isScrolled
                      ? "bg-primary-black"
                      : "bg-primary-white"
                    : "bg-primary-black"
                }`}
              ></span>
              <span
                className={`${
                  isMenuOpen
                    ? "bg-primary-black"
                    : isHomePage
                    ? isScrolled
                      ? "bg-primary-black"
                      : "bg-primary-white"
                    : "bg-primary-black"
                }`}
              ></span>
              <span
                className={`${
                  isMenuOpen
                    ? "bg-primary-black"
                    : isHomePage
                    ? isScrolled
                      ? "bg-primary-black"
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
                      <div className="w-[60%] h-auto py-[25px] px-[10px] flex justify-center items-center border-b-[1px] border-primary-blackSecond">
                        <Link
                          to="/about-us"
                          className="w-full  font-interMedium text-[15px] text-primary-blackSecond flex justify-center items-center"
                        >
                          {currentLanguage === "az"
                            ? translation.vars.text17az
                            : translation.vars.text17ru}
                        </Link>
                      </div>

                      <div className="w-[60%] h-auto py-[25px] px-[10px] flex justify-center items-center border-b-[1px] border-primary-blackSecond">
                        <Link
                          to="/contact-us"
                          className="w-full  font-interMedium text-[15px] text-primary-blackSecond flex justify-center items-center "
                        >
                          {currentLanguage === "az"
                            ? translation.vars.text16az
                            : translation.vars.text16ru}
                        </Link>
                      </div>
                      <div className="w-[60%] h-auto py-[25px] px-[10px] flex justify-center items-center border-b-[1px] border-primary-blackSecond">
                        <Link
                          to="/benefits"
                          className="w-full  font-interMedium text-[15px] text-primary-blackSecond flex justify-center items-center "
                        >
                          {currentLanguage === "az"
                            ? translation.vars.text23az
                            : translation.vars.text23ru}
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-[60%] h-auto py-[25px] px-[10px] flex justify-center items-center border-b-[1px] border-primary-blackSecond">
                        <Link
                          to="/about-us"
                          className="w-full  font-interMedium text-[15px] text-primary-blackSecond flex justify-center items-center"
                        >
                          {t("header.aboutus")}
                        </Link>
                      </div>

                      <div className="w-[60%] h-auto py-[25px] px-[10px] flex justify-center items-center border-b-[1px] border-primary-blackSecond">
                        <Link
                          to="/contact-us"
                          className="w-full  font-interMedium text-[15px] text-primary-blackSecond flex justify-center items-center "
                        >
                          {t("header.contact")}
                        </Link>
                      </div>
                      <div className="w-[60%] h-auto py-[25px] px-[10px] flex justify-center items-center border-b-[1px] border-primary-blackSecond">
                        <Link
                          to="/benefits"
                          className="w-full  font-interMedium text-[15px] text-primary-blackSecond flex justify-center items-center "
                        >
                          {t("header.benefits")}
                        </Link>
                      </div>
                    </>
                  )}
                  {users.auth ? (
                    <>
                      <div className="w-[60%] h-auto py-[25px] px-[10px]  flex justify-center items-center">
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
                      <div className="w-[60%] h-auto py-[25px] px-[10px]   flex justify-center items-center">
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
                <div className="w-full flex justify-start items-center mt-[2.5rem]">
                  <Social />
                </div>
              </div>
            )}
          </div>
          {/*  */}
          {/* LOGO */}
          <Link
            to="/"
            className={`${
              isMenuOpen
                ? "logo-orange"
                : isHomePage
                ? isScrolled
                  ? "logo-orange"
                  : "logo-white"
                : "logo-orange"
            } w-[143px] h-[32px]`}
          ></Link>
          <div className="shadow-custom rounded-[12px]">
            <LangBtn />
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
