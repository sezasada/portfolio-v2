import React from "react";
import { FormattedMessage } from "react-intl";
import { ReactComponent as Mail } from "@public/icons/mail.svg";
import { ReactComponent as Phone } from "@public/icons/phone.svg";
import { ReactComponent as Linkedin } from "@public/icons/linkedin-v2.svg";

import css from "./ContactMe.module.css";

const ContactMe = () => {
  return (
    <div className={css.containerStyles}>
      <div className={css.wrapperStyles}>
        <div className={css.headingStyles}>
          <div className={css.titleStyles}>
            <FormattedMessage id="ContactMe.title" />
          </div>
          <div className={css.subtitleStyles}>
            <FormattedMessage id="ContactMe.subtitle" />
          </div>
          <hr className={css.divider} />
        </div>
        <div className={css.bodyStyles}>
          <div className={css.sectionStyles}>
            <Mail className={css.iconStyles} />
            <div className={css.subheadingStyles}>
              <FormattedMessage id="ContactMe.writeMe" />
            </div>
            <div className={css.contactStyles}>
              <FormattedMessage id="ContactMe.emailAddress" />
            </div>
          </div>
          <div className={css.sectionStyles}>
            <Phone className={css.iconStyles} />
            <div className={css.subheadingStyles}>
              <FormattedMessage id="ContactMe.callMe" />
            </div>
            <div className={css.contactStyles}>
              <FormattedMessage id="ContactMe.phoneNumber" />
            </div>
          </div>
          <div className={css.sectionStyles}>
            <Linkedin className={css.iconStyles} />
            <div className={css.subheadingStyles}>
              <FormattedMessage id="ContactMe.findMe" />
            </div>
            <div className={css.contactStyles}>
              <FormattedMessage id="ContactMe.linkedinUsername" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
