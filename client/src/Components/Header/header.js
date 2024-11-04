import React, { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";
import LangBtn from "../Shared/langbtn";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavLink from './NavLink';


const Header = ({users, signOutUser}) => {
  const { t } = useTranslation("global");
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleSignOut = () => {
    signOutUser();
    navigate("/");  
  };

  const isHomePage = location.pathname === '/';

  return (
    <>
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
          <div className={`px-[15px] flex justify-between items-center h-[100px]`}>
            <div className="header__logo">
              <Link to="/" className="w-100 h-100 centered">
                {/* <Logo /> */}
              </Link>
            </div>
            <nav className="max-w-[300px] sm:max-w-[380px] md:max-w-[480px] xl:max-w-[570px] 2xl:max-w-[670px] h-full flex justify-around items-center">
              <NavLink to="/about_us" title={t("header.aboutus")} />
              <NavLink to="/delivery_calc" title={t("header.calc")} />
              <NavLink to="/contacts" title={t("header.contact")} />
              {users.auth ? 
                <>
                <button className="font-medium text-[12px] md:text-[14px] xl:text-[16px] 2xl:text-[16px] text-white" onClick={() => handleSignOut()} >Logout</button> 
                <NavLink to="/dashboard" title={'My Acc'}></NavLink> 
                
                </>
                :
                <NavLink to="/sign_in" title={t("Register")} />
              
              }
            </nav>
            <div className="header__switcher">
              <LangBtn />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
