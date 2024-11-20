import React, { useState } from "react";
import ReactPlayer from "react-player";
import { FormattedMessage } from "react-intl";
import css from "./Carousel.module.css";
import { SecondaryButton } from "../../design/Button/Button";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const getSlideStyle = (index) => {
    const totalItems = items.length;
    if (index === currentIndex) return css.center;
    if (index === (currentIndex - 1 + totalItems) % totalItems) return css.left;
    if (index === (currentIndex + 1) % totalItems) return css.right;
    return css.hidden;
  };

  return (
    <div className={css.carousel}>
      <div className={`${css.controls} ${css.left}`} onClick={handlePrev}>
        <span className={css.arrowBack}></span>
      </div>
      <div className={css.mediaWrapper}>
        {items.map((item, index) => (
          <div key={index} className={`${css.slide} ${getSlideStyle(index)}`}>
            <div className={css.slideContent}>
              <div className={css.mediaContainer}>
                <div className={css.titleStyles}>
                  <FormattedMessage id={item.title} />
                </div>
                {item.video && (
                  <ReactPlayer
                    url={item.video}
                    width="100%"
                    height="auto"
                    controls={false}
                    loop
                    playing={index === currentIndex}
                    muted={true}
                    playsinline
                  />
                )}
                {item.image && <img src={item.image} alt="carousel item" />}
              </div>
              <div className={css.description}>
                <FormattedMessage id={item.id} />
              </div>
              <div>
                {item.link && (
                  <SecondaryButton
                    className={css.buttonStyles}
                    onClick={() => window.open(item.link, "_blank")}
                  >
                    <FormattedMessage id={"Contributions.visitButton"} />
                  </SecondaryButton>
                )}
                {item.code && (
                  <SecondaryButton
                    className={css.buttonStyles}
                    onClick={() => window.open(item.code, "_blank")}
                  >
                    <FormattedMessage id={"Contributions.codeButton"} />
                  </SecondaryButton>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={`${css.controls} ${css.right}`} onClick={handleNext}>
        <span className={css.arrowNext}></span>
      </div>
    </div>
  );
};

export default Carousel;
