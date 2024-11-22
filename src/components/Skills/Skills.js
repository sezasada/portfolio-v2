import React from "react";
import { FormattedMessage } from "react-intl";
import { ReactComponent as HtmlIcon } from "../../assets/icons/html.svg";
import { ReactComponent as GraphqlIcon } from "../../assets/icons/graphql.svg";
import { ReactComponent as CssIcon } from "../../assets/icons/css.svg";
import { ReactComponent as JavascriptIcon } from "../../assets/icons/javascript.svg";
import { ReactComponent as TypescriptIcon } from "../../assets/icons/typescript.svg";
import { ReactComponent as CSharpIcon } from "../../assets/icons/csharp.svg";
import { ReactComponent as AwsIcon } from "../../assets/icons/aws.svg";
import { ReactComponent as ReduxIcon } from "../../assets/icons/redux.svg";
import { ReactComponent as ReactIcon } from "../../assets/icons/react.svg";
import { ReactComponent as NextIcon } from "../../assets/icons/next.svg";
import Marquee from "react-fast-marquee";

import css from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={css.wrapperStyles}>
      <div className={css.containerStyles}>
        <div className={css.titleStyles}>
          <FormattedMessage id="Skills.title" />
        </div>
        <Marquee autoFill>
          <div className={css.skillWrapper}>
            <JavascriptIcon className={css.iconStyles} />
            <FormattedMessage id="Skills.javascript" />
          </div>
          <div className={css.skillWrapper}>
            <TypescriptIcon className={css.iconStyles} />
            <FormattedMessage id="Skills.typescript" />
          </div>
          <div className={css.skillWrapper}>
            <CSharpIcon className={css.iconStyles} />
            <FormattedMessage id="Skills.csharp" />
          </div>
          <div className={css.skillWrapper}>
            <GraphqlIcon className={css.iconStyles} />
            <FormattedMessage id="Skills.graphql" />
          </div>
          <div className={css.skillWrapper}>
            <HtmlIcon className={css.iconStyles} />
            <FormattedMessage id="Skills.html" />
          </div>
          <div className={css.skillWrapper}>
            <CssIcon className={css.iconStyles} />
            <FormattedMessage id="Skills.css" />
          </div>
          <div className={css.skillWrapper}>
            <AwsIcon className={css.iconStyles} />
            <FormattedMessage id="Skills.aws" />
          </div>
          <div className={css.skillWrapper}>
            <ReduxIcon className={css.iconStyles} />
            <FormattedMessage id="Skills.redux" />
          </div>
          <div className={css.skillWrapper}>
            <ReactIcon className={css.iconStyles} />
            <FormattedMessage id="Skills.react" />
          </div>
          <div className={css.skillWrapper}>
            <NextIcon className={css.iconStyles} />
            <FormattedMessage id="Skills.next" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
