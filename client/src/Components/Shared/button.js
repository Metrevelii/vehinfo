import React from 'react';

import './button.css';

const ButtonComponent = ({title, className }) => {
    return (
        <button className={`buttonComponent ${className}`} type="submit">
            <p className="buttonComponent-para">{title}</p>
        </button>
    )
}

export default ButtonComponent;