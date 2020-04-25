import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard/MovieCard";

const MovieGenre = ({ movie, genre }) => {
  return (
    <div>
      <h2>{genre.toUpperCase()}</h2>
      <MovieCard
        key={`top-random-movie}`}
        movie={movie}
        type="show"
        proportion="4/3"
      />
    </div>
  );
};

const Random = () => {
  const genres = [
    "action",
    "adventure",
    "animation",
    "anime",
    "biography",
    "comedy",
    "crime",
    "drama",
    "mini-series",
    "mystery",
    "fantasy",
    "history",
    "horror",
    "romance",
    "science-fiction",
    "superhero",
    "suspense",
    "thriller",
  ];
  const [hasError, setErrors] = useState(false);
  // const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [moviesGenre, setMoviesGenre] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const headers = new Headers({
        "Content-type": "application/json",
        "trakt-api-version": 2,
        "trakt-api-key":
          "2530797cb2d331afb002eb9cc2a89f1c35a8c31315be0442915cd9573d878005",
      });
      const res = await fetch(
        "https://api.trakt.tv/shows/trending?limit=1000&extended=full",
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
            let m = res.filter((m) => m.show.genres.includes(genre));
            return m[Math.ceil(Math.random() * m.length)];
          });
          setMoviesGenre(a);
        })
        .catch((err) => setErrors(err));
    }

    fetchData();
  }, []);

  return (
    <div id="home">
      {!hasError ? (
        <div>
          <section className="grid grid-col-1 lg:grid-cols-4 gap-4">
            <div className="col-span-1">
              {!!movie ? (
                <MovieCard
                  key={`top-random-movie}`}
                  movie={movie.show}
                  type="show"
                  proportion="4/3"
                />
              ) : (
                "loading..."
              )}
            </div>
          </section>
          <section className="py-6 home__section">
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {moviesGenre.map((mg, i) => {
                return mg ? (
                  <MovieGenre
                    key={`meta-${i}`}
                    movie={mg.show}
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

export default Random;
