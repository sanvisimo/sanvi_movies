import React, { Suspense } from "react";
import MovieCard from "./MovieCard/MovieCard";
import Carousel from "./Carousel";

const Top = React.lazy(() => import("./Home/Top"));

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
        {["show", "movie"].map((el, i) => (
          <Suspense fallback={<h1>Loading top {el}...</h1>}>
            <Top title={el} key={i} />
          </Suspense>
        ))}
      </section>
    </div>
  );
};

export default Home;
