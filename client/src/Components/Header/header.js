import React, { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";
import LangBtn from "../Shared/langbtn";
import { Link } from "react-router-dom";
import NavLink from './NavLink';

const Header = ({users, signOutUser}) => {
  const { t } = useTranslation("global");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
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

  return (
    <>
      <header
      className={`${
        isScrolled ? "bg-black shadow-lg fixed" : "bg-transparent absolute"
      } shadow-[0_4px_20px_rgba(31,22,59,0.07)] mb-[50px] h-[60px] z-30 top-0 left-0 right-0 mx-auto transition-colors duration-300`}
      >
        <div className="container">
          <div className="flex justify-between items-center h-[70px]">
            <div className="header__logo">
              <Link to="/" className="w-100 h-100 centered">
                {/* <Logo /> */}
              </Link>
            </div>
            <nav className="max-w-[670px] h-full flex justify-around items-center">
              <NavLink to="/about_us" title={t("header.aboutus")} />
              <NavLink to="/delivery_calc" title={t("header.calc")} />
              <NavLink to="/contacts" title={t("header.contact")} />
              {users.auth ? 
                <>
                <button onClick={() => signOutUser()} >Logout</button> 
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
