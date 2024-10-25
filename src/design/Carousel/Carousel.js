import React, { useState, useCallback, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import css from "./Carousel.module.css";

const Carousel = ({ items, skillsToShow = 1 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const displayedItems = items.slice(currentIndex, currentIndex + skillsToShow);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      setCurrentIndex(items.length - skillsToShow);
    } else if (newIndex > items.length - skillsToShow) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(newIndex);
    }
  };

  const prev = useCallback(
    (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      const newIndex = currentIndex - 1;
      updateIndex(newIndex);
    },
    [currentIndex, items.length, skillsToShow]
  );

  const next = useCallback(
    (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      const newIndex = currentIndex + 1;
      updateIndex(newIndex);
    },
    [currentIndex, items.length, skillsToShow]
  );

  const onKeyUp = useCallback(
    (e) => {
      switch (e.keyCode) {
        case 37:
          prev();
          break;
        case 39:
          next();
          break;
        default:
      }
    },
    [prev, next]
  );

  useEffect(() => {
    window.addEventListener("keyup", onKeyUp);

    return () => {
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [onKeyUp]);

  return (
    <div className={css.carouselWrapper}>
      <button
        className={css.prev}
        onClick={prev}
        type="button"
        aria-label="Previous item"
      />

      <div className={css.skillsContainer}>
        {displayedItems.map(({ id, video, image }, index) => (
          <div key={index} className={css.skillWrapper}>
            {video && (
              <video className={css.videoStyles} src={video} controls />
            )}
            {image && <img className={css.imageStyles} src={image} alt={id} />}
            <div className={css.descriptionStyles}>
              <FormattedMessage id={id} />
            </div>
          </div>
        ))}
      </div>

      <button
        className={css.next}
        onClick={next}
        type="button"
        aria-label="Next item"
      />
    </div>
  );
};

export default Carousel;
