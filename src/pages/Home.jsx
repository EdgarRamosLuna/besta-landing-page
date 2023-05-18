import React from "react";
import Hero from "./Hero";
import Models from "./Models";
import HowItWorks from "./HowItWorks";
import Bene from "./Bene";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Models />
      <HowItWorks />
      <Bene />
      <Footer />
    </>
  );
};

export default Home;
