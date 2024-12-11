import React from "react";
import { FormattedMessage } from "react-intl";
import css from "./Navbar.module.css";
import { ReactComponent as InstagramSquare } from "../../assets/icons/instagram.svg";
import { ReactComponent as LinkedinSquare } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Github } from "../../assets/icons/github.svg";
import { ReactComponent as Dev } from "../../assets/icons/dev.svg";

const Navbar = ({
  scrollToAboutMe,
  scrollToContributions,
  scrollToTestimonials,
  scrollTocontactMe,
  showChatGPT,
  showHomepage,
}) => {
  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/sebastien-zasada/", "_blank");
  };

  const homepageClick = () => {
    window.location.href = "/";
  };

  const handleGithubClick = () => {
    window.open("https://github.com/sezasada", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/sebzasada/", "_blank");
  };

  const handleContactClick = () => {
    window.location.href = "mailto:sezasada@icloud.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+12187900487";
  };

  const handleGPTClick = () => {
    window.open("https://www.sebastienzasada.com/chatbot", "_blank");
  };

  const handleHomepageClick = () => {
    window.open("https://www.sebastienzasada.com/", "_blank");
  };

  const handleResumeClick = () => {
    window.open(
      "https://docs.google.com/document/d/e/2PACX-1vTAOqx2eFUHGAj6mZ4LoVfa62gjUn4XzHW2BWVgHfKL7QuBsIGOa7HjhRVNI40SfA/pub",
      "_blank"
    );
  };

  return (
    <div className={css.navbarContainer}>
      <div className={css.topSection}>
        <div className={css.leftSideStyles}>
          <div className={css.logoWrapper} onClick={homepageClick}>
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
            <div
              className={css.contactValueStyles}
              onClick={handleContactClick}
            >
              <FormattedMessage id="Navbar.emailCta" />
            </div>
          </div>
          <div className={css.numberWrapper}>
            <div className={css.contactTitleStyles}>
              <FormattedMessage id="Navbar.phoneCta" />
            </div>
            <div className={css.contactValueStyles}>
              <FormattedMessage
                id="Navbar.phoneNumberCta"
                onClick={handlePhoneClick}
              />
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
          <div className={css.navItemStyles} onClick={handleResumeClick}>
            <FormattedMessage id="Resume.title" />
          </div>
          {showChatGPT && (
            <div className={css.navItemStyles} onClick={handleGPTClick}>
              <FormattedMessage id="Navbar.chatGPT" />
            </div>
          )}
          {showHomepage && (
            <div className={css.navItemStyles} onClick={handleHomepageClick}>
              <FormattedMessage id="Navbar.homepage" />
            </div>
          )}
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
  );
};

export default Navbar;
