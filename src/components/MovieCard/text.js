import React from "react";

<div className="absolute bottom-0 left-0 p-4 bg-red-500 card__title text-white w-full">
  <div className="flex-col xl:flex-row flex justify-between align-bottom">
    <div>
      <h2 className="mb-5 font-bold text-md lg:text-lg leading-tight truncate w-full">
        {t}
      </h2>
      <div className="mt-1 text-md leading-tight block w-3 break-all">
        Brad Pitt, Leonardo Di Caprio, Maria Antonietta, ...
      </div>
      <div className="flex items-baseline mt-3">
        <span className="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
          New
        </span>
        <div className="ml-2 text-gray-200 text-xs uppercase font-semibold tracking-wide">
          3 beds &bull; 5 baths
        </div>
      </div>
    </div>
    <div className="flex-col flex pl-5 text-right justify-end">
      <div className="flex items-center justify-end">
        <svg
          viewBox="0 0 24 24"
          className="text-yellow-300 h-4 w-4 fill-current"
        >
          <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
        </svg>
        <span>7.5</span>
      </div>
      <div className="text-right">
        <p>
          2020 <br /> 105min
        </p>
      </div>
    </div>
  </div>
</div>;
