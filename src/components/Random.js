import React, { useEffect, useState, useReducer } from "react";
import { withRouter } from "react-router-dom";
import MovieCard from "./MovieCard/MovieCard";
import Loader from "./ui/Loader";
import Filter from "./ui/Filter";

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

const Random = ({ match }) => {
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
  ];

  function handleClick() {
    if (movies.length > 0) {
      const a = movies.slice(0, 5).reduce((total, obj) => {
        let g = obj[state.type].genres;
        g.map((ge) => {
          if (!total.includes(ge)) {
            total.push(ge);
          }
          return total;
        });
        return total;
      }, []);
      setFilterGenres(a);
      setIsOpen(!isOpen);
    }
  }

  function init(type) {
    return { type };
  }

  function reducer(state, action) {
    switch (action.type) {
      case "init":
        return init(action.payload);
      default:
        throw new Error();
    }
  }
  // const [type, setType] = useState(match.params.type);
  const [state, dispatch] = useReducer(reducer, match.params.type, init);
  const [isOpen, setIsOpen] = useState(true);
  const [hasError, setErrors] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [moviesGenre, setMoviesGenre] = useState([]);
  const [filterGenres, setFilterGenres] = useState([]);

  useEffect(() => {
    dispatch({ type: "init", payload: match.params.type });
    async function fetchData() {
      const headers = new Headers({
        "Content-type": "application/json",
        "trakt-api-version": 2,
        "trakt-api-key":
          "2530797cb2d331afb002eb9cc2a89f1c35a8c31315be0442915cd9573d878005",
      });
      const res = await fetch(
        `https://api.trakt.tv/${state.type}s/trending?limit=1000&extended=full`,
        {
          headers,
        }
      );

      res
        .json()
        .then((res) => {
          setMovies(res);
          setMovie(res[Math.ceil(Math.random() * 1000)]);
          setMoviesGenre(
            genres.map((genre) => {
              let m = res.filter((m) => m[state.type].genres.includes(genre));
              if (m.length > 0) {
                return m[Math.ceil(Math.random() * m.length)];
              }
              return;
            })
          );
        })
        .catch((err) => setErrors(err));
    }

    fetchData();
  }, [state.type]);

  return (
    <div id="home" className="container mx-auto">
      <Filter genres={filterGenres} onClick={handleClick} isOpen={isOpen} />
      <h1 className="font-serif mb-6 text-4xl lg:text-6xl font-bold text-teal-500 text-center">
        RANDOM {state.type.toUpperCase()}
      </h1>
      {!hasError ? (
        <div>
          <section className="flex justify-center">
            <div className="w-full lg:w-1/3 mx-auto">
              {!!movie ? (
                <MovieCard
                  key={`top-random-movie}`}
                  movie={movie[state.type]}
                  type={state.type}
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
                    movie={mg[state.type]}
                    type={state.type}
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
        <div>errori: {JSON.stringify(hasError)}</div>
      )}
    </div>
  );
};

export default withRouter(Random);
