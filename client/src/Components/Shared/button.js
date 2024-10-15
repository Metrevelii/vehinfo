import React from 'react';

import './button.css';

const Button = ({title, className }) => {
    return (
        <button className={className}>
            {title}
        </button>
    )
}

export default Button;