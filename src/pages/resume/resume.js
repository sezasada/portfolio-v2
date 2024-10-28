import React from "react";
import resumePdf from "../../assets/images/resume/Sebastien.pdf";
import css from "./resume.module.css";
import Navbar from "../../components/Navbar/Navbar";

const Resume = () => {
  const scrollToAboutMe = () => {
    window.location.href = "/#about";
  };

  const scrollToContributions = () => {
    window.location.href = "/#contributions";
  };

  const scrollToTestimonials = () => {
    window.location.href = "/#references";
  };

  const scrollTocontactMe = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className={css.pageWrapper}>
      <div className={css.navbarWrapper}>
        <Navbar
          scrollToAboutMe={scrollToAboutMe}
          scrollToContributions={scrollToContributions}
          scrollToTestimonials={scrollToTestimonials}
          scrollTocontactMe={scrollTocontactMe}
        />
      </div>
      <div className={css.resumeContainer}>
        <iframe
          src={resumePdf}
          title="Sebastien's Resume"
          className={css.resumeIframe}
        />
      </div>
    </div>
  );
};

export default Resume;
