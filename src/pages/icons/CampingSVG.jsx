import * as React from "react";
const CampingSVG = (props) => (
    <svg
    width="30px"
    height="30px"
    viewBox="0 0 24 24"
    id="Line"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      id="primary"
      d="M10,3,20.07,19.48A1,1,0,0,1,19.22,21H4.78a1,1,0,0,1-.85-1.52L14,3"
      style={{
        fill: "none",
        stroke: "#F06000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
    <path
      id="primary-2"
      data-name="primary"
      d="M11.17,16.25,8,21h8l-3.17-4.75A1,1,0,0,0,11.17,16.25Z"
      style={{
        fill: "none",
        stroke: "#F06000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </svg>
);
export default CampingSVG;