import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import css from "./MobileNavbar.module.css";
import { ReactComponent as Dev } from "../../assets/icons/dev.svg";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import Modal from "react-modal";
import MobileMenu from "./MobileMenu";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      position: "relative",
      width: "100vw",
      height: "100vh",
      border: "none",
      borderRadius: 0,
      padding: 0,
      inset: 0,
      backgroundColor: "white",
    },
  };

  const handleMobileMenuClose = () => {
    setIsOpen(false);
  };

  const handleMobileMenuOpen = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
            <div
              className={css.contactTitleStyles}
              onClick={handleMobileMenuOpen}
            >
              <Menu />
            </div>
          </div>
        </div>
        <Modal
          isOpen={isOpen}
          onRequestClose={handleMobileMenuClose}
          style={customStyles}
        >
          <MobileMenu setIsOpen={setIsOpen} />
        </Modal>
      </div>
    </div>
  );
};

export default MobileNavbar;
