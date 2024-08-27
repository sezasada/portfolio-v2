import React from "react";
import { FormattedMessage } from "react-intl";
import { PrimaryButton } from "../../design/Button/Button";
import css from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={css.titleStyles}>
        <FormattedMessage id="Header.title" />
      </div>
      <div className={css.subTitleStyles}>
        <FormattedMessage id="Header.subTitle" />
      </div>
      <div>
        <PrimaryButton className={css.contactButton} type="button">
          <div>
            <FormattedMessage id="Header.contactButton" />
          </div>
        </PrimaryButton>
      </div>
    </>
  );
};

export default Header;
