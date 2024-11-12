import React from "react";
import { FormattedMessage } from "react-intl";
import css from "./MobileNavbar.module.css";
import { ReactComponent as Dev } from "../../assets/icons/dev.svg";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";

const Navbar = ({
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

  const handleContactClick = () => {
    window.location.href = "mailto:sezasada@icloud.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+12187900487";
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
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
