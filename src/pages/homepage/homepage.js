import React, { useRef, useEffect } from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Skills from "../../components/Skills/Skills";
import Contributions from "../../components/Contributions/Contributions";
import Testimonials from "../../components/Testimonials/Testimonials";
import ContactMe from "../../components/ContactMe/ContactMe";
import Footer from "../../components/Footer/Footer";
import css from "./homepage.module.css";
import { FormattedMessage } from "react-intl";

const Homepage = () => {
  const aboutMeRef = useRef(null);
  const contributionsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactMeRef = useRef(null);
  const location = useLocation();

  const scrollToAboutMe = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToContributions = () => {
    if (contributionsRef.current) {
      contributionsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToTestimonials = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollTocontactMe = () => {
    if (contactMeRef.current) {
      contactMeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    if (location.hash === "#references") {
      setTimeout(() => {
        scrollToTestimonials();
      }, 500);
    }
  }, [location.hash]);

  return (
    <div className={css.pageWrapper}>
      <div className={css.mobileMessage}>
        <FormattedMessage id="Homepage.mobileMessage" />
      </div>
      <div className={css.homepageContainer}>
        <div className={css.navbarWrapper}>
          <Navbar
            scrollToAboutMe={scrollToAboutMe}
            scrollToContributions={scrollToContributions}
            scrollToTestimonials={scrollToTestimonials}
            scrollTocontactMe={scrollTocontactMe}
          />
        </div>
        <div>
          <Header />
        </div>
        <div ref={aboutMeRef}>
          <AboutMe scrollToContributions={scrollToContributions} />
        </div>
        <div>
          <Skills />
        </div>
        <div ref={contributionsRef}>
          <Contributions />
        </div>
        <div ref={testimonialsRef}>
          <Testimonials />
        </div>
        <div ref={contactMeRef}>
          <ContactMe />
        </div>
        <div>
          <Footer
            scrollToAboutMe={scrollToAboutMe}
            scrollToContributions={scrollToContributions}
            scrollToTestimonials={scrollToTestimonials}
            scrollTocontactMe={scrollTocontactMe}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
