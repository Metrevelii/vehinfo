import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ to, title, className }) => {
    return (
        <div className="flex justify-center items-center w-[150px] h-full transition-colors duration-300 cursor-pointer hover:bg-[#2d2d860d]">
            <Link to={to} className="w-full h-full flex justify-center items-center">
                <button className={`header_btn ${className}`}>{title}</button>
            </Link>
        </div>
    );
};

export default NavLink;