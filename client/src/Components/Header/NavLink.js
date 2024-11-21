import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ to, title, className }) => {
    const location = useLocation();
    
    const isActive = location.pathname === to;


    return (
        <div className="flex justify-center items-center xs:w-[70px] sm:w-[100px] md:w-[140px] xl:w-[140px] 2xl:w-[150px] h-full transition-colors duration-300 cursor-pointer hover:bg-[#2d2d860d] relative">
            <div
                className={`absolute w-[25px] rounded-[10px] h-[2px] bg-primary-white z-5 absCentered transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                }`}></div>
            <Link to={to} className="w-full h-full flex justify-center items-center">
                <button className="font-medium text-[12px] md:text-[14px] xl:text-[16px] 2xl:text-[16px] text-white hover:text-primary-lightPurple transition-all ease-in-out">{title}</button>
            </Link>
        </div>
    );
};

export default NavLink;