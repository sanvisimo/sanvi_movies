import React from "react";
import Checkbox from "./Checkbox";
import Slider from "./Slider";

const years = (n) => {
  const date = new Date(),
    year = date.getFullYear() - n;
  let years = ["older"];
  for (var i = year; i < year + n; i++) {
    years.push(i);
  }
  return [...years, date.getFullYear()].reverse();
};

const Filter = ({ genres, onClick, isOpen = false }) => {
  return (
    <div className=" relative w-full flex justify-end">
      <div className="cursor-pointer" onClick={onClick}>
        <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z"
          />
        </svg>
      </div>

      {isOpen ? (
        <div className="absolute right-0 mt-6 py-3 px-4 w-auto inline-block rounded-lg shadow-2xl bg-gray-300 z-50">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-10">
              <div>
                <h4>Generi</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {genres.map((genre, i) => (
                    <div key={`checboxContainer-${i}`}>
                      <Checkbox label={genre} key={`checkbox-range-${i}`} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-11/12 mt-2 mb-6">
                <h4>Rating</h4>
                <Slider />
              </div>
            </div>

            <div className="col-span-12 md:col-span-2">
              <h4>Anni</h4>
              <div class="grid grid-cols-3 md:grid-cols-1">
                {years(5).map((year, i) => (
                  <div key={`yearContainer-${i}`}>
                    <Checkbox label={year} key={`checkbox-year-${i}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Filter;
