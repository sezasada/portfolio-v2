import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import css from "./Carousel.module.css";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("");

  const handleNext = () => {
    setAnimationDirection("next");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setAnimationDirection("back");
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className={css.carousel}>
      <div className={css.mediaWrapper}>
        <div className={`${css.controls} ${css.left}`} onClick={handlePrev}>
          <span className={css.arrowBack}></span>
        </div>

        <div className={css.slide} key={currentIndex}>
          {items[currentIndex].video && (
            <video src={items[currentIndex].video} controls />
          )}
          {items[currentIndex].image && (
            <img src={items[currentIndex].image} alt="carousel item" />
          )}
        </div>

        <div className={`${css.controls} ${css.right}`} onClick={handleNext}>
          <span className={css.arrowNext}></span>
        </div>
      </div>

      <div
        className={`${css.description} ${
          animationDirection === "next" ? css["next-enter"] : css["back-enter"]
        }`}
        key={`description-${currentIndex}`}
      >
        <FormattedMessage id={items[currentIndex].id} />
      </div>
    </div>
  );
};

export default Carousel;
