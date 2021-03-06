import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import headers from "../../utils";
import "./MovieCard.css";
import Loader from "../ui/Loader";

const MovieCard = ({ movie, proportion, type }) => {
  const [m, setMovie] = useState(movie);
  const className = `relative pb-${proportion || "3/4"}`;
  // const stars = [...Array(5).keys()].map(x => ++x);

  const [hasError, setErrors] = useState(false);
  const [people, setPeople] = useState([]);
  const [poster, setPoster] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (movie.ids) {
        const res = await fetch(
          `https://api.trakt.tv/${type}s/${movie.ids.trakt}/people`,
          {
            headers,
          }
        );

        const pos = await fetch(
          `https://api.themoviedb.org/3/${type === "movie" ? type : "tv"}/${
            movie.ids.tmdb
          }?api_key=961e2944601818d62c61d92f009b78b2&language=en-US`
        );

        res
          .json()
          .then((res) => setPeople(res.cast))
          .catch((err) => setErrors(err));

        pos
          .json()
          .then((pos) =>
            setPoster(`https://image.tmdb.org/t/p/w500${pos.poster_path}`)
          )
          .catch((err) => setErrors(err));
      }
    }
    setMovie(movie);
    fetchData();
  }, [movie, type]);

  return (
    <div className="whitespace-normal">
      {!hasError ? (
        <div className="bg-white">
          <div className={className}>
            {!poster ? (
              <div className="w-full h-full flex justify-center items-center absolute">
                <Loader />
              </div>
            ) : (
              <img
                className="absolute h-full w-full object-cover"
                src={poster}
                alt={m.title}
              />
            )}
            <div className="absolute bottom-0 left-0 p-4 bg-red-500 card__title text-white w-full">
              <h2 className="mb-5 font-bold text-md xl:text-lg leading-tight w-full">
                {m.title}
              </h2>
              <div className="grid grid-cols-3 justify-between align-bottom">
                <div className="col-span-3 xl:col-span-2">
                  <div className="mt-1 text-md leading-tight block">
                    {people
                      ? people.slice(0, 3).map((person, i) => (
                          <Link
                            to="/"
                            key={`people-${m.ids.trakt}-${i}`}
                            className="text-teal-300"
                          >
                            {person.person.name}
                            {i < 2 ? <span> &bull; </span> : "  "}
                          </Link>
                        ))
                      : "..."}
                    ...
                  </div>
                  {m.genres ? (
                    <div className="items-baseline mt-3">
                      {m.genres.map((genre, i) => (
                        <span
                          key={`genre-${m.ids.trakt}-${i}`}
                          className="inline-block bg-teal-200 text-teal-800 text-xs px-2 mr-2 rounded-full uppercase font-semibold tracking-wide"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-span-3 xl:col-span-1 flex-row xl:flex-col flex text-right justify-between xl:justify-end">
                  <div className="flex items-center justify-start xl:justify-end">
                    <svg
                      viewBox="0 0 24 24"
                      className="text-yellow-300 h-4 w-4 fill-current"
                    >
                      <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
                    </svg>
                    <span>{Math.round(m.rating * 10) / 10}</span>
                  </div>
                  <div className="text-left xl:text-right">{m.year}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        JSON.stringify(hasError)
      )}
    </div>
  );
};

export default MovieCard;
