import React from "react";
import { FormattedMessage } from "react-intl";
import { SecondaryButton } from "../../design/Button/Button";
import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css.wrapperStyles}>
      <div className={css.contentStyles}>
        <div className={css.titleStyles}>
          <FormattedMessage id="Header.title" />
        </div>
        <div className={css.subTitleStyles}>
          <FormattedMessage id="Header.subTitle" />
        </div>
        <div>
          <SecondaryButton className={css.contactButton} type="button">
            <div>
              <FormattedMessage id="Header.contactButton" />
            </div>
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
