import React, { useEffect, useState } from "react";
import Carousel from "../ui/Carousel";
import headers from "../../utils";
import MovieCard from "../MovieCard/MovieCard";
import Loader from "../ui/Loader";

const Top = (props) => {
  const title = props.title || "movies";

  const [hasError, setErrors] = useState(false);
  const [movies, setMovies] = useState(props.elements || []);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://api.trakt.tv/${title}s/trending?limit=10&extended=full`,
        {
          headers,
        }
      );

      res
        .json()
        .then((res) => setMovies(res))
        .catch((err) => setErrors(err));
    }

    fetchData();
  }, [title]);

  return (
    <div
      className="px-6 pt-3 xl:px-24 xl:pt-12 pb-12 bg-teal-500"
      id={`top-${title}`}
    >
      <h2>TOP {title.toUpperCase()} LAST WEEK</h2>
      {hasError ? (
        <span>Has error: {JSON.stringify(hasError)}</span>
      ) : movies.length > 0 ? (
        <Carousel bullets>
          {movies.map((movie, i) => (
            <MovieCard
              key={`top-${title}-${i}`}
              movie={movie[title]}
              type={title}
              proportion="3/2"
            />
          ))}
        </Carousel>
      ) : (
        <div className="flex w-full justify-center items-center">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Top;
