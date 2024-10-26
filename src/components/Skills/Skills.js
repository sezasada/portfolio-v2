import React, { useState, useCallback, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { ReactComponent as HtmlIcon } from "../../assets/icons/html.svg";
import { ReactComponent as GraphqlIcon } from "../../assets/icons/graphql.svg";
import { ReactComponent as CssIcon } from "../../assets/icons/css.svg";
import { ReactComponent as JavascriptIcon } from "../../assets/icons/javascript.svg";
import { ReactComponent as TypescriptIcon } from "../../assets/icons/typescript.svg";
import { ReactComponent as AwsIcon } from "../../assets/icons/aws.svg";
import { ReactComponent as ReduxIcon } from "../../assets/icons/redux.svg";
import { ReactComponent as ReactIcon } from "../../assets/icons/react.svg";
import { ReactComponent as NextIcon } from "../../assets/icons/next.svg";

import css from "./Skills.module.css";

const Skills = () => {
  const skills = [
    { id: "Skills.javascript", Icon: JavascriptIcon },
    { id: "Skills.typescript", Icon: TypescriptIcon },
    { id: "Skills.graphql", Icon: GraphqlIcon },
    { id: "Skills.html", Icon: HtmlIcon },
    { id: "Skills.css", Icon: CssIcon },
    { id: "Skills.aws", Icon: AwsIcon },
    { id: "Skills.redux", Icon: ReduxIcon },
    { id: "Skills.react", Icon: ReactIcon },
    { id: "Skills.next", Icon: NextIcon },
  ];

  const skillsToShow = 5;
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
      <div className={css.titleStyles}>
        <FormattedMessage id="Skills.title" />
      </div>
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
              <div className={css.skillsContainer}>
                <div className={css.skillsWrapper}>
                  {displayedSkills.map(({ id, Icon }, index) => (
                    <div key={index} className={css.skillWrapper}>
                      {Icon && (
                        <div>
                          <Icon className={css.iconStyles} />
                        </div>
                      )}
                      <FormattedMessage id={id} />
                    </div>
                  ))}
                </div>
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
