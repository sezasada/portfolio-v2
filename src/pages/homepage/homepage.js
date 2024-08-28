import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
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
    </div>
  );
};

export default Homepage;
