import React from 'react';

import './button.css';

const ButtonComponent = ({title, className, onClick }) => {
    return (
        <button className={`${className} bg-primary-blue hover:bg-primary-blueHover transition-colors ease-linear flex justify-center items-center rounded-[12px]`} type="submit" onClick={onClick}>
            <p className="buttonComponent-para">{title}</p>
        </button>
    )
}

export default ButtonComponent;