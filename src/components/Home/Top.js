import React from "react";
import Carousel from "../Carousel";
import MovieCard from "../MovieCard/MovieCard";

const Top = (props) => {
  const title = props.title || "movies";
  const movies = props.elements || [];

  return (
    <div
      className="px-6 py-3 xl:px-24 xl:py-12 bg-teal-500"
      id={`top-${title}`}
    >
      <h2>TOP {title.toUpperCase()} LAST WEEK</h2>
      <Carousel bullets>
        {movies.map((m, i) => (
          <MovieCard key={`top-${title}-${i}`} proportion="3/2" />
        ))}
      </Carousel>
    </div>
  );
};

export default Top;
