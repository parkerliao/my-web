import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Board from "../components/Home/Board/Board";
import About from "../components/Home/About/About";
import Skill from "../components/Home/Skill/Skill";
import Footer from "../components/Footer/Footer";

import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="content-container">
        <Board />
        <About />
        <Skill />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
