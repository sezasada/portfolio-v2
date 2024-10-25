import React from "react";
import { FormattedMessage } from "react-intl";
import css from "./Navbar.module.css";
import { ReactComponent as InstagramSquare } from "@public/icons/instagram.svg";
import { ReactComponent as LinkedinSquare } from "@public/icons/linkedin.svg";
import { ReactComponent as Github } from "@public/icons/github.svg";
import { ReactComponent as Dev } from "@public/icons/dev.svg";

const Navbar = ({
  scrollToAboutMe,
  scrollToContributions,
  scrollToTestimonials,
  scrollTocontactMe,
}) => {
  return (
    <div className={css.navbarContainer}>
      <div className={css.topSection}>
        <div className={css.leftSideStyles}>
          <div className={css.logoWrapper}>
            <div className={css.logoStyles}>
              <div className={css.iconWrapper}>
                <Dev />
              </div>
            </div>
            <div>
              <div className={css.nameWrapper}>
                <FormattedMessage id="Navbar.firstName" />
              </div>
              <div className={css.titleWrapper}>
                <FormattedMessage id="Navbar.title" />
              </div>
            </div>
          </div>
        </div>
        <div className={css.rightSideStyles}>
          <div className={css.emailWrapper}>
            <div className={css.contactTitleStyles}>
              <FormattedMessage id="Navbar.contactCta" />
            </div>
            <div className={css.contactValueStyles}>
              <FormattedMessage id="Navbar.emailCta" />
            </div>
          </div>
          <div className={css.numberWrapper}>
            <div className={css.contactTitleStyles}>
              <FormattedMessage id="Navbar.phoneCta" />
            </div>
            <div className={css.contactValueStyles}>
              <FormattedMessage id="Navbar.phoneNumberCta" />
            </div>
          </div>
        </div>
      </div>
      <hr className={css.divider} />
      <div className={css.bottomSection}>
        <div className={css.navbarStyles}>
          <div className={css.navItemStyles} onClick={scrollToAboutMe}>
            <FormattedMessage id="Navbar.aboutMe" />
          </div>
          <div className={css.navItemStyles} onClick={scrollToContributions}>
            <FormattedMessage id="Navbar.projects" />
          </div>
          <div className={css.navItemStyles} onClick={scrollToTestimonials}>
            <FormattedMessage id="Navbar.testimonials" />
          </div>
          <div className={css.navItemStyles} onClick={scrollTocontactMe}>
            <FormattedMessage id="Navbar.contactMe" />
          </div>
        </div>
        <div className={css.iconSection}>
          <div className={css.iconStyles}>
            <InstagramSquare />
          </div>
          <div className={css.iconStyles}>
            <LinkedinSquare />
          </div>
          <div className={css.iconStyles}>
            <Github />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
