import React from "react";
import { FormattedMessage } from "react-intl";
import { ReactComponent as InstagramSquare } from "../../assets/icons/instagram.svg";
import { ReactComponent as LinkedinSquare } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Mail } from "../../assets/icons/mail-small.svg";
import { ReactComponent as Phone } from "../../assets/icons/phone-small.svg";
import { ReactComponent as Github } from "../../assets/icons/github.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { ReactComponent as Paper } from "../../assets/icons/paper.svg";

import css from "./MobileNavbar.module.css";

const MobileNavbar = ({ setIsOpen }) => {
  const handleMobileMenuClose = () => {
    setIsOpen(false);
  };

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
    <>
      <div className={css.navbarMenuContainer}>
        <div className={css.topSectionStyles}>
          <div className={css.iconStyles} onClick={handleMobileMenuClose}>
            <Close />
          </div>
        </div>
        <div className={css.linkRow} onClick={handleLinkedinClick}>
          <LinkedinSquare className={css.icon} />
          <FormattedMessage id="Navbar.linkedin" />
        </div>
        <div className={css.linkRow} onClick={handleGithubClick}>
          <Github className={css.icon} />
          <FormattedMessage id="Navbar.github" />
        </div>
        <div className={css.linkRow} onClick={handleInstagramClick}>
          <InstagramSquare className={css.icon} />
          <FormattedMessage id="Navbar.instagram" />
        </div>
        <div className={css.linkRow} onClick={handleContactClick}>
          <Mail className={css.icon} />
          <FormattedMessage id="Navbar.contactCta" />
        </div>
        <div className={css.linkRow} onClick={handlePhoneClick}>
          <Phone className={css.icon} />
          <FormattedMessage id="Navbar.phoneCta" />
        </div>
        <div className={css.linkRow} onClick={handleResumeClick}>
          <Paper className={css.icon} />
          <FormattedMessage id="Resume.title" />
        </div>
      </div>
    </>
  );
};
export default MobileNavbar;
