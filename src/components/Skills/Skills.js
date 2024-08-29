import React, { useState, useCallback, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import css from "./Skills.module.css";

const Skills = () => {
  const skills = [
    "Skills.javascript",
    "Skills.typescript",
    "Skills.graphql",
    "Skills.html",
    "Skills.css",
    "Skills.aws",
  ];

  const skillsToShow = 4;
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  const displayedSkills = skills.slice(
    currentSkillIndex,
    currentSkillIndex + skillsToShow
  );

  // Function to update the index
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      setCurrentSkillIndex(skills.length - skillsToShow);
    } else if (newIndex > skills.length - skillsToShow) {
      setCurrentSkillIndex(0);
    } else {
      setCurrentSkillIndex(newIndex);
    }
  };

  // Function to go to the previous set of skills
  const prev = useCallback(
    (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      const newIndex = currentSkillIndex - 1;
      updateIndex(newIndex);
    },
    [currentSkillIndex, skills.length, skillsToShow]
  );

  // Function to go to the next set of skills
  const next = useCallback(
    (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      const newIndex = currentSkillIndex + 1;
      updateIndex(newIndex);
    },
    [currentSkillIndex, skills.length, skillsToShow]
  );

  // Keyboard navigation
  const onKeyUp = useCallback(
    (e) => {
      switch (e.keyCode) {
        case 37: // Left arrow key
          prev();
          break;
        case 39: // Right arrow key
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
    <div className={css.wrapperStyles}>
      <div className={css.carouselWrapper}>
        <div className={css.controlsContainer}>
          {skills.length > 1 && (
            <>
              <button
                className={css.prev}
                onClick={(e) => prev(e)}
                type="button"
                aria-label="Previous skill"
              />
              <div className={css.skillsWrapper}>
                {displayedSkills.map((skill, index) => (
                  <div key={index} className={css.skillWrapper}>
                    <FormattedMessage id={skill} />
                  </div>
                ))}
              </div>
              <button
                className={css.next}
                onClick={(e) => next(e)}
                type="button"
                aria-label="Next skill"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
