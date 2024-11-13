import React from "react";
import { FormattedMessage } from "react-intl";
import { SecondaryButton } from "../../design/Button/Button";
import profileImage from "../../assets/images/header-images/profile-image.png";
import css from "./Header.module.css";

const Header = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:sezasada@icloud.com";
  };
  return (
    <div className={css.wrapperStyles}>
      <div className={css.contentStyles}>
        <div className={css.titleStyles}>
          <FormattedMessage id="Header.title" />
        </div>
        <div className={css.subTitleStyles}>
          <FormattedMessage id="Header.subTitle" />
        </div>
        <div className={css.buttonWrapper}>
          <SecondaryButton
            className={css.contactButton}
            type="button"
            onClick={handleContactClick}
          >
            <div>
              <FormattedMessage id="Header.contactButton" />
            </div>
          </SecondaryButton>
        </div>
      </div>
      <div className={css.imageContainer}>
        <div className={css.imageWrapper}>
          <img src={profileImage} alt="sebastien" className={css.headerImage} />
        </div>
      </div>
    </div>
  );
};

export default Header;
