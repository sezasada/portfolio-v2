import React from "react";
import { FormattedMessage } from "react-intl";
import codeImage from "@public/images/about-images/code.webp";
import { ReactComponent as CheckMark } from "@public/icons/check.svg";
import { ReactComponent as Info } from "@public/icons/info.svg";

import css from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={css.wrapperStyles}>
      <div className={css.columnOne}>
        <div className={css.boxStylesOne} />
        <img src={codeImage} alt="code" className={css.sectionImage} />
        <div className={css.boxStylesTwo} />
      </div>
      <div className={css.columnTwo}>
        <div className={css.titleStyles}>
          <FormattedMessage id="AboutMe.title" />
        </div>
        <div className={css.subtitleStyles}>
          <FormattedMessage id="AboutMe.subTitle" />
        </div>
        <div className={css.bodyOneStyles}>
          <FormattedMessage id="AboutMe.bodyCopyOne" />
        </div>
        <div className={css.sectionStyles}>
          <div className={css.sectionHeaderStyles}>
            <Info className={css.iconStyles} />
            <FormattedMessage id="AboutMe.sectionHeader" />
          </div>
          <div className={css.sectionBodyStyles}>
            <CheckMark className={css.iconStyles} />
            <FormattedMessage id="AboutMe.sectionCopyOne" />
          </div>
          <div className={css.sectionBodyStyles}>
            <CheckMark className={css.iconStyles} />
            <FormattedMessage id="AboutMe.sectionCopyTwo" />
          </div>
        </div>
        <div className={css.sectionStyles}>
          <div className={css.sectionBodyStyles}>
            <CheckMark className={css.iconStyles} />
            <FormattedMessage id="AboutMe.sectionCopyThree" />
          </div>
          <div className={css.sectionBodyStyles}>
            <CheckMark className={css.iconStyles} />
            <FormattedMessage id="AboutMe.sectionCopyFour" />
          </div>
          <div className={css.sectionBodyStyles}>
            <CheckMark className={css.iconStyles} />
            <FormattedMessage id="AboutMe.sectionCopyFive" />
          </div>
        </div>
        <div className={css.bodyOneStyles}>
          <FormattedMessage id="AboutMe.bodyCopyTwo" />
        </div>
        <div className={css.buttonStyles}>
          <FormattedMessage id="AboutMe.portfolioButton" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
