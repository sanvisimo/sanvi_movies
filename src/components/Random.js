import React, { useEffect, useState, useReducer } from "react";
import { withRouter } from "react-router-dom";
import headers from "../utils";
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

  const init = (type) => ({ type, movie: null, moviesGenre: [] });

  const reducer = (state, action) => {
    switch (action.type) {
      case "updateGenres":
        return { ...state, moviesGenre: action.payload };
      case "updateMovie":
        return { ...state, movie: action.payload };
      case "init":
        return init(action.payload);
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, match.params.type, init);
  const [isOpen, setIsOpen] = useState(false);
  const [hasError, setErrors] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movieError, setMovieError] = useState(null);
  const [filterGenres, setFilterGenres] = useState([]);

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

  const changeGenres = (genres, movies) => {
    let gm = [];
    for (let i = 0; i < genres.length; i++) {
      let m = movies.filter((m) => m[state.type].genres.includes(genres[i]));
      if (m.length > 0) {
        gm.push({
          genre: genres[i],
          movie: m[Math.ceil(Math.random() * m.length)],
        });
      }
    }
    return gm;
  };

  async function fetchData() {
    /***
     * Questo codice andrebbe lanciato lato server
     * Ci vorrebbe una API che randomizzi i risultati e restituisca semplicemente i valori, invece che calcolarla da client
     */
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
        dispatch({
          type: "updateMovie",
          payload: res[Math.ceil(Math.random() * 1000)],
        });
        setMovieError(null);
        dispatch({
          type: "updateGenres",
          payload: changeGenres(genres, res),
        });
      })
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    dispatch({ type: "init", payload: match.params.type });
    fetchData();
  }, [state.type]);

  const filterResults = (g, years, range) => (e) => {
    /***
     * Questo codice andrebbe lanciato lato server
     * Ci vorrebbe una API che randomizzi i risultati e restituisca semplicemente i valori, invece che calcolarla da client
     */
    e.preventDefault();

    if (g.length === 0) g = genres;

    const m = movies.filter((m) => {
      return !(
        (g.length > 0 && !g.some((g) => m[state.type].genres.includes(g))) ||
        (years.length > 0 && !years.includes(m[state.type].year)) ||
        m[state.type].rating < range[0] ||
        m[state.type].rating > range[1]
      );
    });
    if (m.length > 0) {
      dispatch({
        type: "updateGenres",
        payload: changeGenres(g, m),
      });
      dispatch({
        type: "updateMovie",
        payload: m[Math.ceil(Math.random() * m.length)],
      });
      setMovieError(null);
    } else {
      dispatch({ type: "updateGenres", payload: [] });
      dispatch({ type: "updateMovie", payload: null });
      setMovieError("Spiacenti, Non ci sono film nella ricerca");
    }
    setIsOpen(false);
  };

  return (
    <div id="home" className="container mx-auto">
      <Filter
        genres={filterGenres}
        onClick={handleClick}
        isOpen={isOpen}
        onFilter={filterResults}
      />
      <h1 className="font-serif mb-6 text-4xl lg:text-6xl font-bold text-teal-500 text-center">
        RANDOM {state.type.toUpperCase()}
      </h1>
      {!hasError ? (
        <div>
          <section className="flex justify-center">
            <div className="w-full lg:w-1/3 mx-auto">
              {!!state.movie ? (
                <MovieCard
                  key={`top-random-movie}`}
                  movie={state.movie[state.type]}
                  type={state.type}
                  proportion="4/3"
                />
              ) : !movieError ? (
                <div className="flex w-full justify-center items-center">
                  <Loader />
                </div>
              ) : (
                <div className="flex w-full justify-center items-center">
                  {movieError}
                </div>
              )}
            </div>
          </section>
          <section className="py-6 home__section">
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {state.moviesGenre.map((mg, i) => {
                return mg ? (
                  <MovieGenre
                    key={`meta-${i}`}
                    movie={mg.movie[state.type]}
                    type={state.type}
                    genre={mg.genre}
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
