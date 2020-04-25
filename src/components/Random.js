import React from "react";
import MovieCard from "./MovieCard/MovieCard";

const MovieGenre = () => {
  return (
    <div>
      <h2>TOP 10 Metracritic</h2>
      <MovieCard proportion="4/3" />
    </div>
  );
};

const Random = () => {
  const movies = [...Array(10).keys()].map((x) => ++x);

  return (
    <div id="home">
      <section className="grid grid-col-1 lg:grid-cols-4 gap-4">
        <div className="col-span-1">
          <MovieCard proportion="4/3" />
        </div>
        <div className="col-span-1">
          <MovieCard proportion="4/3" />
        </div>
      </section>
      <section className="py-6 home__section">
        <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {movies.map((m, i) => {
            return <MovieGenre key={`meta-${i}`} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Random;
