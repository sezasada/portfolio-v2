import React from "react";
import { FormattedMessage } from "react-intl";
import css from "./Footer.module.css";
import { ReactComponent as InstagramSquare } from "../../assets/icons/instagram.svg";
import { ReactComponent as LinkedinSquare } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Github } from "../../assets/icons/github.svg";
import { ReactComponent as Dev } from "../../assets/icons/dev.svg";
import { ReactComponent as CopyRight } from "../../assets/icons/copy-right.svg";

const Footer = ({
  scrollToAboutMe,
  scrollToContributions,
  scrollToTestimonials,
  scrollTocontactMe,
}) => {
  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/sebastien-zasada/", "_blank");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/sezasada", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/sebzasada/", "_blank");
  };

  const handleResumeClick = () => {
    window.location.href = "/resume";
  };

  return (
    <div className={css.containerStyles}>
      <div className={css.wrapperStyles}>
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
            <div className={css.testimonialsContainer}>
              <div className={css.testimonialStyles} onClick={scrollToAboutMe}>
                <FormattedMessage id="Navbar.aboutMe" />
              </div>
            </div>
            <div className={css.testimonialWrapper}>
              <div
                className={css.testimonialStyles}
                onClick={scrollToContributions}
              >
                <FormattedMessage id="Navbar.projects" />
              </div>
            </div>
            <div className={css.testimonialWrapper}>
              <div
                className={css.testimonialStyles}
                onClick={scrollToTestimonials}
              >
                <FormattedMessage id="Navbar.testimonials" />
              </div>
            </div>
            <div className={css.testimonialWrapper}>
              <div
                className={css.testimonialStyles}
                onClick={scrollTocontactMe}
              >
                <FormattedMessage id="Navbar.contactMe" />
              </div>
            </div>
            <div className={css.testimonialWrapper}>
              <div
                className={css.testimonialStyles}
                onClick={handleResumeClick}
              >
                <FormattedMessage id="Resume.title" />
              </div>
            </div>

            <div className={css.iconSection}>
              <div className={css.iconStyles} onClick={handleInstagramClick}>
                <InstagramSquare />
              </div>
              <div className={css.iconStyles} onClick={handleLinkedinClick}>
                <LinkedinSquare />
              </div>
              <div className={css.iconStyles} onClick={handleGithubClick}>
                <Github />
              </div>
            </div>
          </div>
        </div>
        <hr className={css.divider} />
        <div className={css.bottomSection}>
          <div className={css.copyStyles}>
            <div className={css.copyIconStyles}>
              <CopyRight />
            </div>
            <FormattedMessage id="Footer.createdBy" />
          </div>
          <div className={css.iconSection}>
            <div className={css.copyStyles}>
              <FormattedMessage id="Footer.rights" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
