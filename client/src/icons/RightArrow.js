import React from "react";

const RightArrow = (props) => {
  return (
    <svg
      {...props}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 31.5C21.5804 31.5 25.0142 30.0777 27.5459 27.5459C30.0777 25.0142 31.5 21.5804 31.5 18C31.5 14.4196 30.0777 10.9858 27.5459 8.45406C25.0142 5.92232 21.5804 4.5 18 4.5C14.4196 4.5 10.9858 5.92232 8.45406 8.45406C5.92232 10.9858 4.5 14.4196 4.5 18C4.5 21.5804 5.92232 25.0142 8.45406 27.5459C10.9858 30.0777 14.4196 31.5 18 31.5ZM23.959 15.5215L17.209 22.2715C16.7133 22.7672 15.9117 22.7672 15.4213 22.2715L12.0463 18.8965C11.5506 18.4008 11.5506 17.5992 12.0463 17.1088C12.542 16.6184 13.3436 16.6131 13.834 17.1088L16.3125 19.5873L22.166 13.7285C22.6617 13.2328 23.4633 13.2328 23.9537 13.7285C24.4441 14.2242 24.4494 15.0258 23.9537 15.5162L23.959 15.5215Z"
        fill="#FC632C"
      />
    </svg>
  );
};

export default RightArrow;