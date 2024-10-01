import React from "react";
import { FormattedMessage } from "react-intl";
import codeImage from "@public/images/about-images/code.webp";
import css from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={css.wrapperStyles}>
      <div className={css.columnOne}>
        <div className={css.boxStylesOne}/>
        <img src={codeImage} alt="code" className={css.sectionImage} />
        <div className={css.boxStylesTwo}/>
      </div>
      <div className={css.columnTwo}>
        <div>
          <FormattedMessage id="AboutMe.title" />
        </div>
        <div>
          <FormattedMessage id="AboutMe.subTitle" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
