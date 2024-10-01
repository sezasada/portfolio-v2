import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Skills from "../../components/Skills/Skills";
import css from "./homepage.module.css";

const Homepage = () => {
  return (
    <div className={css.pageWrapper}>
      <div className={css.navbarWrapper}>
        <Navbar />
      </div>
      <div>
        <Header />
      </div>
      <div>
        <Skills />
      </div>
    </div>
  );
};

export default Homepage;
