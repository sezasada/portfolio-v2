import React from "react";
import { FormattedMessage } from "react-intl";
import codyImage from "@public/images/testimonials/cody.jpg";

import css from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <div className={css.containerStyles}>
      <div className={css.wrapperStyles}>
        <div className={css.bodyStyles}>
          <div className={css.titleStyles}>
            <FormattedMessage id="Testimonials.title" />
          </div>
          <div className={css.subtitleStyles}>
            <FormattedMessage id="Testimonials.subtitle" />
          </div>
          <hr className={css.divider} />
          <div className={css.testimonialWrapper}>
            <div className={css.testimonialBox}>
              <img
                src={codyImage}
                alt="employee"
                className={css.sectionImage}
              />
              <div className={css.testimonialBio}>
                <div className={css.testimonialName}>
                  <FormattedMessage id="Testimonials.cody" />
                </div>
                <div className={css.testimonialJonTitle}>
                  <FormattedMessage id="Testimonials.codyJobTitle" />
                </div>
              </div>
            </div>
            <div className={css.testimonialReferral}>
              <FormattedMessage id="Testimonials.codyReferral" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
