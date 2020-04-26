import React, { Suspense } from "react";
import Loader from "./ui/Loader";

const Top = React.lazy(() => import("./Home/Top"));

const Home = () => {
  // const carouselOptions = {
  //   type: "carousel",
  //   perView: 3,
  //   peek: 0,
  //   gap: 20,
  //   breakpoints: {
  //     1023: {
  //       perView: 1,
  //       peek: 0,
  //     },
  //     1439: {
  //       perView: 2,
  //       peek: { before: 0, after: 100 },
  //     },
  //   },
  // };

  return (
    <div id="home">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-2 home__section">
        {["show", "movie"].map((el, i) => (
          <Suspense
            fallback={
              <div className="flex w-full justify-center items-center">
                <Loader />
              </div>
            }
          >
            <Top title={el} key={i} />
          </Suspense>
        ))}
      </section>
    </div>
  );
};

export default Home;
