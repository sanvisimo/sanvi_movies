import React, { Suspense } from "react";
import Loader from "./ui/Loader";

const Top = React.lazy(() => import("./Home/Top"));

const Home = () => {
  return (
    <div id="home" className="container mx-auto">
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
