import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import Recent from "./Recent";
import Popular from "./Popular";
import Newsletter from "./Newsletter";
import { data } from "../data";
import star from "../assets/star.svg";
import clock from "../assets/clock.svg";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Popular star={star} clock={clock} data={data} />
      <Recent star={star} clock={clock} data={data} />
      <Newsletter />
    </>
  );
};

export default Home;
