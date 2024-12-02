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
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      width: "100vw",
      height: "100vh",
      border: "none",
      borderRadius: 0,
      padding: 0,
      backgroundColor: "white",
      zIndex: 100,
    },
    overlay: {
      zIndex: 100,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };
  
  const homepageClick = () => {
    window.location.href = "/";
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
    <>
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
              <div
                className={css.contactTitleStyles}
                onClick={handleMobileMenuOpen}
              >
                <Menu />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={css.navbarMenuContainer}>
        <Modal
          isOpen={isOpen}
          onRequestClose={handleMobileMenuClose}
          style={customStyles}
        >
          <MobileMenu setIsOpen={setIsOpen} />
        </Modal>
      </div>
    </>
  );
};

export default MobileNavbar;
