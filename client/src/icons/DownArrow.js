import React from "react";

const DownArrow = (props) => {
  return (
    <svg
    {...props}
      width="16"
      height="10"
      viewBox="0 0 16 10"
 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.69307 9.17619L14.7127 2.38741C15.0958 1.95556 15.0958 1.25539 14.7127 0.823755C14.3299 0.392081 13.7091 0.392081 13.3263 0.823755L7.9999 6.83078L2.67367 0.82393C2.29074 0.392256 1.66997 0.392256 1.2872 0.82393C0.904267 1.2556 0.904267 1.95574 1.2872 2.38759L7.30688 9.17636C7.49836 9.3922 7.74905 9.5 7.99987 9.5C8.25081 9.5 8.50168 9.39199 8.69307 9.17619Z"
        fill="#5D636B"
        stroke="#5D636B"
      />
    </svg>
  );
};

export default DownArrow;
