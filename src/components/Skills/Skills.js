import React from "react";
import { FormattedMessage } from "react-intl";
import css from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={css.wrapperStyles}>
      <div className={css.carouselWrapper}>
        <div>
          <FormattedMessage id="Skills.javascript" />
        </div>
        <div>
          <FormattedMessage id="Skills.typescript" />
        </div>
        <div>
          <FormattedMessage id="Skills.graphql" />
        </div>
        <div>
          <FormattedMessage id="Skills.html" />
        </div>
        <div>
          <FormattedMessage id="Skills.css" />
        </div>
        <div>
          <FormattedMessage id="Skills.aws" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
