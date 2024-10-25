import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Skills from "../../components/Skills/Skills";
import Contributions from "../../components/Contributions/Contributions";
import Testimonials from "../../components/Testimonials/Testimonials";
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
        <AboutMe />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Contributions />
      </div>
      <div>
        <Testimonials />
      </div>
    </div>
  );
};

export default Homepage;
