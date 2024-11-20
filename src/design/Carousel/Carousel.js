import React from "react";
import ReactPlayer from "react-player";
import { FormattedMessage } from "react-intl";
import css from "./Carousel.module.css";
import { SecondaryButton } from "../../design/Button/Button";

const Carousel = ({ items }) => {

  return (
    <div className={css.carousel}>
      <div className={css.mediaWrapper}>
        {items.map((item, index) => (
          <div key={index} className={css.slide}>
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
                  playing={true}
                  muted={true}
                  playsinline
                />
              )}
              {item.image && <img src={item.image} alt="carousel item" />}
            </div>
            <div className={css.description}>
              <FormattedMessage id={item.id} />
            </div>
            <div className={css.buttonWrapper}>
              {item.link && (
                <SecondaryButton
                  className={css.buttonStyles}
                  onClick={() => window.open(item.link, "_blank")}
                >
                  <FormattedMessage id="Contributions.visitButton" />
                </SecondaryButton>
              )}
              {item.code && (
                <SecondaryButton
                  className={css.buttonStyles}
                  onClick={() => window.open(item.code, "_blank")}
                >
                  <FormattedMessage id="Contributions.codeButton" />
                </SecondaryButton>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
