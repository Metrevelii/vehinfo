import React from "react";

const DashboardIcon = (props) => {
  return (
    <svg
      {...props}
      stroke="#000000"
      className="icon glyph size-6  group-focus:stroke-white"
      id="dashboard-alt"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#000000"
    >
      <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
      <g
        strokeLinejoin="round"
        strokeLinecap="round"
        id="SVGRepo_tracerCarrier"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M14,10V22H4a2,2,0,0,1-2-2V10Z"></path>
        <path d="M22,10V20a2,2,0,0,1-2,2H16V10Z"></path>
        <path d="M22,4V8H2V4A2,2,0,0,1,4,2H20A2,2,0,0,1,22,4Z"></path>
      </g>
    </svg>
  );
};

export default DashboardIcon;
