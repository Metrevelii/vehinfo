import React, { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";
import LangBtn from "../Shared/langbtn";
import { Link, useLocation } from "react-router-dom";
import NavLink from "./NavLink";
import useBreakpoint from "../../hooks/useBreakpoint";

const Header = ({ users }) => {
  const { t } = useTranslation("global");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
          } w-full flex justify-center items-center h-[100px] z-30 top-0 left-0 right-0 mx-auto transition-colors duration-300`}
        >
          <div className="mx-auto max-w-full sm:max-w-[620px] md:max-w-[760px]  lg:max-w-[940px] xl:max-w-[1280px]  2xl:max-w-[1432px] w-full">
            <div
              className={`px-[15px] flex justify-between items-center h-[100px]`}
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
                <NavLink to="/about_us" title={t("header.aboutus")} />
                <NavLink to="/delivery_calc" title={t("header.calc")} />
                <NavLink to="/contacts" title={t("header.contact")} />
                {users.auth ? (
                  <>
                    <NavLink to="/dashboard" title={t("header.dashboard")}></NavLink>
                  </>
                ) : null}
              </nav>

              <div>
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
                ? "fixed bg-primary-blue"
                : "absolute bg-transparent"
              : "relative bg-primary-blue"
          } w-full flex justify-around items-center h-auto py-[10px] fixed z-40`}
        >
          {/* BURGER MENU  */}
          <div className="">
            <label className="burger" htmlFor="burger">
              <input
                type="checkbox"
                id="burger"
                checked={isMenuOpen}
                onChange={toggleMenu}
              />
              <span></span>
              <span></span>
              <span></span>
            </label>
            {isMenuOpen && (
              <div className="absolute z-50 top-[95px] left-[0px] right-[0px] mx-auto w-full h-[auto] py-[10px] bg-primary-whiteSecond border border-solid border-primary-blackSecond">
                <div className="w-full h-full flex justify-start items-center flex-col">
                  <div className="w-[60%] h-auto p-[10px] flex justify-center items-center border-b-[1px] border-primary-blackSecond">
                    <Link
                      to="/about_us"
                      className="w-full  font-interMedium text-[15px] text-primary-blackSecond flex justify-center items-center"
                    >
                      {" "}
                      {t("header.aboutus")}{" "}
                    </Link>
                  </div>
                  <div className="w-[60%] h-auto p-[10px] flex justify-center items-center border-b-[1px] border-primary-blackSecond">
                    <Link
                      to="/delivery_calc"
                      className="w-full  font-interMedium text-[15px] text-primary-blackSecond flex justify-center items-center"
                    >
                      {t("header.calc")}
                    </Link>
                  </div>
                  <div className="w-[60%] h-auto p-[10px] flex justify-center items-center border-b-[1px] border-primary-blackSecond">
                    <Link
                      to="/contacts"
                      className="w-full  font-interMedium text-[15px] text-primary-blackSecond flex justify-center items-center "
                    >
                      {t("header.contact")}{" "}
                    </Link>
                  </div>
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
                  ) : null}
                </div>
              </div>
            )}
          </div>
          {/*  */}
          {/* LOGO */}
          <div className="w-[60px] h-[23px">
            <Link
              to="/"
              className=" text-[24px] font-InterBold text-primary-white"
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
