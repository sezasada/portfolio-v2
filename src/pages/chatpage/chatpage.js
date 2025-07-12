import React from "react";
import ChatBot from "../../components/ChatBot/ChatBot";
import Navbar from "../../components/Navbar/Navbar";
import MobileNavbar from "../../components/Navbar/MobileNavbar";
import css from "./chatpage.module.css";

const ChatPage = () => {
  const scrollToAboutMe = () => {
    window.open("https://www.sebastienzasada.com#about", "_blank");
  };

  const scrollToContributions = () => {
    window.open("https://www.sebastienzasada.com#contributions", "_blank");
  };

  const scrollToTestimonials = () => {
    window.open("https://www.sebastienzasada.com#references", "_blank");
  };

  const scrollTocontactMe = () => {
    window.open("https://www.sebastienzasada.com#contact", "_blank");
  };

  return (
    <div className={css.pageContainer}>
      <div className={css.pageStyles}>
        <div className={css.mobileStyles}>
          <MobileNavbar />
        </div>
        <div className={css.pageWrapper}>
          <div className={css.navbarWrapper}>
            <div className={css.desktopStyles}>
              <Navbar
                scrollToAboutMe={scrollToAboutMe}
                scrollToContributions={scrollToContributions}
                scrollToTestimonials={scrollToTestimonials}
                scrollTocontactMe={scrollTocontactMe}
              />
            </div>
          </div>
          <div className={css.chatWrapper}>
            <ChatBot />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
