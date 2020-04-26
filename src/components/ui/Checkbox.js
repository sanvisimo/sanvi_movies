import React from "react";
import "./Checkbox.css";

const Checkbox = ({ label }) => {
  return (
    <label className="custom-label flex items-center">
      <div className="bg-white shadow w-4 h-4 flex justify-center items-center mr-2">
        <input type="checkbox" className="hidden" />
        <svg
          className="hidden w-6 h-6 text-teal-500 pointer-events-none"
          viewBox="0 0 172 172"
        >
          <g
            fill="none"
            strokeWidth="none"
            strokeMiterlimit="10"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
            style={{ mixBlendMode: "normal" }}
          >
            <path d="M0 172V0h172v172z" />
            <path
              d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
              fill="currentColor"
              strokeWidth="1"
            />
          </g>
        </svg>
      </div>
      <span className="select-none">{label}</span>
    </label>
  );
};

export default Checkbox;
