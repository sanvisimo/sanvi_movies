import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import Carousel from "./Carousel";
import Top from "./Home/Top";

const Home = () => {
  const movies = [...Array(10).keys()].map((x) => ++x);
  const carouselOptions = {
    type: "carousel",
    perView: 3,
    peek: 0,
    gap: 20,
    breakpoints: {
      1023: {
        perView: 1,
        peek: 0,
      },
      1439: {
        perView: 2,
        peek: { before: 0, after: 100 },
      },
    },
  };

  return (
    <div id="home">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-2 home__section">
        {["shows", "movies"].map((el, i) => (
          <Top title={el} elements={movies} key={i} />
        ))}
      </section>
      <section className="py-6 home__section">
        <h2>TOP 10 Metracritic</h2>
        <Carousel options={carouselOptions} arrows>
          {movies.map((m, i) => (
            <MovieCard key={`meta-${i}`} />
          ))}
        </Carousel>
      </section>
    </div>
  );
};

export default Home;
