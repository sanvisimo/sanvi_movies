import React from "react";
import Carousel from "../Carousel";
import MovieCard from "../MovieCard/MovieCard";

const Top = (props) => {
  const title = props.title || "movies";
  const movies = props.elements || [];

  return (
    <div className="p-16 bg-teal-500" id={`top-${title}`}>
      <h2>TOP {title.toUpperCase()} LAST WEEK</h2>
      <Carousel bullets>
        {movies.map((m, i) => (
          <MovieCard key={`top-${title}-${i}`} />
        ))}
      </Carousel>
    </div>
  );
};

export default Top;
