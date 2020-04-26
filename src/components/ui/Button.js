import React from "react";

const Button = ({ label, onClick }) => (
  <button
    className="bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded"
    aria-label={label}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
