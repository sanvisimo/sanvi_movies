import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import MovieCard from "./MovieCard/MovieCard";
import Loader from "./ui/Loader";

const MovieGenre = ({ movie, genre, type }) => {
  return (
    <div>
      <h2>{genre.toUpperCase()}</h2>
      <MovieCard
        key={`top-random-movie}`}
        movie={movie}
        type={type}
        proportion="4/3"
      />
    </div>
  );
};

const Random = ({ match, history }) => {
  const genres = [
    "action",
    "adventure",
    "animation",
    "comedy",
    "crime",
    "drama",
    "fantasy",
    "history",
    "horror",
    "romance",
    "science-fiction",
    "superhero",
    "suspense",
  ];
  const [type, setType] = useState(match.params.type);
  const [hasError, setErrors] = useState(false);
  // const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [moviesGenre, setMoviesGenre] = useState([]);

  history.listen((location, action) => {
    console.log("on route change", location.pathname.replace("/", ""));
    setType("show");
  });

  useEffect(() => {
    setType(match.params.type);
    async function fetchData() {
      const headers = new Headers({
        "Content-type": "application/json",
        "trakt-api-version": 2,
        "trakt-api-key":
          "2530797cb2d331afb002eb9cc2a89f1c35a8c31315be0442915cd9573d878005",
      });
      const res = await fetch(
        `https://api.trakt.tv/${type}s/trending?limit=1000&extended=full`,
        {
          headers,
        }
      );

      res
        .json()
        .then((res) => {
          // setMovies(res);
          setMovie(res[Math.ceil(Math.random() * 1000)]);
          let a = genres.map((genre) => {
            let m = res.filter((m) => m[type].genres.includes(genre));
            return m[Math.ceil(Math.random() * m.length)];
          });
          setMoviesGenre(a);
        })
        .catch((err) => setErrors(err));
    }

    fetchData();
  }, [type]);

  return (
    <div id="home">
      <h1 className="font-serif mb-6 text-4xl lg:text-6xl font-bold text-teal-500 text-center">
        RANDOM {type.toUpperCase()}
      </h1>
      {!hasError ? (
        <div>
          <section className="flex justify-center">
            <div className="w-full lg:w-1/3 mx-auto">
              {!!movie ? (
                <MovieCard
                  key={`top-random-movie}`}
                  movie={movie[type]}
                  type={type}
                  proportion="4/3"
                />
              ) : (
                <div className="flex w-full justify-center items-center">
                  <Loader />
                </div>
              )}
            </div>
          </section>
          <section className="py-6 home__section">
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {moviesGenre.map((mg, i) => {
                return mg ? (
                  <MovieGenre
                    key={`meta-${i}`}
                    movie={mg[type]}
                    type={type}
                    genre={genres[i]}
                  />
                ) : (
                  ""
                );
              })}
            </div>
          </section>
        </div>
      ) : (
        JSON.stringify(hasError)
      )}
    </div>
  );
};

export default withRouter(Random);
