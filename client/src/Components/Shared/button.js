import React from 'react';

import './button.css';

const ButtonComponent = ({title, className, onClick }) => {
    return (
        <button className={`buttonComponent ${className}`} type="submit" onClick={onClick}>
            <p className="buttonComponent-para">{title}</p>
        </button>
    )
}

export default ButtonComponent;