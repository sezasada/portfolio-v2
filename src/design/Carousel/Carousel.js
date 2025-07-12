import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import { FormattedMessage } from "react-intl";
import css from "./Carousel.module.css";
import { SecondaryButton } from "../../design/Button/Button";

const Carousel = ({ items }) => {
  const [expandedItems, setExpandedItems] = useState({});
  const [overflowItems, setOverflowItems] = useState({});

  const descriptionRefs = useRef([]);

  const toggleExpanded = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    // Check if content is overflowing for each description
    const updated = {};
    descriptionRefs.current.forEach((el, index) => {
      if (el) {
        const isOverflowing = el.scrollHeight > el.clientHeight;
        updated[index] = isOverflowing;
      }
    });
    setOverflowItems(updated);
  }, [items]);

  return (
    <div className={css.carousel}>
      <div className={css.mediaWrapper}>
        {items.map((item, index) => {
          const isExpanded = expandedItems[index] || false;
          const isOverflowing = overflowItems[index];

          return (
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
                    controls={true}
                    loop
                  />
                )}

                {item.image && <img src={item.image} alt="carousel item" />}
              </div>

              <div
                ref={(el) => (descriptionRefs.current[index] = el)}
                className={`${css.description} ${
                  !isExpanded ? css.truncated : ""
                }`}
              >
                <FormattedMessage id={item.id} />
              </div>

              {isOverflowing && (
                <button
                  className={css.toggleButton}
                  onClick={() => toggleExpanded(index)}
                >
                  {isExpanded ? "Show less" : "Show more"}
                </button>
              )}

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
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
